define[
  'jQuery',
  'underscore',
  'backbone',
  'views/pageload',
  'views/search',
  'text!templates/search.html'
], function( $, _, Backbone, PageLoadView, SearchView, SearchTemplate ){

"use strict";




$( document ).ready(function(){

  var plv = new PageLoadView();
  var sv = new SearchView();

});

};



