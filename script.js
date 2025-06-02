window.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bgMusic');
  document.body.addEventListener('click', () => {
    if (music.paused) {
      music.play().catch(e => console.log('Autoplay blocked:', e));
    }
  }, { once: true });

  const spider = document.getElementById('moving-spider');
  moveSpider();

  setInterval(moveSpider, 3000); // move every 3 seconds

  function moveSpider() {
    const maxX = window.innerWidth - 50;
    const maxY = window.innerHeight - 50;
    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;
    spider.style.left = `${randX}px`;
    spider.style.top = `${randY}px`;
  }
});


const spider = document.getElementById('moving-spider');
spider.addEventListener('mouseenter', jumpAway);
spider.addEventListener('click', jumpAway);

function jumpAway() {
  const maxX = window.innerWidth - 60;
  const maxY = window.innerHeight - 60;
  const randX = Math.random() * maxX;
  const randY = Math.random() * maxY;
  spider.style.transition = 'top 0.2s ease, left 0.2s ease';
  spider.style.left = `${randX}px`;
  spider.style.top = `${randY}px`;
  setTimeout(() => {
    spider.style.transition = 'top 2s ease, left 2s ease';
  }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
  const chatToggle = document.getElementById('chat-toggle');
  const chatForm = document.querySelector('.chat-form');
  chatToggle.addEventListener('click', () => {
    chatForm.style.display = chatForm.style.display === 'flex' ? 'none' : 'flex';
  });
});
