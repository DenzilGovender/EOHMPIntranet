﻿(function () {
    'use strict';

    function SearchEmployeeController($location, $scope, $firebaseObject, $firebaseArray, EmployeeService, $mdToast, modal) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = '';
        vm.employees = [];
        var ref = new Firebase("https://eoh-intranet.firebaseio.com");

        init();

        function init() {
            vm.employees = $firebaseArray(ref.child('Employee'));
        }

        vm.removeUser = function (user) {
            vm.employees.$remove(user)
            $mdToast.show(
             $mdToast.simple()
             .textContent('Employee has been disactivated successfully!')
             .hideDelay(3000));

        }

        $scope.createEmployee = function () {
            $location.path('/CreateEmployee')
        }

        $scope.viewEmployeeDetails = function (employee) {
            EmployeeService.getEmployeeDetails(employee);
            //scope.bop.bopSubCategoryCode = undefined;
            var templateUrl = '/app/components/employee/viewEmployee/viewEmployee.html';
            modal.show(templateUrl, 'ViewEmployeeController');
        }


        //$scope.viewEmployeeDetails = function (employee) {
        //    EmployeeService.getEmployeeDetails(employee);
        //    $location.path('/ViewEmployee')
        //}

    }

    angular.module('EOHIntranet').controller('SearchEmployeeController', SearchEmployeeController);
    SearchEmployeeController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'EmployeeService', '$mdToast', 'modal'];
})();
