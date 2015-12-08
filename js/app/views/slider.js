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

		this.offset = 0;

	},

	next: function(){
		console.log(this.$active);
		var that = this;
		var $next = $(this.$active.next());
		that.offset += this.$active.width() + 11;
		this.$active.removeClass('active');
		this.$active = $next;
		$next.addClass('active');

		this.$el.css("right", that.offset );
		if( this.$active.prev().length > 1){
			console.log('this is not the first')
		}

		var moreRight = this.$active.next().next().next().next().next().hasClass('result-tab')

		if( !moreRight ){
			$('.right').hide();
		}
		var moreLeft = this.$active.prev().hasClass('result-tab');
		console.log(moreLeft);
		if(moreLeft){
			$('.left').removeClass('hidden');
		} else{
			$('.left').addClass('hidden');
		}


	
	},

	prev: function(){
		console.log('prev')
	},

});



	return SliderView;


 });