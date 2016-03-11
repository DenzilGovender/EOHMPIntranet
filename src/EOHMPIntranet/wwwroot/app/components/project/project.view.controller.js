(function () {
    'use strict';

    function ProjectViewController($location, $scope, $firebaseObject, $firebaseArray, ProjectService, modal) {
        var vm = this;
        vm.title = 'projectViewController';
        var ref = new Firebase("https://eoh-intranet.firebaseio.com");
        vm.project = {};

        $firebaseArray(ref.child('Project')).$loaded().then(function (reponse) {
            vm.projects = reponse;
            for (var i = 0; i < reponse.length; i++) {
                vm.projects[i].openDate =new Date(vm.projects[i].openDate);
                vm.projects[i].closeDate =new Date(vm.projects[i].closeDate);
            }
        });

        vm.showSelectedProject = function (project) {
            ProjectService.assignCurrentRecruitment(project);
            $location.path('/ProjectDetail');
        }

        vm.newProject = function () {
            var templateUrl = '/app/components/project/project.create.html';
            modal.show(templateUrl, 'ProjectCreateController');
        }
    }

    angular.module('EOHIntranet').controller('ProjectViewController', ProjectViewController);
    ProjectViewController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'ProjectService', 'modal'];
})();