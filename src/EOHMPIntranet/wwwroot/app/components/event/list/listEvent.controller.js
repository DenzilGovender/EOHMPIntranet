(function () {
    'use strict';



    function ListEventController($location, $scope, $firebaseObject, $firebaseArray, EventService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Events';
        vm.events = [];

        var ref = new Firebase("https://flickering-torch-5362.firebaseio.com/Event");

        init();

        function init() {
            vm.events = $firebaseArray(ref.child('Events'));
        }

        vm.createEvent = function (event) {
            $location.path('/createEvent');
        }

        vm.back = function () {
            $location.path('/dashboard');
        }

        vm.viewEvent = function (event) {
            EventService.assignSelectedEvent(event);
            $location.path('/viewEvent');
        }
    }

    angular.module('EOHIntranet').controller('ListEventController', ListEventController);
    ListEventController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'EventService'];
})();
