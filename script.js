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

// 高校のリスト
const schools = [
  "東海大札幌",
  "青森山田",
  "花巻東",
  "聖光学院",
  "健大高崎",
  "浦和実",
  "千葉黎明",
  "横浜",
  "横浜清陵",
  "山梨学院",
  "二松学舎大付",
  "早稲田実",
  "常葉大菊川",
  "至学館",
  "大垣日大",
  "日本航空石川",
  "敦賀気比",
  "滋賀学園",
  "滋賀短大付",
  "東洋大姫路",
  "天理",
  "市和歌山",
  "智弁和歌山",
  "広島商",
  "米子松蔭",
  "高松商",
  "明徳義塾",
  "西日本短大付",
  "柳ヶ浦",
  "壱岐",
  "エナジックスポーツ",
  "沖繩商学",
];

// 選択状態を保持するオブジェクト
const selections = {
  personA: "",
  personB: "",
  personC: "",
  personD: "",
  personE: "",
  personF: "",
  personG: "",
  personH: "",
  personI: "",
  personJ: "",
  personK: "",
  personL: "",
  personM: "",
  personN: "",
  personO: "",
  personP: "",
};

// localStorageから選択状態を読み込む
function loadSelections() {
  const savedSelections = localStorage.getItem("selections");
  if (savedSelections) {
    Object.assign(selections, JSON.parse(savedSelections));
  }
}

// 選択状態をlocalStorageに保存する
function saveSelections() {
  localStorage.setItem("selections", JSON.stringify(selections));
}

// プルダウンメニューを生成する関数
function createDropdown(personId) {
  const select = document.getElementById(personId);
  select.innerHTML = ""; // 既存の選択肢をクリア

  // デフォルトの選択肢を追加
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "";
  select.appendChild(defaultOption);

  // 高校のリストから選択肢を生成
  schools.forEach((school) => {
    const option = document.createElement("option");
    option.value = school;
    option.textContent = school;

    // 他の人が選択している高校は選択不可にする
    if (
      Object.values(selections).includes(school) &&
      selections[personId] !== school
    ) {
      option.disabled = true;
    }

    select.appendChild(option);
  });

  // 現在の選択を設定
  select.value = selections[personId];
}

// 選択が変更されたときの処理
function handleSelectionChange(personId) {
  const select = document.getElementById(personId);
  const selectedSchool = select.value;

  // 新しい選択を保存
  selections[personId] = selectedSchool;

  // 選択状態を保存
  saveSelections();

  // 他のプルダウンメニューを更新
  Object.keys(selections).forEach((id) => {
    createDropdown(id);
  });
}

// ページ読み込み時にプルダウンメニューを初期化
window.onload = function () {
  // 選択状態を読み込む
  loadSelections();

  // プルダウンメニューを作成
  createDropdown("personA");
  createDropdown("personB");
  createDropdown("personC");
  createDropdown("personD");
  createDropdown("personE");
  createDropdown("personF");
  createDropdown("personG");
  createDropdown("personH");
  createDropdown("personI");
  createDropdown("personJ");
  createDropdown("personK");
  createDropdown("personL");
  createDropdown("personM");
  createDropdown("personN");
  createDropdown("personO");
  createDropdown("personP");
};
