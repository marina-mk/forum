/* eslint-disable no-empty */
import axios from 'axios';

export const updateSectionTopicsCount = async (sectionId) => {
  try {
    await axios.patch(`/api/sections/${sectionId}`, { topicsCount: true });
  } catch (err) {}
};

export const updateSectionPostsCount = async (sectionId) => {
  try {
    await axios.patch(`/api/sections/${sectionId}`, { postsCount: true });
  } catch (err) {}
};

export const updateTopicPostsCount = async (sectionId, topicId) => {
  try {
    await axios.patch(`/api/sections/${sectionId}/topics/${topicId}`, { postsCount: true });
  } catch (err) {}
};

export const updateTopicViews = async (sectionId, topicId) => {
  try {
    await axios.patch(`/api/sections/${sectionId}/topics/${topicId}`, { views: true });
  } catch (err) {}
};

export const updateUserTopicsCount = async () => {
  try {
    await axios.patch(`/api/user`, { topicsCount: true });
  } catch (err) {}
};

export const updateUserPostsCount = async () => {
  try {
    await axios.patch(`/api/user`, { postsCount: true });
  } catch (err) {}
};
