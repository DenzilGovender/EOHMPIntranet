(function () {
    'use strict';

    function ProjectCreateController($location, $scope, $firebaseObject, $firebaseArray, modal) {
        var vm = this;
        vm.title = 'projectCreateController';
        var ref = new Firebase("https://eoh-intranet.firebaseio.com/Project");

        $scope.create = function (project) {
            var AddProject = $firebaseArray(ref);
            project.openDate = project.openDate.toString();
            project.closeDate = project.closeDate.toString();
            project.members = [];
            project.technologies = [];

            AddProject.$add(project);
            modal.hide();
        }

        $scope.closeModal = function () {
            modal.hide();
        };
    }

    angular.module('EOHIntranet').controller('ProjectCreateController', ProjectCreateController);
    ProjectCreateController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'modal'];
})();
