
const verMenu = document.querySelector(".ver-menu");
const verHeader = document.querySelector("header");
const headerBlack = document.querySelector(".header_black");

verMenu.addEventListener("click", function () {
  if (verMenu.classList.contains("active") === false) {
    gsap.to(verHeader, 0.8, {
      x: "-200px"
    })
    verMenu.classList.add("active");
    headerBlack.classList.add("active");
    verMenu.textContent = "close";
    verMenu.style.color = "#fff";
  } else {
    gsap.to(verHeader, 0.8, {
      x: "0px"
    })
    verMenu.classList.remove("active");
    headerBlack.classList.remove("active");
    verMenu.textContent = "menu";
    verMenu.style.color = "#000"; // 색상 변경
  }
});

headerBlack.addEventListener("click", function () {
  gsap.to(verHeader, 0.8, {
    x: "0px"
  })
  verMenu.classList.remove("active");
  headerBlack.classList.remove("active");
  verMenu.textContent = "menu";
  verMenu.style.color = "#000"; // 색상 변경
});


const menuEls = document.querySelectorAll("header .menu li");
const section = document.querySelectorAll("section");

menuEls.forEach(function (menuEl, index) {
  menuEl.addEventListener("click", function () {
    gsap.to(window, 1, {
      scrollTo: section[index + 1]
    })
  });
});



const totop = document.querySelector("#totop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    gsap.to(totop, 0.6, {
      opacity: 1,
      display: "flex"
    });
  } else {
    gsap.to(totop, 0.6, {
      opacity: 0,
      display: "none"
    });
  };
});

totop.addEventListener("click", function () {
  gsap.to(window, 1, {
    scrollTo: 0
  })
});



const spyEls = document.querySelectorAll(".scroll-spy");

spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.4,
  }).setClassToggle(spyEl, "active").addTo(new ScrollMagic.Controller());
});



//portfolio

const slideEl = new Swiper('.portfolio .swiper-container', {
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev'
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    960: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  },
  spaceBetween: 20,
});

const port_Array = [
  ["summer.png", "Summer K-pop", "여름에 듣기 좋은 K-pop을 소개", "앨범 이미지 클릭시, 해당 곡 youtube 영상으로 이동", "앨범 이미지 클릭시, 회전하던 LP이미지 애니메이션 동작", "하단 버튼 클릭시 좌우로 이동", "css animation과 keyframes을 활용", "디자인 100%, 제작 100%", "https://2gyoon.github.io/summer_song/"],
  ["fanboard.png", "FANBOARD_MAIN", "스타의 팬들이 중심이 되는 커뮤니티", "MY, HOT, NEW로 카테고리 구분", "북마크 버튼 클릭시 원의 이동과 버튼 색상 변경", "로그인과 로그아웃이 가능함", "PHP, MYSQL 사용 / 반응형", "디자인 100%, 제작 100%", "http://dnlsl70.dothome.co.kr/fanboard/"],
  ["fanboard_ch1.png", "FANBOARD_CH", "스타의 팬들이 모여 소통하는 공간", "로그인 후 우측에 프로필 표시와 글쓰기, 게시글 열람 가능", "좌측 HOT 게시판에 조회수가 높은 8개 게시글 표시", "테블릿pc 사이즈 이하에서 우측 하단 버튼 클릭시 프로필과 가입그룹 표시", "PHP, MYSQL 사용 / 반응형으로 제작", "디자인 100%, 제작 100%", "http://dnlsl70.dothome.co.kr/fanboard/ch_ohmyg.php"],
  ["fanboard_gr2.png", "FANBOARD_GR", "특정 관심사를 가진 팬들이 모여 만든 소모임", "각 게시판에 게시글쓰기 가능", "자유게시판, 모집/홍보 게시판, 오늘의 한마디", "그룹 특성에 맞는 광고를 좌측에 배치", "PHP, MYSQL 사용 / 반응형", "디자인 100%, 제작 100%", "http://dnlsl70.dothome.co.kr/fanboard/ch_ohmyg_gr2.php"],

  ["website.png", "온라인클래스", "온라인 동영상 강의 사이트", "게시판, 메시지보내기, 회원가입, 로그인 기능 실습", "클래스 검색 기능 실습", "쿠키 사용한 팝업 실습", "PHP, MYSQL 사용", "디자인 50%, 제작 70%", "http://dnlsl70.dothome.co.kr/website/"],
  ["clone_site1.png", "Fashion Blog", "클론사이트 제작 연습", "메인과 패션 카테고리 페이지 제작", "플로그인 없이 제작", "원본 사이트 : https://the7.io/fashion-blog/fashion/", "", "디자인 기존 페이지 참고, 제작 100%", "https://2gyoon.github.io/clone_site1/"],
  ["jangsari.png", "장사리", "영화 '장사리' 소개 사이트", "메인 화면에 동영상 삽입 실습", "", "", "ajax 사용 / 반응형", "제작 80%", "https://2gyoon.github.io/jangsari/"],
  ["weatherapp.png", "Weather App", "지역 날씨를 알려주는 날씨 웹앱", "API 활용 실습", "지역 검색 기능 실습", "", "ajax와 openweathermap을 활용 / 반응형", "제작 70%", "https://2gyoon.github.io/weatherapp/"],
  ["inspace.png", "Inspace", "건축, 인테리어 사이트", "자동 슬라이드 실습", "탭박스 실습", "헤더 메뉴 클릭시 해당 파트로 자동 이동", "", "제작 100%", "https://2gyoon.github.io/inspace/"],
  ["audition.png", "FilmMaker", "영화인 커뮤니티", "헤더 메뉴에 hover시 디자인 추가", "배우 사진에 hover 기능 추가", "", "", "제작 100%", "https://2gyoon.github.io/audition/"],
  ["origin.png", "Origin", "아이들을 위한 공연 안내 사이트", "화면 크기에 따라 메뉴 파트 이동", "", "", "반응형", "제작 80%", "https://2gyoon.github.io/origin/"],
  ["BnO-Play.png", "BnO-Play", "BnO-Play 홈페이지 제작", "동영상 자동 재생과 텍스트 추가 실습", "", "", "", "제작 90%", "https://2gyoon.github.io/BnO-Play/"],
  ["wedding.png", "TheAisle", "결혼식 정보 알림 사이트", "", "", "", "", "제작 80%", "https://2gyoon.github.io/wedding/"],
  ["theater.png", "극예술연구회", "연극정보 안내 사이트", "화면 크기에 따라 메뉴 파트 이동", "", "", "반응형", "디자인 50%, 제작 70%", "https://2gyoon.github.io/theater/"],

  ["investplan.png", "InvestPlan", "투자설계사이트", "5개 페이지로 제작", "각 페이지마다 구름 이미지 이동", "", "css animation과 keyframes을 활용", "디자인 50%, 제작 70%", "https://2gyoon.github.io/investplan/"],
  ["cashmere.png", "Cashmere", "온라인 의류사이트 캐시미어", "", "", "", "css animation과 keyframes을 활용", "제작 60%", "https://2gyoon.github.io/cashmere/"],
  ["hospital.png", "세종병원", "세종병원 웹사이트", "이중 메뉴영역 실습", "", "", "", "제작 60%", "https://2gyoon.github.io/hospital/"],
  ["Kuliner.png", "Kuliner", "레스토랑 소개 웹사이트", "wow.js 활용", "animate.css(Daniel Eden / http://daneden.me/animate) 활용", "", "구글 맵 API 활용", "제작 50%", "https://2gyoon.github.io/Kuliner/"],
];


