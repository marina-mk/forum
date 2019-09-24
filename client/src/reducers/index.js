import { combineReducers } from 'redux';
import userReducer from './userReducer';
import formReducer from './formReducer';
import sectionsReducer from './sectionsReducer';
import topicsReducer from './topicsReducer';

export default combineReducers({
  user: userReducer,
  form: formReducer,
  sections: sectionsReducer,
  topics: topicsReducer,
});
