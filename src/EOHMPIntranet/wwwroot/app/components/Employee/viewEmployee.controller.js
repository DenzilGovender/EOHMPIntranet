(function () {
    'use strict';

    function ViewEmployeeController($location, $scope, $firebaseObject, $firebaseArray) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = '';
        //var ref = new Firebase("https://flickering-torch-5362.firebaseio.com/User");
        //ref.push({ name: 'Denzil' });
        ////vm.Users.$add({ name: 'Denzil' }); 

        //$scope.listOfUsers = $firebaseArray(ref.child('Users'));

        //$scope.navigateTo = function (url) {
        //    $location.path(url);
        //}

    }

    angular.module('EOHIntranet').controller('ViewEmployeeController', ViewEmployeeController);
    ViewEmployeeController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray'];
})();
