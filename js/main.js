let  elListeningModal = document.querySelector(".modal__listening");
let elBtn = document.querySelector('.header__btns-two');
let elHeaderInner = document.querySelector('.header__inner');
let elBtnVid = document.querySelector('.header__btns-video');
let elHeaderInnerTwo = document.querySelector('.header__inner-two')
let elBtnList = document.querySelector('.header__btns-list');
let elBtnX = document.querySelector('.modal__listenings-btn');
let elLive = document.querySelector('.live');
let elBtnLive = document.querySelector('.header__btns-live');
let elAccount = document.querySelector('.account');
let elBtnAccount = document.querySelector('.header__btns-account');
let elContentAside = document.querySelector('.aside__content');
let elListAside = document.querySelector('.aside__list');
let elGroupAside = document.querySelector('.aside__group');
let elBtnAside = document.querySelector('.aside__btn');
let elBigContent = document.querySelector('.big-content');
let elFrame1 = document.querySelector('.video__frame1');
let elFrame2 = document.querySelector('.video__frame2');
let elFrame3 = document.querySelector('.video__frame3');
let elFrame4 = document.querySelector('.video__frame4');
let elFrame5 = document.querySelector('.video__frame5');
let elFrame6 = document.querySelector('.video__frame6');
let elFrame7 = document.querySelector('.video__frame7');
let elFrame8 = document.querySelector('.video__frame8');
elBtn.addEventListener("click",  function(e) {
  e.preventDefault();
  elListeningModal.classList.add('modal-active');
  })

elBtnX.addEventListener("click",function(e){
  e.preventDefault();
  elListeningModal.classList.add('modal-noactive');
})

elBtnVid.addEventListener("click",function(){
  elHeaderInner.classList.toggle('addblock');
})

elBtnList.addEventListener("click",function(){
  elHeaderInnerTwo.classList.toggle('addblocktwo');
})

elBtnLive.addEventListener("click", function() {
  elLive.classList.toggle('liveadd');
})

elBtnAccount.addEventListener("click",function() {
  elAccount.classList.toggle('accblock');
})
elBtnAside.addEventListener("click",function() {
  elContentAside.classList.toggle('wdth');
  elListAside.classList.toggle('aside-none');
  elGroupAside.classList.toggle('aside-block');
  elBigContent.classList.toggle('margn');
  elFrame1.classList.toggle('widthadd')
  elFrame2.classList.toggle('widthadd')
  elFrame3.classList.toggle('widthadd')
  elFrame4.classList.toggle('widthadd')
  elFrame5.classList.toggle('widthadd')
  elFrame6.classList.toggle('widthadd')
  elFrame7.classList.toggle('widthadd')
  elFrame8.classList.toggle('widthadd')
})