let picp1 = document.getElementById('picp1');
let picp2 = document.getElementById('picp2');
let picp4 = document.getElementById('picp4');
let oneday = document.getElementById('day');
let qp2 = document.getElementById('qoute2');

    window.addEventListener('scroll', function(){
      let value = window.scrollY;
      picp1.style.left = value * -0.25 + 'px';
      picp1.style.top = value * 0.25 + 'px';
      picp2.style.top = value * 0.35 + 'px';
      qp2.style.top = value * 0.3 + 'px';
      picp4.style.top = value * 0.33 - 900 + 'px';
    })


//----------------------------------------------------------------- page8scipt
let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      // dots[slideIndex-1].className += " active";
    }
// ----------------------------------------------------------------------
  function changepic1() {
    pic11.style.setProperty("background", "url('https://media.discordapp.net/attachments/956540505792073778/971797739723686019/unknown.png') no-repeat")
    pic11.style.setProperty("background-size", "contain")
  }
    function changepic2() {
      pic11.style.setProperty("background", "url('https://media.discordapp.net/attachments/956540505792073778/971797764444930158/unknown.png') no-repeat")
      pic11.style.setProperty("background-size", "contain")
    }
