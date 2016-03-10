(function () {
    'use strict';

    function ViewEmployeeController($location, $scope, $firebaseObject, $firebaseArray) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = '';
        vm.employee = {};
        var ref = new Firebase("https://flickering-torch-5362.firebaseio.com/User");



        $scope.listOfEmployees = $firebaseArray(ref.child('employee'));

        vm.SearchEmployee = function () {

        }

        vm.viewEmployeeDetails = function (employee) {

        }

    }

    angular.module('EOHIntranet').controller('ViewEmployeeController', ViewEmployeeController);
    ViewEmployeeController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray'];
})();
