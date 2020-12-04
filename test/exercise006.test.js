const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("return the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([1,2,15,30,45])).toEqual(90);
    expect(sumMultiples([15,30,45])).toEqual(90);
    expect(sumMultiples([4, 22, 23, 15])).toEqual(15);
  });

  test("return the Zero if none of the numbers is a multiple of 3 or 5", () => {
    expect(sumMultiples([2, 7, 8, 1 ], 55)).toEqual(0);
  });
});

describe("isValidDNA", () => {
  test("return true/false depending on whether it is a valid DNA string", () => {
    expect(isValidDNA("CGTA")).toBe(true);

    expect(isValidDNA("CGTAM")).toBe(false);

    expect(isValidDNA("CCCCCCCCGGGGGGGGTTTTTTTTTAAAAAAAAAAAAA")).toBe(true);

    expect(isValidDNA("CGTAMMMMMMMMMMMM")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("return a string of the complementary base DNA pairs", () => {
    expect(getComplementaryDNA("ATGC")).toBe("TACG");
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("CGTA")).toBe("GCAT");
  });
});

describe("isItPrime", () => {
  test("returns true/false depending on whether it is a prime number or not", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(8)).toBe(false);
    expect(isItPrime(9)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("returns an array of 3 arrays, each filled with 3 items with the value 'foo'", () => {
    expect(createMatrix(3,"foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"]
      ]);
    
  });

  test("returns an array of 4 arrays, each filled with 4 items with the value 'YRTT'", () => {
    expect(createMatrix(4,"YRTT")).toEqual([
      ["YRTT", "YRTT", "YRTT","YRTT"],
      ["YRTT", "YRTT", "YRTT","YRTT"],
      ["YRTT", "YRTT", "YRTT","YRTT"],
      ["YRTT", "YRTT", "YRTT","YRTT"]
      ]);
  });
});

describe("areWeCovered", () => {
  const staff = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Osman", rota: ["Saturday", "Friday", "Tuesday", "Wednesday"] },
        { name: "Ali", rota: ["Thursday", "Sunday", "Tuesday", "Wednesday"] },
    
       ];
  test("return true depending on whether there are enough staff scheduled for the given day", () => {
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Wednesday")).toBe(true);
  });

  test("returns false if none of the properties of an object contain the specified string", () => {
    expect(areWeCovered(staff, "Monday")).toBe(false);
    expect(areWeCovered(staff, "Sunday")).toBe(false);
  });
});


