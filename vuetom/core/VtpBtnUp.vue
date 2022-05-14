<template>
  <div class="vt-btn-up-wrapper">
    <input type="checkbox" />
    <div class="btn"></div>
    <div class="tooltip">
      <slot>
      </slot>
    </div>
    <svg>
      <use xlink:href="#shape-01" class="shape shape-01" />
      <use xlink:href="#shape-02" class="shape shape-02" />
      <use xlink:href="#shape-03" class="shape shape-03" />
      <use xlink:href="#shape-04" class="shape shape-04" />
      <use xlink:href="#shape-05" class="shape shape-05" />
      <use xlink:href="#shape-06" class="shape shape-06" />
      <use xlink:href="#shape-07" class="shape shape-07" />
      <use xlink:href="#shape-08" class="shape shape-08" />
      <use xlink:href="#shape-09" class="shape shape-09" />
    </svg>
  </div>
</template>

<style scoped>
.vt-btn-up-wrapper {
  --background: #62abff;
  --icon-color: #414856;
  --shape-color-01: #b8cbee;
  --shape-color-02: #7691e8;
  --shape-color-03: #fdd053;
  --width: 40px;
  --height: 40px;
  --border-radius: var(--height);
  width: var(--width);
  height: var(--height);
  position: relative;
  border-radius: var(--border-radius);
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
.vt-btn-up-wrapper .btn {
  background: var(--background);
  width: var(--width);
  height: var(--height);
  position: relative;
  z-index: 3;
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-animation: plus-animation-reverse 0.5s ease-out forwards;
  animation: plus-animation-reverse 0.5s ease-out forwards;
}
.vt-btn-up-wrapper .btn::before,
.vt-btn-up-wrapper .btn::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 4px;
  background: #fff;
}
.vt-btn-up-wrapper .btn::before {
  width: 4px;
  height: 14px;
}
.vt-btn-up-wrapper .btn::after {
  width: 14px;
  height: 4px;
}
.vt-btn-up-wrapper .tooltip {
  /* width: 90px;
  height: 75px; */
  border-radius: 70px;
  position: absolute;
  background: #fff;
  z-index: 2;
  padding: 0 15px;
  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.1);
  opacity: 0;
  top: 0;
  display: -webkit-box;
  display: flex;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
  -webkit-transition: opacity 0.15s ease-in, top 0.15s ease-in,
    width 0.15s ease-in;
  transition: opacity 0.15s ease-in, top 0.15s ease-in, width 0.15s ease-in;
}
.vt-btn-up-wrapper .tooltip:hover {
  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.2);
}
.vt-btn-up-wrapper .tooltip > svg {
  width: 100%;
  height: 26px;
  display: -webkit-box;
  display: flex;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
}
.vt-btn-up-wrapper .tooltip > svg .icon {
  fill: none;
  stroke: var(--icon-color);
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0.4;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
.vt-btn-up-wrapper .tooltip > svg:hover .icon {
  opacity: 1;
}
.vt-btn-up-wrapper .tooltip::after {
  content: '';
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  margin-left: -10px;
  bottom: -8px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  z-index: 0;
}
.vt-btn-up-wrapper > svg {
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 1;
  -webkit-transform: scale(0);
  transform: scale(0);
}
.vt-btn-up-wrapper > svg .shape {
  fill: none;
  stroke: none;
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-linejoin: round;
  -webkit-transform-origin: 50% 20%;
  transform-origin: 50% 20%;
}
.vt-btn-up-wrapper input {
  height: 100%;
  width: 100%;
  border-radius: var(--border-radius);
  cursor: pointer;
  position: absolute;
  z-index: 5;
  opacity: 0;
}
.vt-btn-up-wrapper input:checked ~ svg {
  -webkit-animation: pang-animation 1.2s ease-out forwards;
  animation: pang-animation 1.2s ease-out forwards;
}
.vt-btn-up-wrapper input:checked ~ svg .shape:nth-of-type(1) {
  -webkit-transform: translate(-17px, 30%) rotate(40deg);
  transform: translate(-17px, 30%) rotate(40deg);
}
.vt-btn-up-wrapper input:checked ~ svg .shape:nth-of-type(2) {
  -webkit-transform: translate(15px, 30%) rotate(80deg);
  transform: translate(15px, 30%) rotate(80deg);
}
.vt-btn-up-wrapper input:checked ~ svg .shape:nth-of-type(3) {
  -webkit-transform: translate(11px, 30%) rotate(120deg);
  transform: translate(11px, 30%) rotate(120deg);
}
.vt-btn-up-wrapper input:checked ~ svg .shape:nth-of-type(4) {
  -webkit-transform: translate(20px, 30%) rotate(160deg);
  transform: translate(20px, 30%) rotate(160deg);
}
.vt-btn-up-wrapper input:checked ~ svg .shape:nth-of-type(5) {
  -webkit-transform: translate(-20px, 30%) rotate(200deg);
  transform: translate(-20px, 30%) rotate(200deg);
}
.vt-btn-up-wrapper input:checked ~ svg .shape:nth-of-type(6) {
  -webkit-transform: translate(10px, 30%) rotate(240deg);
  transform: translate(10px, 30%) rotate(240deg);
}
.vt-btn-up-wrapper input:checked ~ svg .shape:nth-of-type(7) {
  -webkit-transform: translate(3px, 30%) rotate(280deg);
  transform: translate(3px, 30%) rotate(280deg);
}
.vt-btn-up-wrapper input:checked ~ svg .shape:nth-of-type(8) {
  -webkit-transform: translate(0px, 30%) rotate(320deg);
  transform: translate(0px, 30%) rotate(320deg);
}
.vt-btn-up-wrapper input:checked ~ svg .shape:nth-of-type(9) {
  -webkit-transform: translate(25px, 30%) rotate(360deg);
  transform: translate(25px, 30%) rotate(360deg);
}
.vt-btn-up-wrapper input:checked ~ .btn {
  -webkit-animation: plus-animation 0.5s ease-out forwards;
  animation: plus-animation 0.5s ease-out forwards;
}
.vt-btn-up-wrapper input:checked ~ .tooltip {
  width: 190px;
  height: 70px;
  -webkit-animation: stretch-animation 1s ease-out forwards 0.15s;
  animation: stretch-animation 1s ease-out forwards 0.15s;
  top: -90px;
  opacity: 1;
}

@-webkit-keyframes pang-animation {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    opacity: 0;
  }
}

