﻿(function () {
    'use strict';

    function ProjectViewController($location, $scope, $firebaseObject, $firebaseArray, ProjectService) {
        var vm = this;
        vm.title = 'projectViewController';
        var ref = new Firebase("https://eoh-intranet.firebaseio.com");
        vm.project = {};

        $firebaseArray(ref.child('Project')).$loaded().then(function (reponse) {
            vm.projects = reponse;
            for (var i = 0; i < reponse.length; i++) {
                vm.projects[i].openDate = Date.parse(vm.projects[i].openDate);
                vm.projects[i].closeDate = Date.parse(vm.projects[i].closeDate);
            }
        });

        vm.showSelectedProject = function (project) {
            ProjectService.assignCurrentRecruitment(project);
            $location.path('/ProjectDetail');
        }
    }

    angular.module('EOHIntranet').controller('ProjectViewController', ProjectViewController);
    ProjectViewController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'ProjectService'];
})();