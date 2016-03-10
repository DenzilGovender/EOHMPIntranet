(function () {
    'use strict';

    function EventService($http) {
        var self = this;
        self.event = undefined;

        self.assignSelectedEvent = function (event) {
            self.event = event;
        }

        self.getSelectedEvent = function () {
           return self.event;
        }

        return self;

    }

    angular.module('EOHIntranet').service('EventService', EventService);
    EventService.$inject = ['$http'];
})();