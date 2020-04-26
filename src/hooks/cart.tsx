import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      // await AsyncStorage.setItem('@GoMarketplace:products', '[]');
      const loadedProducts = await AsyncStorage.getItem(
        '@GoMarketplace:products',
      );

      setProducts(JSON.parse(loadedProducts || '[]'));
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async product => {
      const searchedProduct = products.find(p => p.id === product.id);
      let newProducts = [];

      if (searchedProduct) {
        searchedProduct.quantity += 1;
        newProducts = products.map(p => (p.id === product.id ? product : p));
      } else {
        newProducts = [...products, { ...product, quantity: 1 }];
      }

      setProducts(newProducts);
      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(newProducts),
      );
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      const product = products.find(p => p.id === id);
      let newProducts: Product[] = [];

      if (product) {
        product.quantity += 1;
        newProducts = products.map(p => (p.id === id ? product : p));
        setProducts(newProducts);
      }
      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(newProducts),
      );
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const product = products.find(p => p.id === id);
      let newProducts: Product[] = [];

      if (product) {
        if (product.quantity === 1) {
          newProducts = products.filter(p => p.id !== id);
        } else {
          product.quantity -= 1;
          newProducts = products.map(p => (p.id === id ? product : p));
        }

        setProducts(newProducts);
      }
      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(newProducts),
      );
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
