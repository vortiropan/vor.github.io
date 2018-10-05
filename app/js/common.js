var wow = new WOW(
  {
    boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
    animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
    offset:       200,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
    mobile:       true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
    live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
    callback:     function(box) {
      // функция срабатывает каждый раз при старте анимации
      // аргумент box — элемент, для которого была запущена анимация
    },
    scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
  }
);
wow.init();

$(document).ready(function(){
	$('.header__title').addClass("wow bounceIn"); 
	$('.category').addClass("wow bounceInLeft"); 
	$('.item').addClass("wow bounceInLeft"); 
});


	$('.owl-carousel').owlCarousel({
	  loop: true,
	  nav: true,
	  responsiveClass: true,
	  responsive: {
	    0: {
	      items: 1
	    },
	    600: {
	      items: 1
	    },
	     745: {
	      items: 1
	    },
	    1000: {
	      items: 2
	    }
	  },
	  navText : ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
	  rewindNav : true
	})


// 	//Кнопка "Наверх"
	//Документация:
	// http:api.jquery.com/scrolltop/
	// http:api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
// 	//Аякс отправка форм
// 	//Документация: http://api.jquery.com/jquery.ajax/
	$(".form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $(".form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

// });
   
