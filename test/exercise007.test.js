const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("returns the sum of all the number digits", () => {
    expect(sumDigits(1223)).toBe(8);
    expect(sumDigits(234334)).toBe(19);
  });
});

describe("createRange", () => {
  test("returns an array with number elements from start untill end inclusive with the given step", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(10, 100, 10)).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
  });
  test("returns an array with number elements from start untill end inclusive with default step", () => {
    expect(createRange(3, 11)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(createRange(10, 20)).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });
});

describe("getScreentimeAlertList", () => {
  const users = [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
      ]
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
      ]
    },
    {
      username: "alex_jones",
      name: "Alex Jones",
      screenTime: [
        { date: "2019-05-01", usage: { twitter: 34, instagram: 34, facebook: 40 } },
        { date: "2019-05-02", usage: { twitter: 10, instagram: 10, facebook: 20 } },
        { date: "2019-05-03", usage: { twitter: 0, instagram: 100, facebook: 19 } },
        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
      ]
    },
    {
      username: "john_doe",
      name: "John Doe",
      screenTime: [
        { date: "2019-05-11", usage: { twitter: 34, instagram: 22, facebook: 50 } },
        { date: "2019-05-13", usage: { twitter: 56, instagram: 0, facebook: 31 } },
        { date: "2019-05-14", usage: { twitter: 12, instagram: 15, facebook: 19 } },
        { date: "2019-05-15", usage: { twitter: 10, instagram: 56, facebook: 61 } },
      ]
    },
  ];

  test("return an array of usernames of users who have used more than 100 minutes of screentime on the given date", () => {
    expect(getScreentimeAlertList(users, "2019-06-02")).toEqual([]);
    expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(users, "2019-05-15")).toEqual(["john_doe"]);
  });
});

describe("hexToRGB", () => {
  test("returns RGB for White", () => {
    expect(hexToRGB("#ffffff")).toEqual("rgb(255, 255, 255)");
  });
  test("returns RGB for Black", () => {
    expect(hexToRGB("#000000")).toEqual("rgb(0, 0, 0)");
  });
  test("returns RGB for Orange", () => {
    expect(hexToRGB("#ffa500")).toEqual("rgb(255, 165, 0)");
  });
  test("returns RGB for Green", () => {
    expect(hexToRGB("#008000")).toEqual("rgb(0, 128, 0)");
  });
});

describe("findWinner", () => {
  test("return X if player X has won", () => {
    expect(findWinner([
      ["X", "O", null],
      ["X", null, "O"],
      ["X", null, "O"]
    ])).toEqual("X");
  });
  test("return O if player O has won", () => {
    expect(findWinner([
      ["O", "X", null],
      ["O", null, "X"],
      ["O", null, "X"]
    ])).toEqual("O");
  });
  test("return null if no one wins", () => {
    expect(findWinner([
      ["O", "X", "X"],
      ["X", "O", "O"],
      ["O", "O", "X"]
    ])).toBe(null);
  });
});
