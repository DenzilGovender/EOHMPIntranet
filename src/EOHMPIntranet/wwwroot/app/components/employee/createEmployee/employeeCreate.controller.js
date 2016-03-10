(function () {
    'use strict';

    function EmployeeCreateController($location, $scope, $firebaseObject, $firebaseArray) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = '';
        vm.employee = {};
        var ref = new Firebase("https://flickering-torch-5362.firebaseio.com/User");



        vm.save = function () {

        }

    }

    angular.module('EOHIntranet').controller('EmployeeCreateController', EmployeeCreateController);
    EmployeeCreateController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray'];
})();
