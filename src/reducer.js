export const initialState = {
  basket: [],
  user: JSON.parse(localStorage.getItem("user")),
  address: {},
};

export const getbaskettotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
  console.log("action>>>>", action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "Remove_Product":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newbasket = [...state.basket];

      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn(`can't remove product whose id is ${index}`);
      }

      return {
        ...state,
        basket: newbasket,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: { ...action.item },
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
