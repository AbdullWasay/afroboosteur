'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Shop() {
  const products = [
    { id: 1, name: 'T-shirt Afroboost', price: '35 CHF', image: '/images/tshirt.png' },
    { id: 2, name: 'Chaussettes Afroboost', price: '15 CHF', image: '/images/socks.png' },
    { id: 3, name: 'Carte Réduc’ Afroboost', price: '100 CHF/an', image: '/images/card.png' },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 gradient-text"
      >
        Boutique Afroboost 🛍️
      </motion.h1>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: product.id * 0.1 }}
            className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg"
          >
            <div className="w-32 h-32 mb-4 rounded-xl bg-gray-800 flex items-center justify-center text-4xl">
              {/* Placeholder image area */}
              <span role="img" aria-label={product.name}>
                🛒
              </span>
            </div>
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-[#D91CD2] font-bold mb-4">{product.price}</p>
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#D91CD2] to-[#7000FF] text-sm font-semibold hover:opacity-90 transition">
              Bientôt disponible
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-white underline underline-offset-4"
        >
          Revenir à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}