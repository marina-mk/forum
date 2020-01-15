import assert from 'assert';
import { formatTopicsCount, formatPostsCount, formatTopicViews } from '@/utils/helpers/formatters';

describe('Helpers: formatters', () => {
  describe('#formatTopicsCount()', () => {
    const tests = [
      { topicsCount: 0, expected: '0\xa0тем' },
      { topicsCount: 1, expected: '1\xa0тема' },
      { topicsCount: 2, expected: '2\xa0темы' },
      { topicsCount: 3, expected: '3\xa0темы' },
      { topicsCount: 4, expected: '4\xa0темы' },
      { topicsCount: 5, expected: '5\xa0тем' },
      { topicsCount: 6, expected: '6\xa0тем' },
      { topicsCount: 7, expected: '7\xa0тем' },
      { topicsCount: 8, expected: '8\xa0тем' },
      { topicsCount: 9, expected: '9\xa0тем' },
      { topicsCount: 10, expected: '10\xa0тем' },
      { topicsCount: 11, expected: '11\xa0тем' },
      { topicsCount: 12, expected: '12\xa0тем' },
      { topicsCount: 13, expected: '13\xa0тем' },
      { topicsCount: 14, expected: '14\xa0тем' },
      { topicsCount: 15, expected: '15\xa0тем' },
      { topicsCount: 16, expected: '16\xa0тем' },
      { topicsCount: 17, expected: '17\xa0тем' },
      { topicsCount: 18, expected: '18\xa0тем' },
      { topicsCount: 19, expected: '19\xa0тем' },
      { topicsCount: 20, expected: '20\xa0тем' },
      { topicsCount: 21, expected: '21\xa0тема' },
      { topicsCount: 22, expected: '22\xa0темы' },
      { topicsCount: 23, expected: '23\xa0темы' },
      { topicsCount: 24, expected: '24\xa0темы' },
      { topicsCount: 25, expected: '25\xa0тем' },
      { topicsCount: 26, expected: '26\xa0тем' },
      { topicsCount: 27, expected: '27\xa0тем' },
      { topicsCount: 28, expected: '28\xa0тем' },
      { topicsCount: 29, expected: '29\xa0тем' },
      { topicsCount: 30, expected: '30\xa0тем' },
    ];

    tests.forEach((test) => {
      it(`should return '${test.expected}' for topics count = ${test.topicsCount}`, () => {
        const topicsCountStr = formatTopicsCount(test.topicsCount);
        assert.equal(topicsCountStr, test.expected);
      });
    });
  });

  describe('#formatPostsCount()', () => {
    const tests = [
      { postsCount: 0, expected: '0\xa0сообщений' },
      { postsCount: 1, expected: '1\xa0сообщение' },
      { postsCount: 2, expected: '2\xa0сообщения' },
      { postsCount: 3, expected: '3\xa0сообщения' },
      { postsCount: 4, expected: '4\xa0сообщения' },
      { postsCount: 5, expected: '5\xa0сообщений' },
      { postsCount: 6, expected: '6\xa0сообщений' },
      { postsCount: 7, expected: '7\xa0сообщений' },
      { postsCount: 8, expected: '8\xa0сообщений' },
      { postsCount: 9, expected: '9\xa0сообщений' },
      { postsCount: 10, expected: '10\xa0сообщений' },
      { postsCount: 11, expected: '11\xa0сообщений' },
      { postsCount: 12, expected: '12\xa0сообщений' },
      { postsCount: 13, expected: '13\xa0сообщений' },
      { postsCount: 14, expected: '14\xa0сообщений' },
      { postsCount: 15, expected: '15\xa0сообщений' },
      { postsCount: 16, expected: '16\xa0сообщений' },
      { postsCount: 17, expected: '17\xa0сообщений' },
      { postsCount: 18, expected: '18\xa0сообщений' },
      { postsCount: 19, expected: '19\xa0сообщений' },
      { postsCount: 20, expected: '20\xa0сообщений' },
      { postsCount: 21, expected: '21\xa0сообщение' },
      { postsCount: 22, expected: '22\xa0сообщения' },
      { postsCount: 23, expected: '23\xa0сообщения' },
      { postsCount: 24, expected: '24\xa0сообщения' },
      { postsCount: 25, expected: '25\xa0сообщений' },
      { postsCount: 26, expected: '26\xa0сообщений' },
      { postsCount: 27, expected: '27\xa0сообщений' },
      { postsCount: 28, expected: '28\xa0сообщений' },
      { postsCount: 29, expected: '29\xa0сообщений' },
      { postsCount: 30, expected: '30\xa0сообщений' },
    ];

    tests.forEach((test) => {
      it(`should return '${test.expected}' for posts count = ${test.postsCount}`, () => {
        const postsCountStr = formatPostsCount(test.postsCount);
        assert.equal(postsCountStr, test.expected);
      });
    });
  });

  describe('#formatTopicViews()', () => {
    const tests = [
      { views: 0, expected: '0\xa0просмотров' },
      { views: 1, expected: '1\xa0просмотр' },
      { views: 2, expected: '2\xa0просмотра' },
      { views: 3, expected: '3\xa0просмотра' },
      { views: 4, expected: '4\xa0просмотра' },
      { views: 5, expected: '5\xa0просмотров' },
      { views: 6, expected: '6\xa0просмотров' },
      { views: 7, expected: '7\xa0просмотров' },
      { views: 8, expected: '8\xa0просмотров' },
      { views: 9, expected: '9\xa0просмотров' },
      { views: 10, expected: '10\xa0просмотров' },
      { views: 11, expected: '11\xa0просмотров' },
      { views: 12, expected: '12\xa0просмотров' },
      { views: 13, expected: '13\xa0просмотров' },
      { views: 14, expected: '14\xa0просмотров' },
      { views: 15, expected: '15\xa0просмотров' },
      { views: 16, expected: '16\xa0просмотров' },
      { views: 17, expected: '17\xa0просмотров' },
      { views: 18, expected: '18\xa0просмотров' },
      { views: 19, expected: '19\xa0просмотров' },
      { views: 20, expected: '20\xa0просмотров' },
      { views: 21, expected: '21\xa0просмотр' },
      { views: 22, expected: '22\xa0просмотра' },
      { views: 23, expected: '23\xa0просмотра' },
      { views: 24, expected: '24\xa0просмотра' },
      { views: 25, expected: '25\xa0просмотров' },
      { views: 26, expected: '26\xa0просмотров' },
      { views: 27, expected: '27\xa0просмотров' },
      { views: 28, expected: '28\xa0просмотров' },
      { views: 29, expected: '29\xa0просмотров' },
      { views: 30, expected: '30\xa0просмотров' },
    ];

    tests.forEach((test) => {
      it(`should return '${test.expected}' for views count = ${test.views}`, () => {
        const topicViewsStr = formatTopicViews(test.views);
        assert.equal(topicViewsStr, test.expected);
      });
    });
  });
});
