(function () {
    'use strict';

    function ViewEventController($location, $scope, $firebaseObject, EventService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'View Event';
        var ref;
       

        init();

        function init() {
            vm.event = EventService.getSelectedEvent();
            ref = new Firebase("https://flickering-torch-5362.firebaseio.com/Event/" + vm.event.$id);
            vm.comments = vm.event.comments;
        }

        vm.addEventComment = function (comment) {

            var oldEvent = $firebaseObject(ref);           
            vm.comments.push(comment);                
            oldEvent.comments = vm.comments;      
            var event = (vm.comments, vm.event);
            oldEvent.$id = event.$id;
            oldEvent.name = event.name;
            oldEvent.type = event.type;
            oldEvent.venue = event.venue;
            oldEvent.date = event.date;
            oldEvent.$save();
            vm.comment = undefined;
        }

        var buildEvent = function (comments, event) {
            return {
                comments: comments,
                $id: event.$id,
                name: event.name,
                type: event.type,
                venue: event.venue,
                date: event.date,              
            }
        }
    }
    angular.module('EOHIntranet').controller('ViewEventController', ViewEventController);
    ViewEventController.$inject = ['$location', '$scope', '$firebaseObject', 'EventService'];
})();
