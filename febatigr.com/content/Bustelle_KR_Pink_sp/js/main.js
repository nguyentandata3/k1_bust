var slider_exist;
var slider;
$(document).ready(function(){
  
  	 $('.toform').on('click', function(e){
        e.preventDefault();
        $("html, body").animate({
           scrollTop: $('form').offset().top - 36
                }, 1000);
        return false;
    });

	$('.calculator').on('click', function(e) {
		e.preventDefault();
		var cc = document.getElementById('cc').value;
		var cvs = document.getElementById('cvs').value;
		var cvh = document.getElementById('cvh').value;
		if(cc === '' || cvs === '' || cvh === '') {
			alert('Vui lòng nhập đủ thông tin để tính toán')
		}
	})
  
	slider_exist = false;
	new WeekSlider();
	var clock = $('.clock').FlipClock(7852, {
		countdown: true
	});
	$('.get_result').click(function () {
		var fields = document.getElementsByClassName("calculator_input");
		var submit = true;
		for (var i = 0; i < fields.length; i++) {
			if (fields[i].value == '') {
				submit = false;
			}
		}
		if (!submit) {
			$('.calculator_title').addClass('calc_result_hide');
			$('.error_msg').removeClass('calc_result_hide').addClass('calc_result_show');
		}
		if (submit) {
			$('.error_msg').removeClass('calc_result_show').addClass('calc_result_hide');
			$('.calc_result_wrapper').removeClass('calc_result_hide').addClass('calc_result_show');
		}
		return false;
	});
	if ($(window).width() < 992) {
		adjustReviewsBySelf();
		if (!slider_exist) {
			slider = $('.reviews').bxSlider({
				mode: 'fade',
				minSlides: 1,
				maxSlides: 1,
				slideWidth: 300,
				slideMargin: 0,
				startSlide: 0,
				adaptiveHeight: true,
				auto: true,
				autoStart: true,
				pause: 6000,
				touchEnabled: true,
				infiniteLoop: true
			});
			slider_exist = true;
		}
	}
	else {
		adjustReviewsByMAX();
		if (slider_exist) {
			slider.destroySlider();
			slider_exist = false;
		}
	}
	$(window).resize(function () {

		if ($(window).width() >= 992){
			if (slider_exist) {
					slider.destroySlider();
					slider_exist = false;
			}
			adjustReviewsByMAX();
		}

		if ($(window).width() < 992){
			adjustReviewsBySelf();
			if (!slider_exist) {
				slider = $('.reviews').bxSlider({
					mode: 'fade',
					minSlides: 1,
					maxSlides: 1,
					slideWidth: 300,
					slideMargin: 0,
					startSlide: 0,
					adaptiveHeight: true,
					auto: true,
					autoStart: true,
					pause: 6000,
					touchEnabled: true,
					infiniteLoop: true
				});
				slider_exist = true;
			}
		}
	});
})
function adjustReviewsByMAX() {
	resetReviews();
	this.slide_item = document.getElementsByClassName("section17_reviews_item");
	var maxH = 0;
	var max_id = 0;
	for (var i = 0; i < this.slide_item.length; i++) {
		var elem = getComputedStyle(this.slide_item[i]);
		var numH = elem.height.slice(0, -2);
		if (numH > maxH) {
			maxH = numH;
			max_id = i;
		}
	}
	for (i = 0; i < this.slide_item.length; i++) {
		this.slide_item[i].style.width = 440 + 'px';
		this.slide_item[i].style.height = maxH + 'px';
	}
}
function adjustReviewsBySelf() {
	resetReviews();
	this.slide_item = document.getElementsByClassName("section17_reviews_item");
	for (var i = 0; i < this.slide_item.length; i++) {
		this.slide_item[i].style.width = 300 + 'px';
		this.slide_item[i].style.height = 'inherit';
	}
}
function resetReviews() {
	this.slide_item = document.getElementsByClassName("section17_reviews_item");
	for (var i = 0; i < this.slide_item.length; i++) {
		this.slide_item[i].style.height = '';
		var elem = getComputedStyle(this.slide_item[i]);
		var numH = elem.height.slice(0, -2);
		this.slide_item[i].style.height = numH + 'px';
	}
}

function date_for_this_land(d, like_eu) {
	var now = new Date();
	now.setDate(now.getDate() + d + 1);

  	var dayNum = '';
  	if (now.getDate() < 10) {
      	dayNum = '0';
    }
  	dayNum += now.getDate();

  	var monthNum = '';
	if (now.getMonth() + 1 < 10) {
      	monthNum = '0';
    }
  	monthNum += now.getMonth() + 1;

  	if (like_eu) {
		document.write(dayNum + "." + monthNum);
    } else {
		document.write(monthNum + "." + dayNum);
    }

}
