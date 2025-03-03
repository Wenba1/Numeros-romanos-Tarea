import convertidor from "./convertidor.js";

describe("Convertidor", () => {
  it("deberia convertir numero a 1 a romano", () => {
    expect(convertidor(1)).toEqual("I");
  });

  it("deberia convertir numero a 2 a romano", () => {
    expect(convertidor(2)).toEqual("II");
  });

  it("deberia convertir numero a 3 a romano", () => {
    expect(convertidor(3)).toEqual("III");
  });

  it("deberia convertir numero a 4 a romano", () => {
    expect(convertidor(4)).toEqual("IV");
  });

  it("deberia convertir numero a 5 a romano", () => {
    expect(convertidor(5)).toEqual("V");
  });

  it("deberia convertir numero a 6 a romano", () => {
    expect(convertidor(6)).toEqual("VI");
  });

  it("deberia convertir numero a 7 a romano", () => {
    expect(convertidor(7)).toEqual("VII");
  });

  it("deberia convertir numero a 8 a romano", () => {
    expect(convertidor(8)).toEqual("VIII");
  });

  it("deberia convertir numero a 9 a romano", () => {
    expect(convertidor(9)).toEqual("IX");
  });

  it("deberia convertir numero a 10 a romano", () => {
    expect(convertidor(10)).toEqual("X");
  });

  it("deberia convertir numero a 40 a romano", () => {
    expect(convertidor(40)).toEqual("XL");
  });

  it("deberia convertir numero a 50 a romano", () => {
    expect(convertidor(50)).toEqual("L");
  });

  it("deberia convertir numero a 90 a romano", () => {
    expect(convertidor(90)).toEqual("XC");
  });

  it("deberia convertir numero a 100 a romano", () => {
    expect(convertidor(100)).toEqual("C");
  });

  it("deberia convertir numero a 400 a romano", () => {
    expect(convertidor(400)).toEqual("CD");
  });

  it("deberia convertir numero a 500 a romano", () => {
    expect(convertidor(500)).toEqual("D");
  });
});
