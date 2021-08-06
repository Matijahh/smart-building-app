export const createEvent = (event) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("events")
      .add({
        ...event,
        tenant: authorId,
      })
      .then(() => {
        dispatch({ type: "CREATE_EVENT", event });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_EVENT_ERROR", err });
      });
  };
};

export const createTenant = (tenant) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("tenants")
      .add({
        ...tenant,
      })
      .then(() => {
        dispatch({ type: "CREATE_TENANT", tenant });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_TENANT_ERROR", err });
      });
  };
};
