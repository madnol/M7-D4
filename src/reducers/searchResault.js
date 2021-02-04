export default function (state = {}, action) {
  switch (action.type) {
    case "STORE_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: state.searchResults.concat(action.payload),
      };
  }
}
