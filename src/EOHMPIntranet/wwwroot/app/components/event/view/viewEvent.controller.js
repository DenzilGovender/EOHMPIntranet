(function () {
    'use strict';

    function ViewEventController($location, $sessionStorage, $firebaseObject, EventService, $scope, modal, $mdToast) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'View Event';
        var ref;       

        init();

        function init() {
            $scope.event = EventService.getSelectedEvent();
            ref = new Firebase("https://eoh-intranet.firebaseio.com/Event/" + $scope.event.$id);
           
        }

        $scope.rejectEvent = function ()
        {
              $mdToast.show(
                          $mdToast.simple()
                          .textContent('Event is rejected successfully!')
                          .hideDelay(3000));
                              modal.hide();
        }
        $scope.acceptEvent = function () {
             $mdToast.show(
                          $mdToast.simple()
                          .textContent('Event is accepted successfully!')
                          .hideDelay(3000));
                              modal.hide();
        }

        $scope.closeModal = function () {
            modal.hide();
        }

        $scope.addEventComment = function (comment) {
            comment = $sessionStorage.displayName + ": " + comment;
            var oldEvent = $firebaseObject(ref);
            $scope.comments = $scope.event.comments;
            if ($scope.comments == undefined) {
                $scope.comments =[];
            }
            $scope.comments.push(comment);
            oldEvent.comments = $scope.comments;
            var event = ($scope.comments, $scope.event);
            oldEvent.$id = event.$id;
            oldEvent.name = event.name;
            oldEvent.type = event.type;
            oldEvent.venue = event.venue;
            oldEvent.date = event.date;
            oldEvent.description = event.description;
            oldEvent.$save();
            $scope.comment = undefined;
        }

        var buildEvent = function (comments, event) {
            return {
                comments: comments,
                $id: event.$id,
                name: event.name,
                type: event.type,
                venue: event.venue,
                date: event.date,
                description: event.description,
            }
        }
    }
    angular.module('EOHIntranet').controller('ViewEventController', ViewEventController);
    ViewEventController.$inject = ['$location', '$sessionStorage', '$firebaseObject', 'EventService', '$scope', 'modal', '$mdToast'];
})();
