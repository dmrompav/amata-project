"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// -----------------------------------------------------------------
// ! ============= templates =========================
// -----------------------------------------------------------------
var temp = ["<h2 class=\"popup__h2\">\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438</h2><p class=\"popup__p\">\u041E\u041E\u041E \"\u0410\u043C\u0430\u0442\u0430\" (\u0418\u041D\u041D: 7801654181) \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0432 2018 \u0433\u043E\u0434\u0443. \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0440\u043E\u0434 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 - \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C \u043D\u0430 \u0431\u0430\u0437\u0435 Open Source \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439.\n\t\u041D\u0430 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442, \u0433\u043B\u0430\u0432\u043D\u044B\u043C\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\u043C\u0438 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0438\u0433\u0440\u043E\u0432\u044B\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438. \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u043B\u0430 \u0438 \u0432\u043B\u0430\u0434\u0435\u0435\u0442 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u043C \u0445\u043E\u0441\u0442\u0438\u043D\u0433\u043E\u043C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439 ZiZi Hub. </p>", "2", "3", "4", "<a href=\"mailto:info@amatasoftware.com\" class=\"popup__a\">info@amatasoftware.com</a>", "<h2 class=\"popup__h2\">\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438</h2><p class=\"popup__p\">\u041D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0443 \u043D\u0430\u0441 \u043D\u0435\u0442 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439(</p><p class=\"popup__p\">\u0415\u0441\u043B\u0438 \u0412\u044B \u043D\u0435 \u043D\u0430\u0448\u043B\u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0435\u0439 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438, \u043D\u043E \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0435, \u0447\u0442\u043E \u043E\u0431\u043B\u0430\u0434\u0430\u0435\u0442\u0435 \u0434\u043E\u043B\u0436\u043D\u044B\u043C\u0438 \u043D\u0430\u0432\u044B\u043A\u0430\u043C\u0438, \u0442\u043E \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u0432\u043E\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443:</p><a href=\"mailto:info@amatasoftware.com\" class=\"popup__a\">info@amatasoftware.com</a>"]; // -----------------------------------------------------------------
// ! ============= var =========================
// -----------------------------------------------------------------

var canvas = document.querySelector("canvas"),
    wrapper = document.querySelector(".wrapper"),
    menu = document.querySelector(".menu"),
    menuName = document.querySelector(".menu__name"),
    menuLi = document.querySelectorAll(".menu__li"),
    largeBut = document.querySelector(".menu__large-button"),
    selBut = document.querySelectorAll(".selector__button"),
    main = document.querySelector(".main"),
    tapfield = document.querySelector(".tapfield"),
    popup = document.querySelector(".popup");
var close;
var CIRCLE; //радиус меню
// -----------------------------------------------------------------
// ! ============= view =========================
// -----------------------------------------------------------------

var quantity = selBut.length,
    //количество кнопок
topButQuantity = quantity % 2 === 0 ? quantity / 2 : quantity / 2 + 1,
    //количество верхних кнопок
bottomButQuantity = quantity - topButQuantity; //количество нижних кнопок
//Расположение

var SelButPosition = function SelButPosition() {
  //верхних кнопок
  for (var i = 0; i < topButQuantity; i++) {
    var rotation = 180 / topButQuantity * (i + 0.5) - 90;
    menuLi[i].style.transform = 'rotateZ(' + rotation + 'deg)';
    selBut[i].style.transform = 'rotateZ(' + -rotation + 'deg)';
  } //нижних кнопок


  for (var _i = topButQuantity; _i < quantity; _i++) {
    var _rotation = 180 / bottomButQuantity * (_i - topButQuantity + 0.5) + 90;

    menuLi[_i].style.transform = 'rotateZ(' + _rotation + 'deg)';
    selBut[_i].style.transform = 'rotateZ(' + -_rotation + 'deg)';
  }
};

SelButPosition(); // *Resizing window ----------------------

var maxSize, minSize;
document.addEventListener("resize", Resize, false);

function Resize() {
  if (window.innerWidth < window.innerHeight) {
    maxSize = window.innerHeight;
    minSize = window.innerWidth;
  } else {
    maxSize = window.innerWidth;
    minSize = window.innerHeight;
  }

  canvas.width = maxSize;
  canvas.height = maxSize;

  if (minSize <= 600) {
    wrapper.classList.add('wrapper-min');
    CIRCLE = 150;
  } else {
    wrapper.classList.remove('min');
    CIRCLE = 220;
  }
}

Resize(); // *CANVAS ================================

