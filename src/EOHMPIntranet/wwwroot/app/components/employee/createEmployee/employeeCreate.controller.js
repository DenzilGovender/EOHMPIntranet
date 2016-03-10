(function () {
    'use strict';

    function EmployeeCreateController($location, $scope, $firebaseObject, $firebaseArray, $mdToast, EmployeeService) {
        /* jshint validthis:true */
        var vm = this; 
        
        vm.employee = {};
        vm.titles = [];
        
        var ref = new Firebase("https://flickering-torch-5362.firebaseio.com/Employee");
        
        $scope.selectedTitle = function (title) {
            vm.employee.title = title;
        }

        init();
         
        function init() {
            $scope.titles = EmployeeService.getEmployeeTitle();
        }
      
        $scope.saveEmployee = function (employee) {

            var AddEmployee = $firebaseArray(ref);
            AddEmployee.$add(employee);
                        $mdToast.show(
                          $mdToast.simple()
                          .textContent('Employee is created successfully!')
                          .hideDelay(3000));
                        $location.path('/SearchEmployee');
        }

    }

    angular.module('EOHIntranet').controller('EmployeeCreateController', EmployeeCreateController);
    EmployeeCreateController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', '$mdToast', 'EmployeeService'];
})();
