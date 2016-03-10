﻿(function () {
    'use strict';
    var routeProvider = function ($routeProvider, $locationProvider) {

        var viewBase = '/app/components/';

        $routeProvider.when('/index', {
            controller: 'IndexController',
            templateUrl: 'index.html',
            controllerAs: 'vm'            
        })
          .when('/AdminRecruitment', {
              controller: 'AdmimRecruitmentCreateController',
              templateUrl: viewBase + '/recruitment/adminRecruitmentCreate.html',
              controllerAs: 'vm'
          })

             .when('/ViewRecruitment', {
                 controller: 'RecruitmentViewController',
                 templateUrl: viewBase + '/recruitment/viewRecruitment.html',
                 controllerAs: 'vm'
             })
            .when('/Employee', {
                          controller: 'AdmimRecruitmentCreateController',
                          templateUrl: viewBase + '/recruitment/adminRecruitmentCreate.html',
                          controllerAs: 'vm'
            }).when('/CreateEvent', {
                controller: 'CreateEventController',
                templateUrl: viewBase + '/event/create/createEvent.html',
                controllerAs: 'vm'
            })
            .when('/Events', {
                controller: 'ListEventController',
                templateUrl: viewBase + '/event/list/listEvent.html',
                controllerAs: 'vm'
            })
            .when('/ViewEvent', {
                controller: 'ViewEventController',
                templateUrl: viewBase + '/event/view/viewEvent.html',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });
    }

    angular.module('EOHIntranet').config(['$routeProvider', '$locationProvider', routeProvider]);
    routeProvider.$inject = ['$routeProvider', '$locationProvider'];   
   
})();