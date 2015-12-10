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
		
		this.offset += this.$active.width() + 11;

		this.goTo(this.offset, this.$active.next());
		

		this.arrowCheck(this.$active);
	},

	prev: function(){
		this.offset -= this.$active.width() + 11;
		
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
	}

});



	return SliderView;


 });