
document.addEventListener('DOMContentLoaded', function() {     
     
     const buttons = document.querySelectorAll('.map-buttons');
     const maps = document.querySelectorAll('.maps');

     const menuBtn = document.querySelector('.menu-btn');
     const menuDiv = document.querySelector('.menu-div');
     const menuItem = document.querySelectorAll('.menu-items');
     const htmlDoc = document.documentElement;


     const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
               console.log(entry)
               if (entry.isIntersecting) {
                    entry.target.classList.add('show');
               }
          });
     });

     const hiddenElements = document.querySelectorAll('.aos-el-left');
     const hiddenElementsTop = document.querySelectorAll('.aos-el-top');
     const hiddenElementsBottom = document.querySelectorAll('.aos-el-bottom');
     
     hiddenElements.forEach((el) => observer.observe(el));
     hiddenElementsTop.forEach((el) => observer.observe(el));
     hiddenElementsBottom.forEach((el) => observer.observe(el));


     let isNavVisible = false;

     menuBtn.addEventListener('click', () => {
          if (isNavVisible) {
               menuDiv.classList.remove("visible");
               htmlDoc.classList.remove("scroll-lock");
               setTimeout(() => {
                    menuDiv.classList.remove("show-menu");
                    menuBtn.classList.remove('x-cross');
               }, 100);
          } else {
               menuDiv.classList.add("show-menu");
               htmlDoc.classList.add("scroll-lock");
               setTimeout(() => {
                    menuDiv.classList.add("visible");
                    menuBtn.classList.add('x-cross');
               }, 100);
          }
          isNavVisible = !isNavVisible;
     });

     menuItem.forEach(function(element) {
          element.addEventListener('click', function() {
               if (isNavVisible) {
                    menuDiv.classList.remove("visible");
                    htmlDoc.classList.remove("scroll-lock");
                    setTimeout(() => {
                         menuDiv.classList.remove("show-menu");
                         menuBtn.classList.remove('x-cross');
                    }, 100);
               }
               isNavVisible = !isNavVisible;

          });
     });


     const swiper_1 = new Swiper('.review-swiper', {
          loop: true,
          spaceBetween: 100,
          slidesPerView: 2,
          pagination: {
               el: '.swiper-pagination',
               clickable: true,
          },
     });

     const swiper_1_mobile = new Swiper('.review-swiper-mobile', {
          loop: true,
          spaceBetween: 100,
          pagination: {
               el: '.swiper-pagination',
               clickable: true,
          },
     });

     const swiper_2 = new Swiper('.certificate-swiper', {
          loop: true,
          spaceBetween: 100,
          slidesPerView: 3,
          pagination: {
               el: '.swiper-pagination-1',
               clickable: true,
          },
          autoplay: {
               delay: 2500,
               disableOnInteraction: false,
          },
     });
     
     const swiper_2_mobile = new Swiper('.swiper-mobile-2', {
          loop: true,
          spaceBetween: 100,
          pagination: {
               el: '.swiper-pagination-1',
               clickable: true,
          },
          autoplay: {
               delay: 2500,
               disableOnInteraction: false,
          },
     });

     buttons.forEach(function(button, index) {
          button.addEventListener("click", function() {
            maps.forEach(function(map) {
              map.style.display = "none";
            });
            maps[index].style.display = "block";
          });
     });
});