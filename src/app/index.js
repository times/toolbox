'use strict';

import MainCtrl from './main/main.controller';
import AppCtrl from '../app/app/app.controller';
import WordPress from '../app/services/wordpress/wordpress.service';
import NavbarCtrl from '../app/components/navbar/navbar.controller';
import SearchCtrl from '../app/components/search/search.controller';

angular.module('toolkit', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.select2', 'LocalStorageModule'])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('SearchCtrl', SearchCtrl)
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
      });

    $urlRouterProvider.otherwise('/');
  })
;