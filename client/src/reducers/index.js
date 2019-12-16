import { combineReducers } from 'redux';
import userReducer from './userReducer';
import formReducer from './formReducer';
import sectionsReducer from './sectionsReducer';
import topicsReducer from './topicsReducer';
import postsReducer from './postsReducer';
import sectionReducer from './sectionReducer';
import topicReducer from './topicReducer';

export default combineReducers({
  user: userReducer,
  form: formReducer,
  sections: sectionsReducer,
  topics: topicsReducer,
  posts: postsReducer,
  currentSection: sectionReducer,
  currentTopic: topicReducer,
});
