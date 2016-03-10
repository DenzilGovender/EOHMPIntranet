(function () {
    'use strict';

    function ProjectCreateController($location, $scope, $firebaseObject, $firebaseArray) {
        var vm = this;
        vm.title = 'projectCreateController';
        var ref = new Firebase("https://flickering-torch-5362.firebaseio.com/Project");
    }

    angular.module('EOHIntranet').controller('ProjectCreateController', ProjectCreateController);
    ProjectCreateController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray'];
})();
