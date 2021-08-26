//portfolio

const slideEl = new Swiper('.portfolio .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 40,
  navigation:{
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev'
  }
});

const port_Array = [
  ["summer.png", "Summer", "스타와 팬들이 모여 소통하는 공간", "로그인 후 우측에 프로필 표시와 글쓰기, 게시글 열람 가능", "좌측 HOT 게시판에 조회수가 높은 8개 게시글 표시", "테블릿pc 사이즈 이하에서는 우측 하단 버튼 클릭시 프로필과 가입그룹 표시", "PHP, MYSQL 사용 / 반응형으로 제작","디자인 11%, 제작 100%", "https://www.naver.com/"],
  ["fanboard.png", "Summer2", "스타와dfsdf는 공간", "로그인 후 우측sdf기, 게시글 열람 가능", "좌측 HOT 게시판에 조회수가 높은 8개 게시글 표시", "테블sdf단 버튼 클릭시 프로필과 가입그룹 표시", "22PHP, Msdfs제작","디자인 222%, 제작 100%", "www.nav454er.com"],
  ["fanboard_ch1.png", "Summer3", "스타와dfsdf는 공간", "로그인 후 우측sdf기, 게시글 열람 가능", "좌측 HOT 게시판에 조회수가 높은 8개 게시글 표시", "테블sdf단 버튼 클릭시 프로필과 가입그룹 표시", "33PHP, Msdfs제작","디자인 103330%, 제작 100%", "www.nav454er.com"],
  ["fanboard_gr1.png", "Summer4", "스타와dfsdf는 공간", "로그인 후 우측sdf기, 게시글 열람 가능", "좌측 HOT 게시판에 조회수가 높은 8개 게시글 표시", "테블sdf단 버튼 클릭시 프로필과 가입그룹 표시", "44PHP, Msdfs제작","디자인 104440%, 제작 100%", "www.nav454er.com"],
];


const port_swiper_wrapper = document.querySelector(".portfolio .swiper-wrapper");

for(i=0; i<port_Array.length; i++){
  const port_box = `
  <div class="swiper-slide">
    <div class="monitor">
    <img src="./image/${port_Array[i][0]}" alt="포트폴리오 이미지" class="monitor_cont">
    <img src="./image/moni.png" alt="모니터" class="monitor_img">
    </div>
    <h2>${port_Array[i][1]}</h2>
    <a href="javascript:void(0);" class="btn">자세히 보기</a>
  </div>
  `;
  port_swiper_wrapper.innerHTML += port_box;
}

const slideBtns = document.querySelectorAll(".portfolio .btn");
const portPop = document.querySelector(".portfolio .port_pop");
const portBlack = document.querySelector(".portfolio .black");
const portPop_img = portPop.querySelector(".img_part");
const portPop_text = portPop.querySelector(".text_part");

slideBtns.forEach(function(slideBtn, index){
  slideBtn.addEventListener("click", function(){
    portBlack.classList.add("show");
    portPop.classList.add("show");
    const img_src = slideBtn.previousElementSibling.previousElementSibling.childNodes[1].getAttribute("src");
    const img_title = slideBtn.previousElementSibling.textContent;
    console.log(img_title)
    portPop_img.style.backgroundImage = `url(${img_src})`;
    portPop_text.children[0].textContent = img_title;
    portPop_text.children[1].textContent = port_Array[index][2];
    portPop_text.children[2].textContent = port_Array[index][3];
    portPop_text.children[3].textContent = port_Array[index][4];
    portPop_text.children[4].textContent = port_Array[index][5];
    portPop_text.children[5].textContent = port_Array[index][6];
    portPop_text.children[6].textContent = port_Array[index][7];
    portPop_text.querySelector("a").setAttribute("href", port_Array[index][7]);
  });
})

const close = document.querySelector(".close");

close.addEventListener("click", function(){
  portBlack.classList.remove("show");
  portPop.classList.remove("show");
});
portBlack.addEventListener("click", function(){
  if(portBlack.classList.contains("show") === true){
    portBlack.classList.remove("show");
    portPop.classList.remove("show");
  }
});




// thankyou_message
const thankyou_message = document.querySelector(".thankyou_message");
const message_close = thankyou_message.querySelector(".message_close");

message_close.addEventListener("click", function(){
  thankyou_message.style.display = "none";
});

// footer 년도 설정
const now_year = document.querySelector(".now");
const now = new Date().getFullYear();
now_year.textContent = now;