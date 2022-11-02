// hero carousel click left and right
const slide = document.querySelector(".hero-slide");

let slideW = slide.clientWidth;

let slider = document.querySelectorAll(".slider");

const prev = document.querySelector(".slide_prev");
const next = document.querySelector(".slide_next");

const maxSlider = slider.length;
let currentSlide = 1;

const startSlider = slider[0];
const endSlider = slider[slider.length -1];

const startElement = document.createElement("div");
const endElement = document.createElement("div");

endSlider.classList.forEach((c) => endElement.classList.add(c));
endElement.innerHTML = endSlider.innerHTML;

startSlider.classList.forEach((c) => endElement.classList.add(c));
startElement.innerHTML = startSlider.innerHTML;



slider[0].before(endElement);
slider[slider.length - 1].after(startElement);

slider = document.querySelectorAll(".slider");

let offset = slideW + currentSlide;
slider.forEach((i) => {
    i.setAttribute("style", `left: ${-offset}px`);
});


function moveNext() {
    currentSlide++;
    if (currentSlide < maxSlider) {

        const offset = slideW * currentSlide;

        slider.forEach((i) => {
          i.setAttribute("style", `left: ${-offset}px`);
        });
} else {
    currentSlide = 0;
    let offset = slideW * currentSlide;
    slider.forEach((i) => {
        i.setAttribute("style", `transition: ${10}s; left: ${-offset}px`);
    });

    currentSlide++;
    offset = slideW * currentSlide;
    setTimeout(() => {
        slider.forEach((i) => {i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
    });
    }, 0)
}
};

function movePrev() {
    currentSlide--;
    if (currentSlide > 0) {
        const offset = slideW * currentSlide;
        slider.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });
    } else {
        currentSlide = maxSlider + 1;
        let offset = slideW * currentSlide;
        slider.forEach((i) => {
            i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        });
        currentSlide--;
        offset = slideW * currentSlide;
        setTimeout(() => {
           slider.forEach((i) => {
            i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        });
        }, 0);
    }   
}

// button element click event
next.addEventListener("click", () => {
    moveNext();
});

prev.addEventListener("click", () => {
    movePrev();
})



// slider loop start 
// let loop = setInterval(() => {
//     moveNext();
// }, 3000);

//pause when hover
// slide.addEventListener("mouseover", () => {
//     clearInterval(loopInterval);
// });


//browser size 
window.addEventListener('resize', () => {slideW = slide.clientWidth});

//mobile swipe 
slide.addEventListener('touchStart', (e) => {
    startPoint = e.touches[0].pageX;
});
slide.addEventListener('touchEnd', (e) => {
    endPoint = e.changedTouches[0].pageX;
    if (startPoint < endPoint){
        movePrev();
    } else if (startPoint > endPoint) {
        moveNext();
    }
})