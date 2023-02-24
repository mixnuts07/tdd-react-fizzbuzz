// 仕様
describe("FizzBuzz問題", () => {
  // テスト内容
  test('3の倍数を入力したら"Fizz"を出力する', () => {
    expect(Sample(3)).toBe(3);
  });
  test.todo('5の倍数を入力したら"Buzz"を出力する');
  test.todo('3と5の倍数を入力したら"Fizz Buzz"を出力する');
  test.todo("それ以外の場合は入力値を出力する");
});

function Sample(num: Number) {
  return num;
}
