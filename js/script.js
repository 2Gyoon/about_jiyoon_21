const slideEl = new Swiper('.portfolio .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 40,
  navigation:{
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev'
  }
});

const port_Array = [
  ["Summer", "스타와 팬들이 모여 소통하는 공간", "로그인 후 우측에 프로필 표시와 글쓰기, 게시글 열람 가능", "좌측 HOT 게시판에 조회수가 높은 8개 게시글 표시", "테블릿pc 사이즈 이하에서는 우측 하단 버튼 클릭시 프로필과 가입그룹 표시", "PHP, MYSQL 사용 / 반응형으로 제작", "www.naver.com"],
  ["Summer2", "스타와dfsdf는 공간", "로그인 후 우측sdf기, 게시글 열람 가능", "좌측 HOT 게시판에 조회수가 높은 8개 게시글 표시", "테블sdf단 버튼 클릭시 프로필과 가입그룹 표시", "PHP, Msdfs제작", "www.nav454er.com"],
];

const port_box = `
    <div class="monitor">
    <img src="./image/summer.png" alt="포트폴리오 이미지" class="monitor_cont">
    <img src="./image/moni.png" alt="모니터" class="monitor_img">
    </div>
    <h2>SUMMER</h2>
    <a href="javascript:void(0);" class="btn">자세히 보기</a>
`;


const port_swiper_slide = document.createElement("div");
port_swiper_slide.classList.add("swiper-slide");
port_swiper_slide.innerHTML = port_box;
console.log(port_swiper_slide);

const port_swiper_wrapper = document.querySelector(".portfolio .swiper-wrapper");

for(i=0; i<port_Array.length; i++){
  port_swiper_wrapper.appendChild(port_swiper_slide);
}

const slideBtns = document.querySelectorAll(".portfolio .btn");
const portPop = document.querySelector(".portfolio .port_pop");
const portBlack = document.querySelector(".portfolio .black");
const portPop_img = document.querySelector(".portfolio .img_part");
const portPop_text = document.querySelector(".portfolio .text_part");

slideBtns.forEach(function(slideBtn, index){
  slideBtn.addEventListener("click", function(){
    portBlack.classList.add("show");
    portPop.classList.add("show");
    const img_src = slideBtn.previousElementSibling.previousElementSibling.childNodes[1].getAttribute("src");
    const img_title = slideBtn.previousElementSibling.textContent;
    console.log(img_title)
    portPop_img.style.backgroundImage = `url(${img_src})`;
    portPop_text.children[0].textContent = img_title;
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