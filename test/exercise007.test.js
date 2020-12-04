const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("returns the sum of all its digits", () => {
    expect(sumDigits(1223).toBe(8));
    expect(sumDigits(234334)).toBe(19);
  });
});

describe("createRange", () => {
  test("returns an object with the count of 1s and 0s in a string", () => {
    expect(createRange("11000")).toEqual({
      1: 2,
      0: 3
    });

    expect(createRange("0101010111")).toEqual({
      1: 6,
      0: 4
    });

    expect(createRange("1111111")).toEqual({
      1: 7,
      0: 0
    });
  });
});

describe("getScreentimeAlertList", () => {
  test("reverses the digits of a number", () => {
    expect(getScreentimeAlertList(5)).toBe(5);
    expect(getScreentimeAlertList(104)).toBe(401);
    expect(getScreentimeAlertList(12345)).toBe(54321);
    expect(getScreentimeAlertList(100)).toBe(1); // No leading 0 necessary
  });
});

describe("hexToRGB", () => {
  test("returns the total of the numbers in all sub arrays", () => {
    const arrs = [[1, 2, 3], [6, 3, 1], [1], [9, 10], [3, 5]];
    expect(hexToRGB(arrs)).toBe(44);
  });
});

describe("findWinner", () => {
  test("returns an array with the first and last items swapped", () => {
    expect(findWinner([1, 2])).toEqual([2, 1]);
    expect(findWinner([1, 2, 3])).toEqual([3, 2, 1]);
    expect(findWinner([1, 2, 3, 4])).toEqual([4, 2, 3, 1]);
  });

  test("makes no difference when the array length is < 2", () => {
    expect(findWinner([1])).toEqual([1]);
    expect(findWinner([])).toEqual([]);
  });
});
