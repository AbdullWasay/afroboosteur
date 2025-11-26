// server-checkout.js
require('dotenv').config();
const express = require('express');
const Stripe = require('stripe');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('.'));

// Use environment variable for Stripe key (fallback to your key for testing)
const stripeKey = process.env.STRIPE_SECRET_KEY ;
const stripe = new Stripe(stripeKey, { apiVersion: '2022-11-15' });

app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount_cents = 1000, currency = 'chf' } = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount_cents,
      currency: currency,
      payment_method_types: ['card'], // Note: TWINT needs special setup for Payment Intents
      metadata: {
        order_id: 'demo_order_' + Date.now()
      }
    });

    res.json({
      client_secret: paymentIntent.client_secret
    });
  } catch (err) {
    console.error('Payment Intent Error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/create-checkout-session', async (req, res) => {
  try {
    const { amount_cents = 1000, payment_method } = req.body; // amount in centimes (CHF)
    
    let payment_method_types = ['card'];
    if (payment_method === 'twint') {
      payment_method_types = ['twint'];
    } else {
      payment_method_types = ['card', 'twint']; // Allow both for flexibility
    }
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: payment_method_types,
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'chf', // ✅ must be 'chf'
            product_data: { name: 'Demo product (TWINT & Card test)' },
            unit_amount: amount_cents,
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:4242/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:4242/cancel',
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Checkout Session Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the advanced payment page with TWINT
app.get('/advanced', (req, res) => {
  res.sendFile(path.join(__dirname, 'payment-with-twint.html'));
});

app.get('/success', (req, res) => res.send('Payment success'));
app.get('/cancel', (req, res) => res.send('Payment canceled'));

app.listen(4242, () => {
  console.log('Checkout server listening on port 4242');
  console.log('Visit http://localhost:4242 to test the embedded payment');
  console.log('Visit http://localhost:4242/advanced to test with TWINT tabs');
});
