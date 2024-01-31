interface CartItm { 
  id: number, 
  name: string, 
  imgUrl: string, 
  price: string
}

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cartItems: [] as CartItm[]
    }
  },
  getters: {
    productByIdExistsOnCart: (state) => {
      return (id: number) => state.cartItems.some(elem => elem.id === id);
    }
  },
  actions: {
    addToCart(newItem: CartItm) {
      if(!this.cartItems.some(elem => elem.id === newItem.id)) {
        this.cartItems.push(newItem);
      }
    },
    cleanCart() {
      this.cartItems = []
    },
    deleteById(itemId: number) {
      const objToDelete = this.cartItems.findIndex((elem) => elem.id === itemId);

      if (objToDelete !== -1) {
        this.cartItems.splice(objToDelete, 1);
      }
    }
  }
});