const fortunes = [
  'Победи свои страхи, или они победят тебя',
  'Рекам нужны истоки',
  'Не бойся неведомого',
  'Будь проще, где только можно',
]

exports.getFortune = () => {
  var idx = Math.floor(Math.random() * fortunes.length);
  return fortunes[idx];
}