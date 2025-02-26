import { create } from "zustand";

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product, quantity, selectedColor, selectedSize) => 
        set((state) => {
            const existingItem = state.cart.find(
                (item) => 
                    item.id === product.id &&
                    item.size === selectedSize &&
                    item.color === selectedColor
            );

            if (existingItem) {
                return {
                    cart: state.cart.map((item) => 
                        item.id === product.id &&
                        item.color === selectedColor &&
                        item.size === selectedSize 
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    ),
                };
            }

            return {
                cart: [
                    ...state.cart,
                    { ...product, quantity, color: selectedColor, size: selectedSize },
                ],
            };
        }),

    updateQuantity: (id, size, color, newQuantity) => 
        set((state) => ({
            cart: state.cart.map((item) => 
                item.id === id && item.size === size && item.color === color
                    ? {...item, quantity: newQuantity}
                    : item
            ),
    })),

    removeFromCart: (id,size, color) => 
        set((state) => ({ 
            cart: state.cart.filter((item) => 
                !(item.id === id && item.size === size && item.color === color)) 
        })),
    clearCart: () => set({ cart: [] }),
}));

export default useCartStore; 
