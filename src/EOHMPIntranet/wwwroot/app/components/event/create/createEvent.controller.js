(function () {
    'use strict';



    function CreateEventController($location, $firebaseArray, $mdToast) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Create Event';
        var ref = new Firebase("https://eoh-intranet.firebaseio.com/Event");
        vm.minDate = new Date();

        vm.save = function (event)
        {
            var AddEvent = $firebaseArray(ref);
            var date = event.date;
            event.date = event.date.toString();
            event.comments = [];
            AddEvent.$add(event);
            $mdToast.show(
                          $mdToast.simple()
                          .textContent('Event is saved successfully!')
                          .hideDelay(3000));
            $location.path('/Events');
        }

        vm.cancel = function () {
            $location.path('/Events');
        }
    }

    angular.module('EOHIntranet').controller('CreateEventController', CreateEventController);
    CreateEventController.$inject = ['$location', '$firebaseArray', '$mdToast'];

})();
