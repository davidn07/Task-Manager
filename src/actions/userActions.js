// userActions.js
export const addUser = (user) => {
  return (dispatch) => {
    // Simulate an asynchronous action (e.g., API call)
    setTimeout(() => {
      dispatch({
        type: "ADD_USER",
        payload: user,
      });
    }, 1000);
  };
};
