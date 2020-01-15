/* eslint-disable indent */
const formatCountStr = (count, strs) => {
  switch (count % 100) {
    case 11:
    case 12:
    case 13:
    case 14:
      return `${count}\xa0${strs[0]}`;
    default:
      switch (count % 10) {
        case 1:
          return `${count}\xa0${strs[1]}`;
        case 2:
        case 3:
        case 4:
          return `${count}\xa0${strs[2]}`;
        default:
          return `${count}\xa0${strs[0]}`;
      }
  }
};

export const formatTopicsCount = (topicsCount) => formatCountStr(topicsCount, ['тем', 'тема', 'темы']);

export const formatPostsCount = (postsCount) => formatCountStr(postsCount, ['сообщений', 'сообщение', 'сообщения']);

export const formatTopicViews = (views) => formatCountStr(views, ['просмотров', 'просмотр', 'просмотра']);

export const formatUserCaption = (topicsCount, postsCount) => {
  const topicsCountStr = formatTopicsCount(topicsCount);
  const postsCountStr = formatPostsCount(postsCount);
  return `${topicsCountStr}, ${postsCountStr}`;
};

export const formatTopicInfo = (createdDate, author) => {
  const createdFormated = new Date(createdDate).toLocaleString('ru', { dateStyle: "short", timeStyle: "short" });
  return `Автор: ${author.name}, ${createdFormated}`;
};

export const formatPostPublishedInfo = (createdDate) => {
  const createdFormated = new Date(createdDate).toLocaleString('ru', { dateStyle: "short", timeStyle: "short" });
  return `Опубликовано ${createdFormated}`;
};

export const formatPostNumInfo = (index) => `№${index + 1}`;
