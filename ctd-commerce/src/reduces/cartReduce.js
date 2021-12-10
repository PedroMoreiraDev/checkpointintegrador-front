export const cartReduce = (state, action) => {
    switch (action.type) {
      case 'ADD_PROD':
        const checkIfProdAlreadyExists = state.filter(prod => (
          prod.id === action.payload.id
        ));
        if (!checkIfProdAlreadyExists.length) {
          return [...state, action.payload];
        }
        return state;
      default:
        return state;
    }
  }