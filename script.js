// document.addEventListener('DOMContentLoaded', function() {
//     const navBar = document.querySelector('.navBar');
//     const list = document.querySelector('.toggleNavbar');
//     const close = document.querySelector('.closeNavbar');

//     function changeClass() {
//         navBar.className = 'navbar';
//         console.log("open")
//     }
//     function closeNavbar() {
//         // navBar.className = 'activeNavbar';
//         console.log("close")
//     }
//     list.addEventListener('click', changeClass);
//     close.addEventListener('click', closeNavbar);
// });
function showNavbar() {
    document.querySelector('.navBar').style.display = 'block';
    document.querySelector('.toggleNavbar').style.display = 'none';
}

function hideNavbar() {
    document.querySelector('.navBar').style.display = 'none';
    document.querySelector('.toggleNavbar').style.display = 'block';
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
        type: "progressbar",
        renderCustom: function (swiper, current, total) {
            return `<span class="pagination-text">${current} / ${total}</span>`;
          }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
   
  });


// const carousel = document.querySelector(".carousel");
// firstImg = document.querySelectorAll(".carousel .img")[0];
// arrowIcons = document.querySelectorAll(".wrapper i");


// let isDragStart = false, prevPgeX, prevScrollLeft;
// let fistImgWidth = firstImg.clientWidth + 40;
// arrowIcons.forEach(icon => {
//   icon.addEventListener("click", () => {
//     carousel.scrollLeft += icon.id == "left" ? -fistImgWidth : fistImgWidth; 
//   })
// });

// const dragStart = (e) => {
//   isDragStart = true;
//   prevPgeX = e.pageX;
//   prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//   if (!isDragStart) return;
//   e.preventDefault();
//   carousel.classList.add("dragging");
//   let positionDiff = e.pageX - prevPgeX;
//   carousel.scrollLeft = prevScrollLeft - positionDiff;
  
// }
// const dragStop = () => {
//   isDragStart = false;
//   carousel.classList.remove("dragging");

// }
// carousel.addEventListener("mousemove", dragging)
// carousel.addEventListener("mousedown", dragStart)
// carousel.addEventListener("mouseup",dragStop)

const carousel = document.querySelector(".carousel");
firstItem = document.querySelectorAll(".carousel .carousel-item")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstItemWidth = firstItem.clientWidth + 45;
arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstItemWidth : firstItemWidth; 
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
}
const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
}
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);
