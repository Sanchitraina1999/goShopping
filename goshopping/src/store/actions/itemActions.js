export const createItem = (item) => {
  return (dispatch, getState,{getFirebase,getFirestore}) => {
    //make async call to database
    dispatch({ type: "CREATE_ITEM", item });
  };
};
