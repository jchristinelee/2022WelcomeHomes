//slides click 
const tabMenu = document.querySelectorAll('ul.tab-menu li');
const tabContent = document.querySelectorAll('#tab-content > div');
const highLight = document.querySelector('.highlight');

tabMenu.forEach(function(item,idx) {
    item.addEventListener('click',function(e){
        e.preventDefault();
        showContent(idx);
        moveHighlight(idx);
    })
});

function showContent(num) {
    tabContent.forEach(function(item){
        item.style.display = 'none';
    });
    tabContent[num].style.display = 'block';
}

function moveHighlight(num) {
    const newLeft = tabMenu[num].offsetLeft;
    const newWidth = tabMenu[num].offsetWidth;

    highLight.style.left = newLeft + 'px';
    highLight.style.width = newWidth + 'px';
}

const placesSlides = document.querySelector('.places-slide');
const slides = document.querySelectorAll('.places-slide > li');

var currentIndex = 0;
const slideCount = slides.length;

const leftSlide = document.querySelector(".left_slide");
const rightSlide = document.querySelector(".right_slide");

var slideWidth = 315;
var slideMargin = 10;


//slides click left and right 
placesSlides.style.width = ((slideWidth + slideMargin) * slideCount - slideMargin) + 'px';

leftSlide.addEventListener('click', () => {
    currentIndex--;
    moveSlides(currentIndex)

    if (currentIndex == slideCount - 1) {
        $('.right_slide').hide();
    } 
    
    if (currentIndex == 0) {
        $('.left_slide').hide();
    } else {
        $('.right_slide').show();
    }
})

rightSlide.addEventListener('click', () => {
    currentIndex++;
    moveSlides(currentIndex)
    
    if (currentIndex == slideCount - 1) {
        $('.right_slide').hide();
    } else {
        $('.left_slide').css('display','flex').show();
    }
    
    if (currentIndex == 0) {
        $('.left_slide').hide();
    }
})

function moveSlides(num) {
    placesSlides.style.left = -num * 270 + 'px';
    currentIndex = num;

}


//slides swipe left and right
let curPos = 0;
let postion = 0;
let start_x, end_x;

placesSlides.addEventListener('touchstart', touch_start);
placesSlides.addEventListener('touchend', touch_end);


function nxt(){
    if(curPos < 7){
      postion -= slideWidth;
      placesSlides.style.transform = `translateX(${postion}px)`;
      curPos = curPos + 1;
    } else if (curPos == 7){
        curPos = curPos -1;
    }
  }

function prv(){
  if(curPos > 0){
    postion += slideWidth;
    placesSlides.style.transform = `translateX(${postion}px)`;
    curPos = curPos - 1;

  }
}
 
function touch_start(event) {
  start_x = event.touches[0].pageX
}
 
function touch_end(event) {
  end_x = event.changedTouches[0].pageX;
  if(start_x > end_x){
    nxt();
  }else{
    prv();
  }
}