(function () {
  var config = {
    dotsQuantity: 50,
    dotMinRad: 2,
    dotMaxRad: 20,
    sphereRad: 300,
    bigDotRad: 35,
    mouseSize: 120,
    massFactor: 0.003,
    firstColor: "rgba(256, 256, 256, 0.1)",
    secondColor: "rgba(256, 256, 256, 0.4)",
    smooth: 0.85
  };
  var TWO_PI = 2 * Math.PI;
  var ctx = canvas.getContext("2d");
  var w, h, mouse, dots;

  var Dot = /*#__PURE__*/function () {
    function Dot(r) {
      _classCallCheck(this, Dot);

      this.pos = {
        x: mouse.x,
        y: mouse.y
      };
      this.vel = {
        x: 0,
        y: 0
      };
      this.rad = r || random(config.dotMinRad, config.dotMaxRad);
      this.mass = this.rad * config.massFactor;
      this.color = config.defColor;
    }

    _createClass(Dot, [{
      key: "draw",
      value: function draw(x, y) {
        this.pos.x = x || this.pos.x + this.vel.x;
        this.pos.y = y || this.pos.y + this.vel.y;
        createCircle(this.pos.x, this.pos.y, this.rad, true, config.firstColor);
        createCircle(this.pos.x, this.pos.y, this.rad, false, config.secondColor);
      }
    }]);

    return Dot;
  }();

  function updateDots() {
    for (var i = 1; i < dots.length; i++) {
      var acc = {
        x: 0,
        y: 0
      };

      for (var j = 0; j < dots.length; j++) {
        if (i == j) continue;
        var _ref = [dots[i], dots[j]],
            a = _ref[0],
            b = _ref[1];
        var delta = {
          x: b.pos.x - a.pos.x,
          y: b.pos.y - a.pos.y
        };
        var dist = Math.sqrt(delta.x * delta.x + delta.y * delta.y) || 1;
        var force = (dist - config.sphereRad) / dist * b.mass;

        if (j == 0) {
          var alpha = config.mouseSize / dist;
          a.color = "rgba(250, 10, 30, ".concat(alpha, ")");
          dist < config.mouseSize ? force = (dist - config.mouseSize) * b.mass : force = a.mass;
        }

        acc.x += delta.x * force;
        acc.y += delta.y * force;
      }

      dots[i].vel.x = dots[i].vel.x * config.smooth + acc.x * dots[i].mass;
      dots[i].vel.y = dots[i].vel.y * config.smooth + acc.y * dots[i].mass;
    }

    dots.map(function (e) {
      return e == dots[0] ? e.draw(mouse.x, mouse.y) : e.draw();
    });
  }

  function createCircle(x, y, rad, fill, color) {
    ctx.fillStyle = ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, TWO_PI);
    ctx.closePath();
    fill ? ctx.fill() : ctx.stroke();
  }

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function init() {
    w = canvas.width = maxSize;
    h = canvas.height = maxSize;
    mouse = {
      x: w / 2,
      y: h / 2,
      down: false
    };
    dots = [];
    dots.push(new Dot(config.bigDotRad));
  }

  function loop() {
    ctx.clearRect(0, 0, w, h);

    if (dots.length < config.dotsQuantity) {
      dots.push(new Dot());
    }

    updateDots();
    window.requestAnimationFrame(loop);
  }

  init();
  loop();

  function setPos(event) {
    var _ref2 = [event.clientX, event.clientY];
    mouse.x = _ref2[0];
    mouse.y = _ref2[1];
  }

  document.addEventListener("mousemove", setPos);
  document.addEventListener("mousedown", function () {
    return config.sphereRad = 50;
  });
  document.addEventListener("mouseup", function () {
    return config.sphereRad = 350;
  }); // setInterval(() => {
  // 	config.sphereRad = Math.random() * (350-150) + 150
  // }, 3000);
  // setInterval(() => {
  // 	config.sphereRad = Math.random() * (950-550) + 550
  // }, 15001);
})(); // -----------------------------------------------------------------
// ! ============= control =========================
// -----------------------------------------------------------------


var isNameOpened = false;
largeBut.addEventListener("click", function () {
  if (isNameOpened) {
    menuName.classList.remove("menu__name-opened");
    menuLi.forEach(function (e) {
      return e.classList.remove("menu__li-opened");
    });

    for (var i = 0; i < quantity; i++) {
      selBut[i].style.top = '0px';
      selBut[i].style.opacity = 0;
    }
  } else {
    menuName.classList.add("menu__name-opened");
    menuLi.forEach(function (e) {
      return e.classList.add("menu__li-opened");
    });

    for (var _i2 = 0; _i2 < quantity; _i2++) {
      selBut[_i2].style.top = -CIRCLE + 'px';
      selBut[_i2].style.opacity = 1;
    }
  }

  isNameOpened = !isNameOpened;
});
document.addEventListener("mousemove", function (e) {
  var rotationX = -(e.clientX - window.innerWidth / 2) / window.innerWidth * 40 - 7,
      rotationY = (e.clientY - window.innerHeight / 2) / window.innerHeight * 40 + 7;
  menu.style.transform = 'rotateX(' + rotationY + 'deg) rotateY(' + rotationX + 'deg)';
});
document.querySelector('.hover-field').addEventListener("mouseover", function () {
  menuName.classList.add("menu__name-opened");
});
document.querySelector('.hover-field').addEventListener("mouseout", function () {
  menuName.classList.remove("menu__name-opened");
});
selBut.forEach(function (e) {
  return e.addEventListener("click", function () {
    for (var i = 0; i < quantity; i++) {
      if (this == selBut[i]) {
        wrapper.classList.add("wrapper-hidden");
        main.classList.add("main-opened");
        popup.innerHTML = temp[i];
        close = document.createElement("div");
        popup.prepend(close);
        close.innerHTML = "X";
        close.classList.add('close');
        close.addEventListener("click", Close);
      }
    }
  });
});
tapfield.addEventListener("click", Close);

function Close() {
  wrapper.classList.remove("wrapper-hidden");
  main.classList.remove("main-opened");
  close.removeEventListener("click", Close);
  close.remove();
}