const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;

const body = document.querySelector('body');
const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');

startButton.addEventListener('click', () => {
  intervalId = setInterval(() => {
    changeBodyBackgroundColor();
  }, 1000);
  startButton.setAttribute('disabled', 'disabled');
});
console.log(startButton);

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
  startButton.removeAttribute('disabled');
});
console.log(stopButton);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeBodyBackgroundColor = () => {
  body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};