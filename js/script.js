'use strict';
(() => {
  const app = Vue.createApp({
    data() {
      return {
        logo: './img/logo.png',
        football: './img/football.png',
        maintainTexts: [
          '網站維護中',
          'WebSite Under Construction',
          '造成不便 敬請見諒',
        ],
        maintainInfo: '維護時間：2020/08/25 (二) 09:00 - 14:00',
      };
    },
  });
  app.mount('.app');
})();

// 足球框動畫間隔
(() => {
  const footballBox = document.querySelector('.footballBox');

  const resetAnimation = function () {
    footballBox.style.animation = 'none';
    void footballBox.offsetWidth;
    footballBox.style.animation =
      'jello 1.1s ease-in-out 1.6s 1 normal forwards';
  };
  setInterval(resetAnimation, 3000);
})();
// 車 left位動畫間隔
(() => {
  const carLeft = document.querySelector('.carLeft');
  const resetAnimation = function () {
    carLeft.style.animation = 'none';
    void carLeft.offsetWidth;
    carLeft.style.animation =
      'bounceInLeft 1s ease-in-out 0s 2 alternate forwards';
  };
  setInterval(resetAnimation, 3000);
})();
// 車 c位動畫間隔
() => {
  const carCenter = document.querySelector('.carCenter');
  const resetAnimation = function () {
    carCenter.style.animation = 'none';
    void carCenter.offsetWidth;
    carCenter.style.animation = 'tada 1s ease 1.1s 1 normal forwards';
  };
  setInterval(resetAnimation, 2000);
};

// 煙火生成
() => {
  // 創建img 生成函數

  let img;

  const createImg = function () {
    img = document.createElement('img');
    img.src = './img/explosion/explosion0.png';
    img.className = 'explosion';
    img.style.width = `${384}px`;
    img.style.height = `${368}px`;

    // 生成於section底下
    document.querySelector('.filter').appendChild(img);
    // 絕對定位的top
    const top = Math.trunc(Math.random() * (window.innerHeight - 1)) + 1;
    // 絕對定位的left
    const left = Math.trunc(Math.random() * (window.innerWidth - 1)) + 1;
    // 圖片高
    const imgHeight = img.offsetHeight;
    // 圖片寬
    const imgWidth = img.offsetWidth;
    // 正確top
    const currentTop = Math.abs(top - imgHeight);
    // 正確left
    const currentLeft = Math.abs(left - imgWidth);

    img.style.position = 'absolute'; // 確保定位生效
    img.style.top = `${currentTop}px`; // 加上單位
    img.style.left = `${currentLeft}px`; // 加上單位

    // 煙火爆炸
    const explosion = document.querySelectorAll('.explosion');
    explosion.forEach(function (el) {
      let i = 0;
      const chgImg = function () {
        el.src = `./img/explosion/explosion${i}.png`;
        i++;
        if (i === 3) {
          i = 0;
        }
      };
      setInterval(chgImg, 100);
    });

    // 每三秒刪除
    // setInterval(() => img.remove(), 2000);
  };
  // 先生成一個
  createImg();
  // 每三秒生成 + 每三秒刪除
  setInterval(createImg, 4000);
};
