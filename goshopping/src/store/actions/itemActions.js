export const createItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const uid = getState().firebase.auth.uid;
    firestore
      .collection("items")
      .add({
        ...item,
        authorFirstName: profile.firstName,
        authorLasrName: profile.lastName,
        authorId: uid,
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
