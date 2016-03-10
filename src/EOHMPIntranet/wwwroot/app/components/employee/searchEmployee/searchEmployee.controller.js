(function () {
    'use strict';

    function SearchEmployeeController($location, $scope, $firebaseObject, $firebaseArray, ViewEmployeeController) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = '';
        vm.employee = {}; 
        var ref = new Firebase("https://flickering-torch-5362.firebaseio.com/User");
         
        

        $scope.listOfEmployees = $firebaseArray(ref.child('employee'));

        vm.SearchEmployee = function () {

        }

        vm.viewEmployeeDetails = function (employee) {
            ViewEmployeeController.getEmployeeDetails(employee);
            $location.path('')
        }

    }

    angular.module('EOHIntranet').controller('SearchEmployeeController', SearchEmployeeController);
    SearchEmployeeController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'ViewEmployeeController'];
})();
