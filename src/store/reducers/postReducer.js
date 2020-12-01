const initState = {
  posts: [
    {
      id: "1",
      title: "Post Title 1",
      content: "blah blah blah",
    },
    {
      id: "2",
      title: "Post Title 2",
      content: "blah blah blah",
    },
    {
      id: "3",
      title: "Post Title 3",
      content: "blah blah blah",
    },
  ],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("created post", action.post);
      return state;
    case "CREATE_POST_ERROR":
      console.log("created post error", action.err);
      return state;
    default:
      return state;
  }
};

export default postReducer;
