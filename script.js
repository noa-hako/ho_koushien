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
  });
});
