(function () {
    'use strict';



    function ListEventController($location, $scope, $firebaseObject, $firebaseArray, EventService, $mdToast) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Events';
        vm.events = [];

        var ref = new Firebase("https://eoh-intranet.firebaseio.com");

        init();

        function init() {
            vm.events = $firebaseArray(ref.child('Event'));
        }

        vm.createEvent = function () {
            $location.path('/CreateEvent');
        }

        vm.back = function () {
            $location.path('/dashboard');
        }

        vm.delectEvent = function (event) {
            vm.events.$remove(event);
            $mdToast.show(
                         $mdToast.simple()
                         .textContent('Event is removed successfully!')
                         .hideDelay(3000));
        }

        vm.viewEvent = function (event) {
            EventService.assignSelectedEvent(event);
            $location.path('/ViewEvent');
        }
    }

    angular.module('EOHIntranet').controller('ListEventController', ListEventController);
    ListEventController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'EventService', '$mdToast'];
})();
