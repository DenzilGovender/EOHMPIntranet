(function () {
    'use strict';
    function alertDialogService($http, $q) {
        var self = this;
        self.path = [];
        self.header = undefined;
        self.message = undefined;
       

        this.getPath = function()
        {
            return this.path;
        }
        this.getMessage = function () {
            return this.message;
        }
        this.getHeader = function () {
            return this.header;
        }

        this.setPath = function(path)
        {
            this.path = path;
        }

        this.setHeaderAndMessage = function (header, message) {
            self.header = header;
            self.message = message;
        }

    }

    angular.module('GPOApp').service('alertDialogService', alertDialogService);
    alertDialogService.$inject = ['$http', '$q'];
})();