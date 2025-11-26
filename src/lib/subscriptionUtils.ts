import { userSubscriptionService, offerPurchaseService } from './database';
import { UserSubscription } from '@/types';
import { Timestamp } from 'firebase/firestore';

export interface UserSubscriptionStatus {
  hasActiveSubscription: boolean;
  hasPurchasedOffer: boolean;
  subscription: UserSubscription | null;
  isExpired: boolean;
}

/**
 * Check if user has active subscription or has purchased an offer
 */
export async function checkUserSubscriptionStatus(userId: string): Promise<UserSubscriptionStatus> {
  try {
    // Check for active subscription
    const subscription = await userSubscriptionService.getActiveByUserId(userId);
    
    let hasActiveSubscription = false;
    let isExpired = false;

    if (subscription) {
      // Check if subscription is expired
      if (subscription.planType === 'annual' && subscription.endDate) {
        const endDate = subscription.endDate instanceof Timestamp
          ? subscription.endDate.toDate()
          : new Date(subscription.endDate);
        isExpired = endDate < new Date();
      } else if (subscription.planType === 'session_pack') {
        // Session pack is expired if no sessions remaining
        isExpired = !subscription.remainingSessions || subscription.remainingSessions <= 0;
      }
      
      hasActiveSubscription = !isExpired && subscription.status === 'active';
    }

    // Check if user has purchased any offer
    const hasPurchasedOffer = await offerPurchaseService.hasActivePurchase(userId);

    return {
      hasActiveSubscription,
      hasPurchasedOffer,
      subscription: hasActiveSubscription ? subscription : null,
      isExpired
    };
  } catch (error) {
    console.error('Error checking subscription status:', error);
    return {
      hasActiveSubscription: false,
      hasPurchasedOffer: false,
      subscription: null,
      isExpired: false
    };
  }
}

/**
 * Determine if user should see offers popup
 * Returns true if user should see offers (new user or expired subscription)
 */
export async function shouldShowOffersPopup(userId: string): Promise<boolean> {
  const status = await checkUserSubscriptionStatus(userId);
  
  // Show offers if:
  // 1. No active subscription AND no purchased offer (new user)
  // 2. Subscription is expired
  return (!status.hasActiveSubscription && !status.hasPurchasedOffer) || status.isExpired;
}

