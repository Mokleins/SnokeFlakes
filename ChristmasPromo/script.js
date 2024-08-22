const closeBtn = document.getElementById('close');
const mainEl = document.querySelector('main');
const giftBtn = document.getElementById('gift');

closeBtn.addEventListener('click', () => {
  mainEl.classList.add('hidden');

  setTimeout(() => {
    mainEl.classList.remove('hidden');
  }, 3000);
});

giftBtn.addEventListener('click', () => {
  for(let i = 0; i < 50; i++) {
    createSnowflake();
  }
});

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDelay = Math.random() * 3 + 's';

  document.body.appendChild(snowflake);
  setTimeout(() => {
    snowflake.remove();
  }, 4000);
}