import {FETCH_LINK_SUCCESS} from "./actions";

const initialState = {
  currentLink: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case FETCH_LINK_SUCCESS:
      return {...state, currentLink: action.linkResponseData};
    default:
      return state;
  }
};

export default reducer;