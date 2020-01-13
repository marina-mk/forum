import assert from 'assert';
import { formatTopicsCount, formatPostsCount, formatTopicViews } from '@/components/utils/helpers/formatters';

describe('Helpers: formatters', () => {
  describe('#formatTopicsCount()', () => {
    const tests = [
      { topicsCount: 0, expected: '0 тем' },
      { topicsCount: 1, expected: '1 тема' },
      { topicsCount: 2, expected: '2 темы' },
      { topicsCount: 3, expected: '3 темы' },
      { topicsCount: 4, expected: '4 темы' },
      { topicsCount: 5, expected: '5 тем' },
      { topicsCount: 6, expected: '6 тем' },
      { topicsCount: 7, expected: '7 тем' },
      { topicsCount: 8, expected: '8 тем' },
      { topicsCount: 9, expected: '9 тем' },
      { topicsCount: 10, expected: '10 тем' },
      { topicsCount: 11, expected: '11 тем' },
      { topicsCount: 12, expected: '12 тем' },
      { topicsCount: 13, expected: '13 тем' },
      { topicsCount: 14, expected: '14 тем' },
      { topicsCount: 15, expected: '15 тем' },
      { topicsCount: 16, expected: '16 тем' },
      { topicsCount: 17, expected: '17 тем' },
      { topicsCount: 18, expected: '18 тем' },
      { topicsCount: 19, expected: '19 тем' },
      { topicsCount: 20, expected: '20 тем' },
      { topicsCount: 21, expected: '21 тема' },
      { topicsCount: 22, expected: '22 темы' },
      { topicsCount: 23, expected: '23 темы' },
      { topicsCount: 24, expected: '24 темы' },
      { topicsCount: 25, expected: '25 тем' },
      { topicsCount: 26, expected: '26 тем' },
      { topicsCount: 27, expected: '27 тем' },
      { topicsCount: 28, expected: '28 тем' },
      { topicsCount: 29, expected: '29 тем' },
      { topicsCount: 30, expected: '30 тем' },
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
      { postsCount: 0, expected: '0 сообщений' },
      { postsCount: 1, expected: '1 сообщение' },
      { postsCount: 2, expected: '2 сообщения' },
      { postsCount: 3, expected: '3 сообщения' },
      { postsCount: 4, expected: '4 сообщения' },
      { postsCount: 5, expected: '5 сообщений' },
      { postsCount: 6, expected: '6 сообщений' },
      { postsCount: 7, expected: '7 сообщений' },
      { postsCount: 8, expected: '8 сообщений' },
      { postsCount: 9, expected: '9 сообщений' },
      { postsCount: 10, expected: '10 сообщений' },
      { postsCount: 11, expected: '11 сообщений' },
      { postsCount: 12, expected: '12 сообщений' },
      { postsCount: 13, expected: '13 сообщений' },
      { postsCount: 14, expected: '14 сообщений' },
      { postsCount: 15, expected: '15 сообщений' },
      { postsCount: 16, expected: '16 сообщений' },
      { postsCount: 17, expected: '17 сообщений' },
      { postsCount: 18, expected: '18 сообщений' },
      { postsCount: 19, expected: '19 сообщений' },
      { postsCount: 20, expected: '20 сообщений' },
      { postsCount: 21, expected: '21 сообщение' },
      { postsCount: 22, expected: '22 сообщения' },
      { postsCount: 23, expected: '23 сообщения' },
      { postsCount: 24, expected: '24 сообщения' },
      { postsCount: 25, expected: '25 сообщений' },
      { postsCount: 26, expected: '26 сообщений' },
      { postsCount: 27, expected: '27 сообщений' },
      { postsCount: 28, expected: '28 сообщений' },
      { postsCount: 29, expected: '29 сообщений' },
      { postsCount: 30, expected: '30 сообщений' },
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
      { views: 0, expected: '0 просмотров' },
      { views: 1, expected: '1 просмотр' },
      { views: 2, expected: '2 просмотра' },
      { views: 3, expected: '3 просмотра' },
      { views: 4, expected: '4 просмотра' },
      { views: 5, expected: '5 просмотров' },
      { views: 6, expected: '6 просмотров' },
      { views: 7, expected: '7 просмотров' },
      { views: 8, expected: '8 просмотров' },
      { views: 9, expected: '9 просмотров' },
      { views: 10, expected: '10 просмотров' },
      { views: 11, expected: '11 просмотров' },
      { views: 12, expected: '12 просмотров' },
      { views: 13, expected: '13 просмотров' },
      { views: 14, expected: '14 просмотров' },
      { views: 15, expected: '15 просмотров' },
      { views: 16, expected: '16 просмотров' },
      { views: 17, expected: '17 просмотров' },
      { views: 18, expected: '18 просмотров' },
      { views: 19, expected: '19 просмотров' },
      { views: 20, expected: '20 просмотров' },
      { views: 21, expected: '21 просмотр' },
      { views: 22, expected: '22 просмотра' },
      { views: 23, expected: '23 просмотра' },
      { views: 24, expected: '24 просмотра' },
      { views: 25, expected: '25 просмотров' },
      { views: 26, expected: '26 просмотров' },
      { views: 27, expected: '27 просмотров' },
      { views: 28, expected: '28 просмотров' },
      { views: 29, expected: '29 просмотров' },
      { views: 30, expected: '30 просмотров' },
    ];

    tests.forEach((test) => {
      it(`should return '${test.expected}' for views count = ${test.views}`, () => {
        const topicViewsStr = formatTopicViews(test.views);
        assert.equal(topicViewsStr, test.expected);
      });
    });
  });
});