const port_swiper_wrapper = document.querySelector(".portfolio .swiper-wrapper");

for (i = 0; i < port_Array.length; i++) {
  const port_box = `
  <div class="swiper-slide">
    <div class="monitor">
      <div class="monitor_cont"></div>
      <img src="./image/moni.png" alt="모니터" class="monitor_img">
    </div>
    <h2>${port_Array[i][1]}</h2>
    <a href="javascript:void(0);" class="btn">자세히 보기</a>
  </div>
  `;
  port_swiper_wrapper.innerHTML += port_box;
}

const monitor_conts = document.querySelectorAll(".portfolio .monitor_cont");

monitor_conts.forEach(function (monitor_cont, index) {
  monitor_cont.style.backgroundImage = `url(./image/${port_Array[index][0]})`;
});


const slideBtns = document.querySelectorAll(".portfolio .btn");
const portPop = document.querySelector(".portfolio .port_pop");
const portBlack = document.querySelector(".portfolio .black");
const portPop_img = portPop.querySelector(".img_part");
const portPop_text = portPop.querySelector(".text_part");

slideBtns.forEach(function (slideBtn, index) {
  slideBtn.addEventListener("click", function () {
    portBlack.classList.add("show");
    portPop.classList.add("show");
    // const img_src = slideBtn.previousElementSibling.previousElementSibling.childNodes[1].getAttribute("src");
    const img_title = slideBtn.previousElementSibling.textContent;
    portPop_img.style.backgroundImage = `url(./image/${port_Array[index][0]})`;
    portPop_text.children[0].textContent = img_title;
    portPop_text.children[1].textContent = port_Array[index][2];
    portPop_text.children[2].textContent = port_Array[index][3];
    portPop_text.children[3].textContent = port_Array[index][4];
    portPop_text.children[4].textContent = port_Array[index][5];
    portPop_text.children[5].textContent = port_Array[index][6];
    portPop_text.children[6].textContent = port_Array[index][7];
    portPop_text.querySelector("a").setAttribute("href", port_Array[index][8]);
  });
})

const close = document.querySelector(".close");

close.addEventListener("click", function () {
  portBlack.classList.remove("show");
  portPop.classList.remove("show");
});
portBlack.addEventListener("click", function () {
  if (portBlack.classList.contains("show") === true) {
    portBlack.classList.remove("show");
    portPop.classList.remove("show");
  }
});




// thankyou_message
const thankyou_message = document.querySelector(".thankyou_message");
const message_close = thankyou_message.querySelector(".message_close");

message_close.addEventListener("click", function () {
  thankyou_message.style.display = "none";
});

// footer 년도 설정
const now_year = document.querySelector(".now");
const now = new Date().getFullYear();
now_year.textContent = now;