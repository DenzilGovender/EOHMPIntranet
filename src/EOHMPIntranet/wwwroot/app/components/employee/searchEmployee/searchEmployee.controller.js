(function () {
    'use strict';

    function SearchEmployeeController($location, $scope, $firebaseObject, $firebaseArray, EmployeeService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = '';
        vm.employees = []; 
        var ref = new Firebase("https://flickering-torch-5362.firebaseio.com");
         
        init();

        function init() {
            vm.employees = $firebaseArray(ref.child('Employee'));
        }

      
         
        $scope.viewEmployeeDetails = function (employee) {
            EmployeeService.getEmployeeDetails(employee);
            $location.path('/ViewEmployee')
        }

    }

    angular.module('EOHIntranet').controller('SearchEmployeeController', SearchEmployeeController);
    SearchEmployeeController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'EmployeeService'];
})();
