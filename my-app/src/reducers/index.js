import { combineReducers } from 'redux';
import { GET_IMAGE, FETCH_IMAGE, IMAGE_DELETE, IMAGE_EDIT } from '../actions';

const userImage = (state = {}, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return {
        ...state,
      };
    case FETCH_IMAGE:
      return {
        ...state,
      };
    case IMAGE_DELETE:
      return {
        ...state,
      };
    case IMAGE_EDIT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  userImage,
});

export default rootReducer;
