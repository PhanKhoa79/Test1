//đếm ngược giờ sale
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "11/09/",
        sale = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > sale) {
      sale = dayMonth + nextYear;
    }
    
    const countDown = new Date(sale).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = String(Math.floor(distance / day)).padStart(2, "0");
          document.getElementById("hours").innerText = String(Math.floor((distance % day) / hour)).padStart(2, "0");
          document.getElementById("minutes").innerText = String(Math.floor((distance % hour) / minute)).padStart(2, "0");
          document.getElementById("seconds").innerText = String(Math.floor((distance % minute) / second)).padStart(2, "0");
  
          if (distance < 0) {
            
            clearInterval(x);
          }

        }, 1000)
    }());


//show dropdown language
document.addEventListener('DOMContentLoaded', function () {
  var dropdownToggle = document.querySelector('.dropdown-toggle');
  var dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownToggle.addEventListener('click', function () {
    if(dropdownMenu.style.display = 'none') {
      dropdownMenu.style.display = 'block';
    }
  });
});

//ẩn dropdown language
document.addEventListener('click', function (e) {
  var dropdownToggle = document.querySelector('.dropdown-toggle');
  var dropdownMenu = document.querySelector('.dropdown-menu');
  if(!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = 'none';
  }
});

//click item trong dropdown
document.addEventListener('DOMContentLoaded', function() {
  var dropdownItems = document.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(function(item) {
    var selectedLanguage = item.getAttribute('data-language');

    if(selectedLanguage == 'vi') {
      item.classList.add('active');
    }

    item.addEventListener('click', function(e) {

      dropdownItems.forEach(function(i) {
        i.classList.remove('active');
      });

      if(selectedLanguage) {
          item.classList.add('active');
      }

      e.preventDefault();
    });
  });
});


//show slide banner
let slideIndex = 1;
showSlides(slideIndex);

setInterval(function() {
  plusSlides(1);
  autoSwapCarouselIndicators();
}, 5000);

function plusSlides(n) {
  showSlides(slideIndex += n);
  swapCarouselIndicators('carousel-indicator');
  autoSwapCarouselIndicators(); 
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

//swap carousel indicators
function swapCarouselIndicators(className) {
    var carouselIndicators = document.querySelectorAll(`.${className}`);
    carouselIndicators.forEach(function(indicator) { 
      indicator.addEventListener('click', function(e) { 
          carouselIndicators.forEach(function(i) {
              i.classList.remove('active');
          });
          indicator.classList.add('active');
      });
    });
}
document.addEventListener("DOMContentLoaded", function() {
  swapCarouselIndicators('slick-item');
});

//auto swap carousel indicators 
function autoSwapCarouselIndicators() {
  var carouselIndicators = document.querySelectorAll('.carousel-indicator');
  carouselIndicators.forEach(function(indicator, index) { 
      indicator.classList.toggle('active', index === slideIndex - 1);
  });
}

//back to top
let mybutton = document.getElementById("back-top");
window.onscroll = function() {
  if(document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

function topFunction() {
  document.documentElement.scrollTop = 0;
}

//show qr
function showQr() {
  let boxZalo = document.querySelector('.box-zalo');
  let qrZalo = document.querySelector('.modal-zalo');

  boxZalo.addEventListener('click', function() {
    if (qrZalo.style.display === 'block') {
      qrZalo.style.display = 'none';
    } else {
      qrZalo.style.display = 'block';
    }
  });
}

//carousel presentation
$(document).ready(function() {
  $('.filtering').slick({
    slidesToShow: 3,        
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.slick-dot .slick-item').on('click', function() {
    var index = $(this).index();
    $('.filtering').slick('slickGoTo', index);
  });
});


//open navbar collapse
let navbarToggle = document.querySelector('.navbar-toggle');
let navbarCollapse = document.querySelector('.navbar-collapse');
navbarToggle.addEventListener('click', function() {
    navbarCollapse.style.display = 'block';
});

//close navbar collapse
let navbarClose = document.querySelector('.navbar-collapse__btn-close');
navbarClose.addEventListener('click', function() {
  navbarCollapse.style.display = 'none';
});