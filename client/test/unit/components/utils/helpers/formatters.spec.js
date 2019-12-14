import assert from 'assert';
import { formatTopicsCount } from '@/components/utils/helpers/formatters';

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
});
