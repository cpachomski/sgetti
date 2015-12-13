define([
  'jquery',
  'underscore',
  'backbone',
  ], function($, _, Backbone){




var SliderView = Backbone.View.extend({
	initialize: function(opts){
		this.opts = opts || {};

		console.log(opts);
		//bind slider functionality to control arrows
		$('.left').on('click', function(){
			this.prev();

		}.bind(this));
		$('.right').on('click', function(){
			this.next();
			console.log('right')
		}.bind(this));

		this.$el = $(this.el);
		this.$mapContainer = $('#results-section');
		this.$active = $('.result-tab.active');
		this.$activeDetailsContainer = $('.result-details-slider');

		this.firstLocation = this.opts.locations[0];


		this.slidesCount = $('.result-tab').length;
		this.offset = 0;


	},

	next: function(){
		this.offset += this.$active.width() + 12;
		this.goTo(this.offset, this.$active.next());
		this.arrowCheck(this.$active);
	},

	prev: function(){
		this.offset -= this.$active.width() + 12;
		this.goTo(this.offset, this.$active.prev());
		this.arrowCheck(this.$active);
	},

	goTo: function(offset, nextActive){
		var $next = nextActive;
		this.$active.removeClass('active');
		this.$active = $next;
		this.$el.css("right", offset);
		$next.addClass('active');
		this.arrowCheck(this.$active);

		this.activeId = this.$active.data().sgettiid,
		this.activeOffsetTop = $('[data-sgettiid=' + this.activeId + '].result-details').offset().top - this.$mapContainer.offset().top;
		console.log(this.activeOffsetTop);
		this.scrollDetails(this.activeOffsetTop);

	},

	scrollDetails: function(offset){

		this.$activeDetailsContainer.scrollTop(offset);
		console.log(this.$activeDetailsContainer, " container");
		console.log(offset, " offset");


	},

	arrowCheck: function(activeEl){
		var moreRight = activeEl.next().next().next().next().next().hasClass('result-tab'),
				moreLeft = activeEl.prev().hasClass('result-tab');

		if(!moreRight){
			$('.right').hide();
		}else{
			$('.right').show();
		}
		if(moreLeft){
			$('.left').removeClass('hidden');
		} else {
			$('.left').addClass('hidden');
		}
	},




});



	return SliderView;


 });