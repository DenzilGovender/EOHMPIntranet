(function () {
    'use strict';



    function RecruitmentService($http, $q,  $sessionStorage) {
        var self = this;
        self.currentRecruitment = {};
       
        this.assignCurrentRecruitment = function(recruitment)
        {
            self.currentRecruitment = recruitment;
        }

        this.getCurrentRecruitment = function () {
          return  self.currentRecruitment;
        }


       
    }

    angular.module('EOHIntranet').service('RecruitmentService', RecruitmentService);
    RecruitmentService.$inject = ['$http', '$q', '$sessionStorage'];
})();
