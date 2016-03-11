(function () {
    'use strict';

    function ProjectAddMemberController($location, $scope, $firebaseObject, $firebaseArray, modal, ProjectService) {
        var vm = this;
        vm.title = 'projectAddMemberController';
        var project = ProjectService.currentProject;
        var pendingSearch, cancelSearch = angular.noop;
        var cachedQuery, lastSearch;
        $scope.Allemployees = [];
        $scope.employees = [];
        $scope.filterSelected = true;

        var ref = new Firebase("https://eoh-intranet.firebaseio.com");
        $firebaseArray(ref.child('Employee')).$loaded().then(function (reponse) {
            for (var i = 0; i < reponse.length; i++) {
                reponse[i].image = 'http://lorempixel.com/50/50/people?' + i;
                reponse[i].fullname = reponse[i].firstname + ' ' + reponse[i].lastname;
            }
            $scope.Allemployees = reponse;
        });

        $scope.create = function () {
            var saveref = new Firebase("https://eoh-intranet.firebaseio.com/Project/" + project.$id);
            var oldProject = $firebaseObject(saveref);

            for (var i = 0; i < $scope.employees.length; i++) {
                delete $scope.employees[i]['fullname'];
                delete $scope.employees[i]['image'];
            }

            var members = project.members.concat($scope.employees);
            oldProject.members = members;
            oldProject.closeDate = project.closeDate.toString();
            oldProject.customer = project.customer;
            oldProject.description = project.description;
            oldProject.openDate = project.openDate.toString();
            oldProject.projectManager = project.projectManager;
            oldProject.projectName = project.projectName;
            oldProject.$save();
            modal.hide();
            $scope.employees = undefined;
        };

        $scope.closeModal = function () {
            modal.hide();
        };



        $scope.querySearch = function (criteria) {
            cachedQuery = cachedQuery || criteria;
            return cachedQuery ? $scope.Allemployees.filter($scope.createFilterFor(cachedQuery)) : [];
        }

        $scope.createFilterFor = function (query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(contact) {
                return true;
            };
        }
    }

    angular.module('EOHIntranet').controller('ProjectAddMemberController', ProjectAddMemberController);
    ProjectAddMemberController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'modal', 'ProjectService'];
})();
