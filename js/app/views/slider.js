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

		console.log('next')
		var $next = $(this.$active.next());
		this.$active.removeClass('active');
		$next.addClass('active');
		this.$active = $next;
		this.offset += this.$active.width() + 6;
		this.$el.css("right", this.offset ).bind(this);


		if( this.$active.prev()){
			console.log('this is the first')
		}
	
	},

	prev: function(){
		console.log('prev')
	},

});



	return SliderView;


 });