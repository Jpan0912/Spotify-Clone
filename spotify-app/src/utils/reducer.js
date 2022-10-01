import { reducerCases } from "./Constant";

export const initialState = {
  token: null,
  playlists: [],
<<<<<<< HEAD
  userInfo : null,
  selectedPlaylistId: "37i9dQZF1EJBd4KoENbwG0",
  selectedPlaylist: null,

=======
  userInfo: null,
  selectedPlayListId: "3oQ9z7N8WaG3VxOZHhN5uq",
>>>>>>> 819eb97f78013557a59d66c9b5458e8f2ac4912b
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case reducerCases.SET_PLAYLISTS: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case reducerCases.SET_USER: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    case reducerCases.SET_PLAYLIST: {
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist
      }
    }
    default:
      return state;
  }
};

export default reducer;
