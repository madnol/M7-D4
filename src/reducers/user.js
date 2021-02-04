export default function (state = {}, action) {
  switch (action.type) {
    case "UPDATE_USER_INFO":
      return {
        ...state,
        user: action.payload,
      };
    case "ADD_NEW_FAVOURITE":
      return {
        ...state,
        user: {
          ...state.user,
          favourites: state.user.favourites.concat(action.payload),
        },
      };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        user: {
          ...state.user,
          favourites: state.user.favourites.filter(
            favourite => favourite.id !== action.payload.id
          ),
        },
      };
    case "ADD_RECENT_SEARCH":
      return {
        ...state,
        user: {
          ...state.user,
          recentSearches: state.user.recentSearches.concat(action.payload),
        },
      };
  }
}
