(function () {
    'use strict';

    function RecruitmentDetailController($location, $scope, $firebaseObject, $firebaseArray, RecruitmentService, alertDialogService, modal) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'indexController';
        var ref = new Firebase("https://eoh-intranet.firebaseio.com");
        vm.recruitment = {};
        //ref.push({ name: 'Denzil' });
        ////vm.Users.$add({ name: 'Denzil' });

        vm.recruitment = RecruitmentService.getCurrentRecruitment();
        vm.recruitment.openDate = new Date(vm.recruitment.openDate);
        vm.recruitment.closeDate = new Date(vm.recruitment.closeDate);

        //$scope.navigateTo = function (url) {
        //    $location.path(url);
        //}
        $scope.back = function()
        {
            $location.path('/ViewRecruitment');
        }

        $scope.applyPosition = function () {
            alertDialogService.setHeaderAndMessage("Information", "You have successfully applied for this position");
            alertDialogService.setPath('/ViewRecruitment');
            var templateUrl = '/app/alert/infoDialog.template.html';
            modal.show(templateUrl, 'alertDialogController');
        }

    }

    angular.module('EOHIntranet').controller('RecruitmentDetailController', RecruitmentDetailController);
    RecruitmentDetailController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'RecruitmentService', 'alertDialogService', 'modal'];
})();
