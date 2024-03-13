"use strict";

// 整理
// gsap.to()  这是一种最常用的tween动画，就是让元素从初始状态变化到目标状态。  //gsap.to(".circle", { x: 40, fill: 'blue', });
// gsap.from() 有点像to方法的逆向变化，就是让元素从目标状态变化到初始状态。 //gsap.from(".circle", { x: -40, fill: 'blue', });
// gsap.fromTo() 需要自己定义两个状态的数据，然后从前一个变化到后一个 //gsap.fromTo( ".circle",{ x: -40, fill: 'blue', }, { x: 40, fill: 'green' });
// gsap.set() 直接设置成想要的状态，没有任何过度与动画效果。本质上就是duration为0的 .to 方法 //gsap.set(".circle", { x: 40, fill: 'blue', });

// duration 动画变化的时长（秒）默认是0.5
// delay 动画变化开始前的延迟时长（秒），默认是0.5
// repeat 动画的重复次数  //如果你想实现滑动效果的无限重复，那么你可以试试把设置 repeat:-1
// yoyo 如果设置为ture，那么动画会在执行完之后再反向执行一次，就像悠悠球的效果，默认是false
// stagger 是一个时间的设置（秒），如果有多个元素同时要被驱动，那么当这个属性设置了时间的值之后，元素们会被依次逐个驱动，间隔时长就是这个属性设置的时长
// ease 动画过渡的运动曲线的设置，默认是"power1.out"
//onComplete 动画结束时执行的回调函数

// examle
//   gsap.to(target, {
//     传入这样一个对象
//     这里面包含了需要进行变化的各种样式属性
//     x: 200,
//     rotation: 360,
//    以及变化过程的属性设置
//    duration: 2
//  })

// // 通过一个变量保存对Tween或者Timeline实例的引用
// let tween = gsap.to("#logo", {duration: 1, x: 100});

// // 暂停
// tween.pause();

// // 恢复（继续）
// tween.resume();

// // 反向变化
// tween.reverse();

// // 直接切换到整个动画变化时长的0.5秒的时间点的状态
// tween.seek(0.5);

// // 直接切换到整个变化过程的1/4的节点的状态
// tween.progress(0.25);

// // 让运动减速到0.5倍
// tween.timeScale(0.5);

// // 让变化加速到原来的2倍
// tween.timeScale(2);

// // 直接销毁tween实例，让垃圾回收机制可以处理该实例所占用的内存
// tween.kill();

(() => {
  // 選取bgs元素
  const bgs = document.querySelectorAll(".bg");
  // 得到隨機數fn
  const random = () => Math.trunc(Math.random() * 2000) - 1000;

  // 創建timeline
  const tl = gsap.timeline({
    repeat: -1, // 无限循环
    repeatDelay: 3, // 重复之间的延迟为5秒
    yoyo: true, // 允许动画倒放回去，创建更流畅的循环效果
  });

  // 初始狀態  // 本质上就是duration为0的 .to 方法
  bgs.forEach(function (el) {
    tl.set(el, {
      x: `+= ${random()}`,
      y: `+= ${random()}`,
      // rotation: "+=" + random(-720, 720),
      scale: 0,
      opacity: 1,
    });
  });

  // 最後結果
  const animateResult = {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    rotation: 0,
    ease: "power4.in",
    // stagger: 0.00125,
    duration: 1,
  };

  tl.to(".bg", animateResult).delay(0);

  const maintain = {
    maintainFrom: {
      opacity: 0,
    },
    maintainTo: {
      opacity: 1,
      duration: 1,
      ease: "power4.Out",
    },
  };

  const tlFont = gsap.timeline({
    repeat: -1,
    repeatDelay: 2,
    yoyo: true,
  });

  tlFont.fromTo(".maintain", maintain.maintainFrom, maintain.maintainTo, 1);

})();
