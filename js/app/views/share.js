define([
	'jquery',
	'underscore',
	'backbone',

], function($, _, Backbone){

'use strict';

var ShareView = Backbone.View.extend({
	initialize: function(opts){
		this.opts = opts || {};
		console.log(opts);
		this.$el = $(this.el);
		console.log(this.el);
		console.log(this.$el);
		this.$mainSection = $('#main-section');
		this.$shareSection = $('#share-section');
		
		this.toggleShare();

	},

	toggleShare: function(){
		this.$el.find('.icon-reorder').on('click', function(){
			 console.log('hit it')
			 
			this.$el.toggleClass('active');
			this.$shareSection.toggleClass('active');
			this.$mainSection.toggleClass('active');
			console.log(this.$mainSection)
		}.bind(this));
	},

});


return ShareView;

});