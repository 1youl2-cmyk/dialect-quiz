'use strict';
const $ = id => document.getElementById(id);
function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
let deck = [], position = 0;
DIALECTS.forEach(region => {
  const button = document.createElement('button');
  button.className = 'region';
  const title = document.createElement('strong');
  title.textContent = region.name;
  const count = document.createElement('span');
  count.textContent = `${region.words.length}개 표현 · 학습 시작 →`;
  button.append(title, count);
  button.addEventListener('click', () => {
    deck = shuffle(region.words); position = 0;
    $('region-name').textContent = region.name;
    $('home').hidden = true; $('study').hidden = false;
    showCard(); $('reveal').focus();
  });
  $('regions').append(button);
});
function showCard() {
  $('word').textContent = deck[position].word;
  $('example').textContent = deck[position].example;
  $('meaning').textContent = '';
  $('progress').textContent = `${position + 1} / ${deck.length}`;
  $('bar').style.width = `${(position + 1) / deck.length * 100}%`;
  $('reveal').disabled = false;
  $('reveal').textContent = '뜻 확인하기';
  $('next').textContent = position === deck.length - 1 ? '다시 섞어서 학습 ↻' : '다음 방언 →';
}
$('reveal').addEventListener('click', () => {
  $('meaning').textContent = deck[position].meaning;
  $('reveal').textContent = '뜻을 확인했어요';
  $('reveal').disabled = true; $('next').focus();
});
$('next').addEventListener('click', () => {
  if (position === deck.length - 1) {
    const previous = deck[position];
    deck = shuffle(deck);
    if (deck.length > 1 && deck[0] === previous) [deck[0], deck[1]] = [deck[1], deck[0]];
    position = 0;
  } else position++;
  showCard(); $('reveal').focus();
});
$('back').addEventListener('click', () => {
  $('study').hidden = true; $('home').hidden = false;
  $('regions').querySelector('button').focus();
});
