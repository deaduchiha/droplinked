const addItem = (product) => {
  return {
    type: "ADD_ITEM",
    payload: product,
  };
};

const removeItem = (product) => {
  return {
    type: "REMOVE_ITEM",
    payload: product,
  };
};

const checkout = (product) => {
  return {
    type: "CHECKOUT",
  };
};

const clear = (product) => {
  return {
    type: "CLEAR",
  };
};

export { addItem, removeItem, checkout, clear };
