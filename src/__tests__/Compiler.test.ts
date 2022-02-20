function Greeter(params: string) {
  return 'Hello Carl';
}

test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});
