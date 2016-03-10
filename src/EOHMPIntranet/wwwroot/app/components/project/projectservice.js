(function () {
    'use strict';

    function ProjectService($http, $q,  $sessionStorage) {
        var self = this;
        self.currentProject = {};

        this.assignCurrentRecruitment = function (project) {
            self.currentProject = project;
        }

        this.getCurrentProject = function () {
            return self.currentProject;
        }

    }

    angular.module('EOHIntranet').service('ProjectService', ProjectService);
    ProjectService.$inject = ['$http', '$q', '$sessionStorage'];
})();
