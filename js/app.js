// navbar scroll effect js 

window.addEventListener('load', function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos === 0) {
    document.getElementById("header").classList.add('fixed-top');
  } else {
    return
  }
  prevScrollpos = currentScrollPos;
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").classList.add('fixed-top');
  } else {
    document.getElementById("header").classList.remove('fixed-top');
  }
  prevScrollpos = currentScrollPos;
}


// navbar scroll effect js end here 



// auto typing js   ---------- 
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// auto typing js end here ------------------- 



// owl carousel js start here ------------------- 
$(document).ready(function () {
  $('.testimonial-slider').slick({
    centerMode: true,
    centerPadding: '28%',
    slidesToShow: 1,
    initialSlide: 1,
    infinite: true,
    loop: true,
    adaptiveHeight: true,
    prevArrow: '<span class="prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  // go to top button --------------- 
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll').addClass("d-flex");
    } else {
      $('#scroll').removeClass("d-flex");
    }
  });
  $('#scroll').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
    return false;
  });
   // go to top button --------------- 
});

// ------------ 

