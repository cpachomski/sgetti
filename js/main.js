require.config({

    baseUrl: 'js/app',

    paths: {
        "jQuery": "../lib/jquery.min",
        "underscore": "../lib/underscore.min",
        "text": "../lib/text",
        "backbone": "../lib/backbone.min",
    },

    shim: {
        underscore:{
          exports: "_"
        },
        backbone: {
            deps: ['jQuery', 'underscore'],
            exports: 'backbone'
        }
    },

    waitSeconds: 0
});

require([
  'jQuery',
  'underscore',
  'backbone',
  'text',
], function(){
    require(['app'], function(){})
})
