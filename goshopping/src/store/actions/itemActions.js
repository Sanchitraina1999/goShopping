export const createItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection("items")
      .add({
        ...item,
        authorFirstName: "Sanchit",
        authorLasrName: "Raina",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_ITEM", item });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_ITEM_ERROR", err });
      });
  };
};
