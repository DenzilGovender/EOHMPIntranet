(function () {
    'use strict';



    function ListEventController($location, $sessionStorage, $firebaseObject, $firebaseArray, EventService, $mdToast, modal) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Events';
        vm.events = [];
        

        var ref = new Firebase("https://eoh-intranet.firebaseio.com");

        init();

        function init() {
            $firebaseArray(ref.child('Event')).$loaded().then(function (reponse) {
                vm.events = reponse;
                for (var i = 0; i < vm.events.length; i++) {
                    vm.events[i].date = new Date(vm.events[i].date);
                }
                if ($sessionStorage.userType == 'admin') {
                    vm.isAdmin = true;
                } else {
                    vm.isAdmin = false;
                }
            });
        }

        vm.createEvent = function () {
            var templateUrl = '/app/components/event/create/createEvent.html';
            modal.show(templateUrl, 'CreateEventController');
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
    ListEventController.$inject = ['$location', '$sessionStorage', '$firebaseObject', '$firebaseArray', 'EventService', '$mdToast', 'modal'];
})();
