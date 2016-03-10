(function () {
    'use strict';

    function ProjectViewController($location, $scope, $firebaseObject, $firebaseArray) {
        var vm = this;
        vm.title = 'projectViewController';
        var ref = new Firebase("https://flickering-torch-5362.firebaseio.com/Project");
    }

    angular.module('EOHIntranet').controller('ProjectViewController', ProjectViewController);
    ProjectViewController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray'];
})();