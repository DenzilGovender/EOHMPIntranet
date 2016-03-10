(function () {
    'use strict';

    function EmployeeCreateController($location, $scope, $firebaseObject, $firebaseArray) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = '';
        vm.employee = {};
        var ref = new Firebase("https://flickering-torch-5362.firebaseio.com/Employee");



        vm.save = function (employee) {
            alert('asdfsadf');
            var AddEmployee = $firebaseArray(ref);
            AddEmployee.$add(employee);
                        $mdToast.show(
                          $mdToast.simple()
                          .textContent('Employee is created successfully!')
                          .hideDelay(3000));
                        $location.path('/ViewEmployee');
        }

    }

    angular.module('EOHIntranet').controller('EmployeeCreateController', EmployeeCreateController);
    EmployeeCreateController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray'];
})();
