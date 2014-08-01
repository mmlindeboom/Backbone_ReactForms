require.config({
    deps: ["main"],
    paths: {
        jsx:"../bower_components/require-jsx/jsx",
        JSXTransformer: '../bower_components/react/JSXTransformer',
        "react": "../bower_components/react/react-with-addons",
        jquery: "../bower_components/jquery/dist/jquery",
        lodash: "../bower_components/lodash/dist/lodash.compat",
        underscore: "../bower_components/underscore/underscore",
        backbone: "../bower_components/backbone/backbone",
        text: "../bower_components/text/text",
       'react-forms': '../bower_components/react-forms/react-forms'
    },
    shim: {
        backbone: {
            deps: ["lodash", "underscore", "jquery"],
            exports: "Backbone"
        },
        'react-forms': {
            deps: ["react"],
            exports: "ReactForms"
        }
    }
});
 
require(['app', 'jsx!router'], function(app, Router) {
    "use strict";

  app.router = new Router();
  app.run();
});