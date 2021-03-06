/**
 * Application router  (Marionette style)
 *
 * Backbone routers are used for routing your applications URL’s when using hash tags(#)
 *
 * @see http://backbonetutorials.com/what-is-a-router/
 * @see https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.approuter.md
 */
define([
    'backboneMarionette',
    'controller'
], function (Marionette, Controller) {

    'use strict';

    var AppRouter = Marionette.AppRouter.extend({
        /**
         * The routes hash maps URLs with parameters to functions
         * on your router, similar to the View's events hash.
         *
         * @see https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.approuter.md
         * @see controller.js
         */
        appRoutes:{
            '.*':'actionIndex', // #/index
            '/':'actionIndex', // #/index
            'error/:number':'actionError', // #/error/number

            // paths not found
            '*path':'actionNotFound'

        }
    });

    return new AppRouter({controller:Controller});
});
