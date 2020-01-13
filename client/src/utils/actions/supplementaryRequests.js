/* eslint-disable no-empty */
import axios from 'axios';

export const updateSectionTopicsCount = (sectionId) => {
  try {
    axios.patch(`/api/sections/${sectionId}`, { topicsCount: true });
  } catch (err) {}
};

export const updateSectionPostsCount = (sectionId) => {
  try {
    axios.patch(`/api/sections/${sectionId}`, { postsCount: true });
  } catch (err) {}
};

export const updateTopicPostsCount = (sectionId, topicId) => {
  try {
    axios.patch(`/api/sections/${sectionId}/topics/${topicId}`, { postsCount: true });
  } catch (err) {}
};

export const updateTopicViews = (sectionId, topicId) => {
  try {
    axios.patch(`/api/sections/${sectionId}/topics/${topicId}`, { views: true });
  } catch (err) {}
};
