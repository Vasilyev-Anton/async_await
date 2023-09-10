import GameSavingLoader from './gamesavingloader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    return saving;
  } catch (error) {
    return error;
  }
})();
