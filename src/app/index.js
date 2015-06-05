'use strict';

import MainCtrl from './main/main.controller';
import AppCtrl from '../app/app/app.controller';
import WordPress from '../app/services/wordpress/wordpress.service';
import NavbarCtrl from '../app/components/navbar/navbar.controller';
import SearchCtrl from '../app/components/search/search.controller';
import InterestedCtrl from '../app/interested/interested.controller';

angular.module('toolkit', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.select2', 'LocalStorageModule', 'angulartics', 'angulartics.google.analytics'])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('SearchCtrl', SearchCtrl)
  .controller('InterestedCtrl', InterestedCtrl)
  .controller('AppCtrl', AppCtrl)
  .service('WordPressProvider', WordPress)

  .config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('toolkit');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('app', {
        url: '/app/:id',
        templateUrl: 'app/app/app.html',
        controller: 'AppCtrl'
      })
      .state('explore', {
        url: '/explore/:category',
        templateUrl: 'app/explore/explore.html',
        controller: 'ExploreCtrl'
      })
      .state('request', {
        url: '/request/:term',
        templateUrl: 'app/request/request.html',
        controller: 'RequestCtrl'
      })
      .state('create', {
        url: '/create',
        templateUrl: 'app/create/create.html',
        controller: 'CreateCtrl'
      })
      .state('interested', {
        url: '/interested',
        templateUrl: 'app/interested/interested.html',
        controller: 'InterestedCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;