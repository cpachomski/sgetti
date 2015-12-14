define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/result-details.html'
  ], function($, _, Backbone, ResultDetailsTemplate ){




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

		this.showDetails(this.firstLocation);

		this.offset = 0;


	},

	next: function(){
		this.offset += parseInt(this.$active.width() + 11);
		this.goTo(this.offset, this.$active.next());
		this.arrowCheck(this.$active);
	},

	prev: function(){
		this.offset -= parseInt(this.$active.width() + 11);
		this.goTo(this.offset, this.$active.prev());
		this.arrowCheck(this.$active);
	},

	goTo: function(offset, nextActive){
		var $next = nextActive;
		this.$active.removeClass('active');
		this.$active = $next;
		console.log(offset)
		this.$el.css("right", offset);
		this.activeId = this.$active.data().sgettiid;

		//find current store by factual_id
		_.each(this.opts.locations, function(location){

			if( location.factual_id === this.activeId  ){
				console.log('This is ' + location.factual_id );
				this.showDetails(location);
				this.opts.map.panTo({lat: location.latitude, lng: location.longitude});
			}

		}.bind(this));


		$next.addClass('active');
		this.arrowCheck(this.$active);



	},

	showDetails: function(location){
		console.log('doin it again');
		this.resultDetails = _.template(ResultDetailsTemplate, {variable: 'data'})({'location': location});

		//append new details to dom
		$('.result-details-slider').html(this.resultDetails);

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