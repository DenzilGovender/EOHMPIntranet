(function () {
    'use strict';

    function ProjectViewController($location, $scope, $firebaseObject, $firebaseArray) {
        var vm = this;
        vm.title = 'projectViewController';
        var ref = new Firebase("https://eoh-intranet.firebaseio.com");
        vm.project = {};

        vm.projects = $firebaseArray(ref.child('Project'));
    }

    angular.module('EOHIntranet').controller('ProjectViewController', ProjectViewController);
    ProjectViewController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray'];
})();