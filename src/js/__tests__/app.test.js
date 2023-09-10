import GameSavingLoader from '../gamesavingloader';

test('GameSavingLoader should work with promise and async/await', async () => {
  expect.assertions(1);
  try {
    const expected = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    };
    const saving = await GameSavingLoader.load();
    expect(saving).toEqual(expected);
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
  }
});
