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
          })
            .when('/ViewEmployee', {
                controller: 'ViewEmployeeController',
                templateUrl: viewBase + '/employee/viewEmployee/viewEmployee.html',
                controllerAs: 'vm'
            })
                        .when('/SearchEmployee', {
                            controller: 'SearchEmployeeController',
                            templateUrl: viewBase + '/searchEmployee/searchEmployee.html',
                            controllerAs: 'vm'
                        })

                                    .when('/CreateEmployee', {
                                        controller: 'EmployeeCreateController',
                                        templateUrl: viewBase + '/searchEmployee/createEmployee/employeeCreate.html',
                                        controllerAs: 'vm'
                                    })

            .when('/CreateEvent', {
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