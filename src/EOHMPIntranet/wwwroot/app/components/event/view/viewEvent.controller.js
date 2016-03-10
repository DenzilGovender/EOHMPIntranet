(function () {
    'use strict';

    function ViewEventController($location, $scope, $firebaseObject, EventService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'View Event';
        var ref = new Firebase("https://flickering-torch-5362.firebaseio.com/Event");

        init();

        function init() {
            vm.event = EventService.getSelectedEvent();
        }

        vm.addEventComment = function (comment) {
            vm.event.comments

            vm.event.comments.$add({
                text: comment
            });
        }
    }
})();
