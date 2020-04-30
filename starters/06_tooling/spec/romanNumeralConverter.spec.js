import convert from '../src/roman_numeral_converter';

describe('Roman numeral converter', () => {
  it('will return 1 given i', () => {
    let actual = convert('i');
    expect(actual).toEqual(1);
  });
  it('will return 2 given ii', () => {
    let actual = convert('ii');
    expect(actual).toEqual(2);
    actual = convert('v');
    expect(actual).toEqual(5);
  });
  it('should return 4 given iv', () => {
    let actual = convert('iv');
    expect(actual).toEqual(4);
  });
  it('should return 4 given vii', () => {
    let actual = convert('vii');
    expect(actual).toEqual(7);
  });
  it('should return 9 given ix', () => {
    let actual = convert('ix');
    expect(actual).toEqual(9);
  });
  it('should return 501 given di', () => {
    let actual = convert('DI');
    expect(actual).toEqual(501);
  });
  it('should return 49 given XLIX', () => {
    let actual = convert('XLIX');
    expect(actual).toEqual(49);
  });
  it('should return 444 given CDXLIV', () => {
    let actual = convert('CDXLIV');
    expect(actual).toEqual(444);
  });
  it('should fail for non-roman numeral values', () => {
    expect(() => convert('AAA')).toThrowError();
  });
});
