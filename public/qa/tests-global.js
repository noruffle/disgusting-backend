const { assert } = require("chai")

suite('Global Tests', () => {
  test(`У данной страницы допустимый заголовок`, () => {
    assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
  });
});