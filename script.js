"use strict";

// JavaScript でタブ切り替えを実装
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    // 全てのタブとコンテンツを非アクティブ化
    document
      .querySelectorAll(".tab, .tab-content")
      .forEach((el) => el.classList.remove("active"));

    // クリックされたタブと対応するコンテンツをアクティブ化
    this.classList.add("active");
    document
      .getElementById(this.getAttribute("data-tab"))
      .classList.add("active");

    // ページのトップにスクロール
    window.scrollTo(0, 0);
  });
});

const video1 = document.getElementById("myVideo1");
const volumeControl1 = document.getElementById("volumeControl1");
video1.volume = 0.1;
// スライダーの値に応じて音量を変更
volumeControl1.addEventListener("input", (event) => {
  video1.volume = event.target.value;
});

const video2 = document.getElementById("myVideo2");
const volumeControl2 = document.getElementById("volumeControl2");
video2.volume = 0.1;
// スライダーの値に応じて音量を変更
volumeControl2.addEventListener("input", (event) => {
  video2.volume = event.target.value;
});

const video3 = document.getElementById("myVideo3");
const volumeControl3 = document.getElementById("volumeControl3");
video3.volume = 0.1;
// スライダーの値に応じて音量を変更
volumeControl3.addEventListener("input", (event) => {
  video3.volume = event.target.value;
});

const video4 = document.getElementById("myVideo4");
const volumeControl4 = document.getElementById("volumeControl4");
video4.volume = 0.1;
// スライダーの値に応じて音量を変更
volumeControl4.addEventListener("input", (event) => {
  video4.volume = event.target.value;
});

const video5 = document.getElementById("myVideo5");
const volumeControl5 = document.getElementById("volumeControl5");
video5.volume = 0.1;
// スライダーの値に応じて音量を変更
volumeControl5.addEventListener("input", (event) => {
  video5.volume = event.target.value;
});
