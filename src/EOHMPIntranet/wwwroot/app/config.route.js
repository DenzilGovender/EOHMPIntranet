(function () {
    'use strict';
    var routeProvider = function ($routeProvider, $locationProvider) {

        var viewBase = '/app/components/';

        $routeProvider.when('/index', {
            controller: 'IndexController',
            templateUrl: 'index.html',
            controllerAs: 'vm'            
        })

        .when('/dashboard', {
            controller: 'dashboardController',
            templateUrl: viewBase + '/dashboard/dashboard.html',
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
                            templateUrl: viewBase + '/employee/searchEmployee/searchEmployee.html',
                            controllerAs: 'vm'
                        })

                                    .when('/CreateEmployee', {
                                        controller: 'EmployeeCreateController',
                                        templateUrl: viewBase + '/employee/createEmployee/createEmployee.html',
                                        controllerAs: 'vm'
                                    })

             .when('/ViewRecruitment', {
                 controller: 'RecruitmentViewController',
                 templateUrl: viewBase + '/recruitment/viewRecruitment.html',
                 controllerAs: 'vm'
             })

             .when('/RecruitmentDetail', {
                 controller: 'RecruitmentDetailController',
                 templateUrl: viewBase + '/recruitment/recruitment.detail.html',
                 controllerAs: 'vm'
             })

             .when('/login', {
                 controller: 'LoginController',
                 templateUrl: viewBase + '/login/login.html',
                 controllerAs: 'vm'
             })

            .when('/Employee', {
                          controller: 'AdmimRecruitmentCreateController',
                          templateUrl: viewBase + '/recruitment/adminRecruitmentCreate.html',
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

          .when('/CreateProject', {
              controller: 'ProjectCreateController',
              templateUrl: viewBase + '/project/project.create.html',
              controllerAs: 'vm'
        })

        .when('/ProjectsView', {
              controller: 'ProjectViewController',
              templateUrl: viewBase + '/project/project.view.html',
              controllerAs: 'vm'
        })

        .when('/ProjectDetail', {
              controller: 'ProjectDetailController',
              templateUrl: viewBase + '/project/project.detail.html',
              controllerAs: 'vm'
          }).when('/ProjectAddMember', {
              controller: 'ProjectAddMemberController',
              templateUrl: viewBase + '/project/project.addMember.html',
              controllerAs: 'vm'
          }).when('/chat', {
              controller: 'ChatController',
                templateUrl: viewBase + '/employee/chat/chat.html',
                controllerAs: 'vm'
            }).otherwise({ redirectTo: '/' });
    }

    angular.module('EOHIntranet').config(['$routeProvider', '$locationProvider', routeProvider]);
    routeProvider.$inject = ['$routeProvider', '$locationProvider'];   
   
})();