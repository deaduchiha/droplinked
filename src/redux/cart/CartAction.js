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

export { addItem, removeItem };
