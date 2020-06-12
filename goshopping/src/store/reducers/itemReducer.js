const initState = {
  items: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" },
  ],
};

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_ITEM":
      console.log("created item", action.item);
  }
  return state;
};

export default itemReducer;
