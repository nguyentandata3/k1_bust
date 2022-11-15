function WeekSlider() {
	this.offset = null;
	this.activeSlidePosition = 0;
	this.interval = 5000; //set up this slider interval
	this.setUp();
	this.flowSlide();
}

WeekSlider.prototype.setUp = function () {
	this.slide_item = document.getElementsByClassName("slider_item");
	this.slide_week = document.getElementsByClassName("slider_week_text");

	this.slide_item[this.activeSlidePosition].classList.add('active_slide');
};


WeekSlider.prototype.flowSlide = function () {
	if (this.activeSlidePosition == this.slide_item.length) {
		this.activeSlidePosition = 0;
	}
	for (var i = 0; i < this.slide_item.length; i++) {
		this.slide_item[i].classList.remove('active_slide');
		this.slide_week[i].classList.remove('active_week');

	}
	this.slide_item[this.activeSlidePosition].classList.add('active_slide');
	this.slide_week[this.activeSlidePosition].classList.add('active_week');
	setTimeout(this.flowSlide.bind(this), this.interval);
	this.activeSlidePosition++;
};
