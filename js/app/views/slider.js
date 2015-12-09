define([
  'jquery',
  'underscore',
  'backbone',
  ], function($, _, Backbone){




var SliderView = Backbone.View.extend({
	initialize: function(opts){
		this.opts = opts || {};

		//bind slider functionality to control arrows
		$('.left').on('click', function(){
			this.prev();
			
		}.bind(this));
		$('.right').on('click', function(){
			this.next();
			console.log('right')
		}.bind(this));

		this.$el = $(this.el);
		this.$active = $('.result-tab.active');
		this.slidesCount = $('.result-tab').length;
		this.offset = 0;


	},

	next: function(){

		var that = this;
		var $next = $(this.$active.next());
		that.offset += this.$active.width() + 11;
		this.$active.removeClass('active');
		this.$active = $next;
		$next.addClass('active');

		this.$el.css("right", that.offset );
		

		this.arrowCheck(this.$active);
	},

	prev: function(){
		
	},
	goTo: function(idx, activeEl){
		this.$active.removeClass('active');
		var $next = $(this.$active.next()),



	},
	arrowCheck: function(activeEl){
		var moreRight = activeEl.next().next().next().next().hasClass('result-tab'),
			moreLeft = activeEl.prev().hasClass('result-tab');

		if(!moreRight){
			$('.right').hide();
		}
		if(moreLeft){
			$('.left').removeClass('hidden');
		} else {
			$('.left').addClass('hidden');
		}
	}

});



	return SliderView;


 });