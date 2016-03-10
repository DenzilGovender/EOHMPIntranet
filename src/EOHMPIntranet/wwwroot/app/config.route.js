(function () {
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
          }).when('/CreateProject', {
              controller: 'ProjectCreateController',
              templateUrl: viewBase + '/project/project.create.html',
              controllerAs: 'vm'
          }).when('/ProjectsView', {
              controller: 'ProjectViewController',
              templateUrl: viewBase + '/project/project.view.html',
              controllerAs: 'vm'
          }).otherwise({ redirectTo: '/' });
    }

    angular.module('EOHIntranet').config(['$routeProvider', '$locationProvider', routeProvider]);
    routeProvider.$inject = ['$routeProvider', '$locationProvider'];

})();