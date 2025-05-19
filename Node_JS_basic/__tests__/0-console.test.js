const displayMessage = require('../0-console');

describe('displayMessage', () => {
  it('should print the provided message to the console', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    displayMessage('Hello Jest!');
    expect(consoleSpy).toHaveBeenCalledWith('Hello Jest!');
    consoleSpy.mockRestore(); // Nettoyer l'espion après le test
  });
});