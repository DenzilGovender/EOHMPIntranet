(function () {
    'use strict';

    function ViewEmployeeController($location, $scope, $firebaseObject, $firebaseArray, EmployeeService, modal, $rootScope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = '';
        $scope.title = 'User Profile';
        $scope.employee = {};
        $rootScope.profileImage = 'assets/img/placeholder.png';

        init();

        function init() {
            EmployeeService.employeeDetail;
            $scope.employee = EmployeeService.getEmployee();
        }
         
        $scope.closeModal = function () {
            modal.hide();
        };

        $scope.ok = function () {
            modal.hide();
        };

        $scope.cancel = function () {
            modal.hide();
        };

        $scope.chat = function () {
            $scope.closeModal();
            $location.path('/chat');
            
        }
       

       


    }

    angular.module('EOHIntranet').controller('ViewEmployeeController', ViewEmployeeController);
    ViewEmployeeController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'EmployeeService', 'modal', '$rootScope'];
})();
