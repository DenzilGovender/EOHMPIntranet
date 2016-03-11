(function () {
    'use strict';

    function ProjectDetailController($location, $scope, $firebaseObject, $firebaseArray, ProjectService, modal) {
        var vm = this;
        vm.title = 'projectDetailController';
        var ref = new Firebase("https://flickering-torch-5362.firebaseio.com/Project");
        vm.project = ProjectService.currentProject;
        vm.ProjectFullName = vm.project.projectName + ' - ' + vm.project.customer;

        vm.newMember = function () {
            var templateUrl = '/app/components/project/project.addMember.html';
            modal.show(templateUrl, 'ProjectAddMemberController');
        }

    }

    angular.module('EOHIntranet').controller('ProjectDetailController', ProjectDetailController);
    ProjectDetailController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'ProjectService', 'modal'];
})();
