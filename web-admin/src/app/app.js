'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'angular-loading-bar',
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });
	
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'home/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return  $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                }),
                $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[                    
                    'header/header.js',
                    'header/header-notification/header-notification.js',
                    'sidebar/sidebar.js',
                    'sidebar/sidebar-search/sidebar-search.js'
                    ]
                })
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                })
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
	.state('login', {
		  url: '/login',
		  controller: 'LoginController',
		  templateUrl: 'login/login.view.html',
		  resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                }),
			$ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
			  'app-services/authentication.service.js',
			  'app-services/flash.service.js',
			  'app-services/user.service.js',
			  'app-services/user.service.local-storage.js',
              'login/login.controller.js',    
              ]
            })
          }
        }
	  })
	  	.state('register', {
		  url: '/register',
		  controller: 'RegisterController',
		  templateUrl: 'register/register.view.html',
		  resolve: {
          loadMyFiles:function($ocLazyLoad) {
			return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
			  'app-services/flash.service.js',
			  'app-services/user.service.js',
			  'app-services/user.service.local-storage.js',
              'register/register.controller.js',    
              ]
            })
          }
        }
	  })
       .state('dashboard.home',{
        url:'/home',
        controller: 'HomeCtrl',
        templateUrl:'home/home.view.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'home/home.controller.js'
              /*'scripts/controllers/main.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js'*/
              ]
            })
          }
        }
      })
       .state('dashboard.abuse',{
        url:'/abuse',
        controller: 'AbuseController',
        templateUrl:'abuse/abuse.view.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
                'abuse/abuse.controller.js',
                'app-services/flash.service.js',
                'app-services/abuse.service.js'
              /*'scripts/controllers/main.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js'*/
              ]
            })
          }
        }
      })
      
  }]);

    
