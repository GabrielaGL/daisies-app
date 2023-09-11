import React from 'react';

import Router from './src/routes/Router';
import { CartProvider } from './src/components/CartContext';

export default function App() {
  return (
    <CartProvider>
    <Router />
    </CartProvider>
  );
}