@keyframes pang-animation {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    opacity: 0;
  }
}
@-webkit-keyframes plus-animation {
  0% {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
  }
  20% {
    -webkit-transform: rotate(60deg) scale(0.93);
    transform: rotate(60deg) scale(0.93);
  }
  55% {
    -webkit-transform: rotate(35deg) scale(0.97);
    transform: rotate(35deg) scale(0.97);
  }
  80% {
    -webkit-transform: rotate(48deg) scale(0.94);
    transform: rotate(48deg) scale(0.94);
  }
  100% {
    -webkit-transform: rotate(45deg) scale(0.95);
    transform: rotate(45deg) scale(0.95);
  }
}
@keyframes plus-animation {
  0% {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
  }
  20% {
    -webkit-transform: rotate(60deg) scale(0.93);
    transform: rotate(60deg) scale(0.93);
  }
  55% {
    -webkit-transform: rotate(35deg) scale(0.97);
    transform: rotate(35deg) scale(0.97);
  }
  80% {
    -webkit-transform: rotate(48deg) scale(0.94);
    transform: rotate(48deg) scale(0.94);
  }
  100% {
    -webkit-transform: rotate(45deg) scale(0.95);
    transform: rotate(45deg) scale(0.95);
  }
}
@-webkit-keyframes plus-animation-reverse {
  0% {
    -webkit-transform: rotate(45deg) scale(0.95);
    transform: rotate(45deg) scale(0.95);
  }
  20% {
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
  55% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  80% {
    -webkit-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
  }
}
@keyframes plus-animation-reverse {
  0% {
    -webkit-transform: rotate(45deg) scale(0.95);
    transform: rotate(45deg) scale(0.95);
  }
  20% {
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
  55% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  80% {
    -webkit-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
  }
}
@-webkit-keyframes stretch-animation {
  0% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  10% {
    -webkit-transform: scale(1.1, 0.9);
    transform: scale(1.1, 0.9);
  }
  30% {
    -webkit-transform: scale(0.9, 1.1);
    transform: scale(0.9, 1.1);
  }
  50% {
    -webkit-transform: scale(1.05, 0.95);
    transform: scale(1.05, 0.95);
  }
  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
@keyframes stretch-animation {
  0% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  10% {
    -webkit-transform: scale(1.1, 0.9);
    transform: scale(1.1, 0.9);
  }
  30% {
    -webkit-transform: scale(0.9, 1.1);
    transform: scale(0.9, 1.1);
  }
  50% {
    -webkit-transform: scale(1.05, 0.95);
    transform: scale(1.05, 0.95);
  }
  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
body {
  background: #e8ebf3;
  height: 100vh;
  font: 400 16px 'Poppins', sans-serif;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
body .socials {
  position: fixed;
  display: block;
  left: 20px;
  bottom: 20px;
}
body .socials > a {
  display: block;
  width: 30px;
  opacity: 0.2;
  -webkit-transform: scale(var(--scale, 0.8));
  transform: scale(var(--scale, 0.8));
  -webkit-transition: -webkit-transform 0.3s
    cubic-bezier(0.38, -0.12, 0.24, 1.91);
  transition: -webkit-transform 0.3s cubic-bezier(0.38, -0.12, 0.24, 1.91);
  transition: transform 0.3s cubic-bezier(0.38, -0.12, 0.24, 1.91);
  transition: transform 0.3s cubic-bezier(0.38, -0.12, 0.24, 1.91),
    -webkit-transform 0.3s cubic-bezier(0.38, -0.12, 0.24, 1.91);
}
body .socials > a:hover {
  --scale: 1;
}
</style>
