(function () {
    'use strict';

    function ProjectDetailController($location, $scope, $firebaseObject, $firebaseArray, ProjectService) {
        var vm = this;
        vm.title = 'projectDetailController';
        var ref = new Firebase("https://flickering-torch-5362.firebaseio.com/Project");
        vm.project = ProjectService.currentProject;
    }

    angular.module('EOHIntranet').controller('ProjectDetailController', ProjectDetailController);
    ProjectDetailController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'ProjectService'];
})();
