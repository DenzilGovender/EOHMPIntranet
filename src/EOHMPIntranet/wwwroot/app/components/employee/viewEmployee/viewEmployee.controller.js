(function () {
    'use strict';

    function ViewEmployeeController($location, $scope, $firebaseObject, $firebaseArray, EmployeeService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = '';
        $scope.employee = {};
        

        //var ref = new Firebase("https://flickering-torch-5362.firebaseio.com/User");

        init();

        function init() {
            EmployeeService.employeeDetail;
            $scope.employee = EmployeeService.getEmployee();
        }
         
        $scope.chat = function (employee) {
            $location.path('/chat');
        }
       

       


    }

    angular.module('EOHIntranet').controller('ViewEmployeeController', ViewEmployeeController);
    ViewEmployeeController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'EmployeeService'];
})();
