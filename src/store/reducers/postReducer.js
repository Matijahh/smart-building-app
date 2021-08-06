const initState = {
  posts: [],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      return state;
    case "CREATE_EVENT_ERROR":
      return state;
    case "CREATE_TENANT":
      return state;
    case "CREATE_TENANT_ERROR":
      return state;
    default:
      return state;
  }
};

export default postReducer;
