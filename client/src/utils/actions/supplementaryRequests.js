/* eslint-disable no-empty */
import axios from 'axios';

export const updateSectionTopicsCount = async (sectionId, count) => {
  try {
    await axios.patch(`/api/sections/${sectionId}`, { topicsCount: count });
  } catch (err) {}
};

export const updateSectionPostsCount = async (sectionId, count) => {
  try {
    await axios.patch(`/api/sections/${sectionId}`, { postsCount: count });
  } catch (err) {}
};

export const updateTopicPostsCount = async (sectionId, topicId, count) => {
  try {
    await axios.patch(`/api/sections/${sectionId}/topics/${topicId}`, { postsCount: count });
  } catch (err) {}
};

export const updateTopicViews = async (sectionId, topicId, count) => {
  try {
    await axios.patch(`/api/sections/${sectionId}/topics/${topicId}`, { views: count });
  } catch (err) {}
};

export const updateUserTopicsCount = async (username, count) => {
  try {
    await axios.patch(`/api/users/${username}`, { topicsCount: count });
  } catch (err) {}
};

export const updateUserPostsCount = async (username, count) => {
  try {
    await axios.patch(`/api/users/${username}`, { postsCount: count });
  } catch (err) {}
};
