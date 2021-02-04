export default function (state = {}, action) {
  switch (action.type) {
    case "SET_SELECTED_JOB":
      return {
        ...state,
        selectedJob: action.payload,
      };
  }
}
