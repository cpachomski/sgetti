require.config({
    baseUrl: '/js/app',
    paths: {
        "jquery": "../lib/jquery.min",
        "underscore": "../lib/underscore.min",
        "backbone": "../lib/backbone.min",
        "text": "../lib/text",
    },

    shim: {
        underscore:{
          exports: "_"
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'backbone'
        }
    },

    waitSeconds: 0
});



'use strict';

require([
  'jquery',
  'underscore',
  'backbone',
  'text',
], function(){

    


    require(['app'], function(require){

    });


});
