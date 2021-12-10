export const cartReduce = (state, action) => {
    switch (action.type) {
      case 'ADD_PROD':
        const checkIfProdAlreadyExists = state.filter(prod => (
          prod.prodcId === action.payload.prodcId
        ));
        if (!checkIfProdAlreadyExists.length) {
          return [...state, action.payload];
        }
        return state;
      default:
        return state;
    }
  }