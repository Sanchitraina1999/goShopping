const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const createNotificationForItemCreated = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("NOTIFICATION ADDED", doc));
};

exports.itemCreated = functions.firestore
  .document("items/{itemId}")
  .onCreate((doc) => {
    const item = doc.data();
    const notification = {
      content: "added " + `${item.title}`,
      user: `${item.authorFirstName} ${item.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };
    return createNotificationForItemCreated(notification);
  });

const createNotificationForUserJoined = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("NOTIFICATION ADDED", doc));
};

exports.userJoined = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      const newUser = doc.data();
      const notification = {
        content: "joined",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };
      return createNotificationForUserJoined(notification);
    });
});
