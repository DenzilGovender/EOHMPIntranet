(function () {
    'use strict';

    function ViewEmployeeController($location, $scope, $firebaseObject, $firebaseArray, EmployeeService, modal, $rootScope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = '';
        $scope.title = 'User Profile';
        $scope.employee = {};
        $scope.profileImage = $rootScope.profileImage;

        init();

        function init() {
            EmployeeService.employeeDetail;
            $scope.employee = EmployeeService.getEmployee();
        }
         
        $scope.closeModal = function () {
            modal.hide();
        };

        $scope.chat = function () {
            modal.hide();
            $location.path('/chat');
            
        }
       

       


    }

    angular.module('EOHIntranet').controller('ViewEmployeeController', ViewEmployeeController);
    ViewEmployeeController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'EmployeeService', 'modal', '$rootScope'];
})();
