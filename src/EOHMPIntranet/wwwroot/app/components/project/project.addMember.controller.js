(function () {
    'use strict';

    function ProjectAddMemberController($location, $scope, $firebaseObject, $firebaseArray, modal) {
        var vm = this;
        vm.title = 'projectAddMemberController';
        var pendingSearch, cancelSearch = angular.noop;
        var cachedQuery, lastSearch;
        $scope.employees = [];
        $scope.filterSelected = true;

        var ref = new Firebase("https://eoh-intranet.firebaseio.com");
        $firebaseArray(ref.child('Employee')).$loaded().then(function (reponse) {
            for (var i = 0; i < reponse.length; i++) {
                reponse[i].image = 'http://lorempixel.com/50/50/people?' + i;
                $scope.employees = reponse;
            }

        });

        $scope.closeModal = function () {
            modal.hide();
        };


        $scope.querySearch = function (criteria) {
            cachedQuery = cachedQuery || criteria;
            return cachedQuery ? $scope.employees.filter(createFilterFor(cachedQuery)) : [];
        }
    }

    angular.module('EOHIntranet').controller('ProjectAddMemberController', ProjectAddMemberController);
    ProjectAddMemberController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'modal'];
})();
