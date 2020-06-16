export const createItem = (item) => {
  return (dispatch, getState, { getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("items")
      .add({
        ...item,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
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
