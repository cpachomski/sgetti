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
		}.bind(this));

		this.$el = $(this.el);
		console.log(this.$el);
		this.$active = $('.result-tab.active');
		this.offset = 0;

	},

	next: function(){
		var that = this;
		console.log('next')
		var $next = $(this.$active.next());
		this.$active.removeClass('active');
		$next.addClass('active');
		this.$active = $next;
		that.offset += this.$active.width() + 5;

		this.$el.css("right", that.offset );


		if( this.$active.prev()){
			console.log('this is not the first')

		}

		var moreRight = this.$active.next().next().next().next().next().hasClass('result-tab')
		var moreLeft = this.$active.prev().hasClass('result-tab');


	
	},

	prev: function(){
		console.log('prev')
	},

});



	return SliderView;


 });