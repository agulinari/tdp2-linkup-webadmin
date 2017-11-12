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
    'smart-table',
    'flow',
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
              ]
            })
          }
        }
      })
      .state('dashboard.profile',{
        url:'/profile',
        controller: 'ProfilesController',
        templateUrl:'profile/profiles.view.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
                'profile/profiles.controller.js',
                'app-services/profile.service.js'
              ]
            })
          }
        }
      })
       .state('dashboard.profiledetail', {
            url: '/profile/:fbid',
            templateUrl: 'profile/profile.view.html',
            controller: 'ProfileController',
            resolve: {
            loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
                'profile/profile.controller.js',
                'app-services/profile.service.js',
                'app-services/abuse.service.js'
              ]
            })
          }
        }
        })
        .state('dashboard.advertising', {
            url: '/',
            templateUrl: 'advertising/advertising-form.view.html',
            controller: 'AdvertFormController',
            resolve: {
            loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
                'advertising/advertising-form.controller.js',
                'app-services/flash.service.js',
                'app-services/advertising.service.js'  
              ]
            })
          }
        }
        })
        .state('dashboard.userreport', {
            url: '/reports/activeusers',
            templateUrl: 'reports/user-report.view.html',
            controller: 'ActiveUsersReportController',
            resolve: {
              loadMyFiles:function($ocLazyLoad) {
               return $ocLazyLoad.load({
                  name:'chart.js',
                  files:[
                    'bower_components/angular-chart.js/dist/angular-chart.min.js',
                    'bower_components/angular-chart.js/dist/angular-chart.css'
                  ]
                }),
                $ocLazyLoad.load({
                  name:'sbAdminApp',
                  files:[
                    'reports/user-report.controller.js',
                    'app-services/reports.service.js'                   
                  ]
                })
              }
            }
        
        })
        .state('dashboard.abusereport', {
            url: '/reports/abuses',
            templateUrl: 'reports/abuse-report.view.html',
            controller: 'AbuseReportController',
            resolve: {
              loadMyFiles:function($ocLazyLoad) {
               return $ocLazyLoad.load({
                  name:'chart.js',
                  files:[
                    'bower_components/angular-chart.js/dist/angular-chart.min.js',
                    'bower_components/angular-chart.js/dist/angular-chart.css'
                  ]
                }),
                $ocLazyLoad.load({
                  name:'sbAdminApp',
                  files:[
                    'reports/abuse-report.controller.js',
                    'app-services/reports.service.js'                   
                  ]
                })
              }
            }
        })
        .state('dashboard.abusereport.pie', {
            url: '/reports/abuses/pie',
            templateUrl: 'reports/pie.view.html',
            controller: 'PieController',
            resolve: {
              loadMyFiles:function($ocLazyLoad) {
               return $ocLazyLoad.load({
                  name:'chart.js',
                  files:[
                    'bower_components/angular-chart.js/dist/angular-chart.min.js',
                    'bower_components/angular-chart.js/dist/angular-chart.css'
                  ]
                }),
                $ocLazyLoad.load({
                  name:'sbAdminApp',
                  files:[
                    'reports/pie.controller.js',
                    'app-services/reports.service.js'                   
                  ]
                })
              }
            }
        })
        .state('dashboard.abusereport.piedetail', {
            url: '/reports/abuses/piedetail',
            templateUrl: 'reports/pie-detail.view.html',
            controller: 'PieDetailController',
            resolve: {
              loadMyFiles:function($ocLazyLoad) {
               return $ocLazyLoad.load({
                  name:'chart.js',
                  files:[
                    'bower_components/angular-chart.js/dist/angular-chart.min.js',
                    'bower_components/angular-chart.js/dist/angular-chart.css'
                  ]
                }),
                $ocLazyLoad.load({
                  name:'sbAdminApp',
                  files:[
                    'reports/pie-detail.controller.js',
                    'app-services/reports.service.js'                   
                  ]
                })
              }
            }
        })
         .state('dashboard.banreport', {
            url: '/reports/abuses',
            templateUrl: 'reports/ban-report.view.html',
            controller: 'BanReportController',
            resolve: {
              loadMyFiles:function($ocLazyLoad) {
               return $ocLazyLoad.load({
                  name:'chart.js',
                  files:[
                    'bower_components/angular-chart.js/dist/angular-chart.min.js',
                    'bower_components/angular-chart.js/dist/angular-chart.css'
                  ]
                }),
                $ocLazyLoad.load({
                  name:'sbAdminApp',
                  files:[
                    'reports/ban-report.controller.js',
                    'app-services/reports.service.js'                   
                  ]
                })
              }
            }
        })
        .state('dashboard.banreport.pie', {
            url: '/reports/abuses/banpie',
            templateUrl: 'reports/banpie.view.html',
            controller: 'BanPieController',
            resolve: {
              loadMyFiles:function($ocLazyLoad) {
               return $ocLazyLoad.load({
                  name:'chart.js',
                  files:[
                    'bower_components/angular-chart.js/dist/angular-chart.min.js',
                    'bower_components/angular-chart.js/dist/angular-chart.css'
                  ]
                }),
                $ocLazyLoad.load({
                  name:'sbAdminApp',
                  files:[
                    'reports/banpie.controller.js',
                    'app-services/reports.service.js'                   
                  ]
                })
              }
            }
        })
        .state('dashboard.banreport.piedetail', {
            url: '/reports/abuses/banpiedetail',
            templateUrl: 'reports/banpie-detail.view.html',
            controller: 'BanPieDetailController',
            resolve: {
              loadMyFiles:function($ocLazyLoad) {
               return $ocLazyLoad.load({
                  name:'chart.js',
                  files:[
                    'bower_components/angular-chart.js/dist/angular-chart.min.js',
                    'bower_components/angular-chart.js/dist/angular-chart.css'
                  ]
                }),
                $ocLazyLoad.load({
                  name:'sbAdminApp',
                  files:[
                    'reports/banpie-detail.controller.js',
                    'app-services/reports.service.js'                   
                  ]
                })
              }
            }
        })
  }])
    .config(['flowFactoryProvider', function (flowFactoryProvider) {
      flowFactoryProvider.defaults = {
        target: 'upload.php',
        permanentErrors: [404, 500, 501],
        maxChunkRetries: 1,
        chunkRetryInterval: 5000,
        simultaneousUploads: 4
      };
      flowFactoryProvider.on('catchAll', function (event) {
        console.log('catchAll', arguments);
      });
      // Can be used with different implementations of Flow.js
      // flowFactoryProvider.factory = fustyFlowFactory;
    }]);


    
