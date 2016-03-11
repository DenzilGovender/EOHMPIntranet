(function () {
    'use strict';



    function CreateEventController($location, $firebaseArray, $mdToast, $scope, modal) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Create Event';
        var ref = new Firebase("https://eoh-intranet.firebaseio.com/Event");
        $scope.minDate = new Date();

        $scope.closeModal = function () {
            modal.hide();
        };

        $scope.save = function (event)
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
            modal.hide();
        }     
    }

    angular.module('EOHIntranet').controller('CreateEventController', CreateEventController);
    CreateEventController.$inject = ['$location', '$firebaseArray', '$mdToast', '$scope', 'modal'];

})();
