(function () {
    'use strict';

    function AdmimRecruitmentCreateController($location, $scope, $firebaseObject, $firebaseArray, alertDialogService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'indexController';
        var ref = new Firebase("https://eoh-intranet.firebaseio.com/Recruitment");
        vm.recruitment = {};
        //ref.push({ name: 'Denzil' });
        ////vm.Users.$add({ name: 'Denzil' });

        $scope.listOfUsers = $firebaseArray(ref.child('Users'));

        //$scope.navigateTo = function (url) {
        //    $location.path(url);
        //}

        $scope.create = function(recruitment)
        {
            var AddRecruitment = $firebaseArray(ref);
            recruitment.openDate = recruitment.openDate.toString();
            recruitment.closeDate = recruitment.closeDate.toString();
            AddRecruitment.$add(recruitment);

            alertDialogService.setHeaderAndMessage("Alert", "Successfully added a new job position ");
            //alertDialogService.setPath('/viewBeneficiaries');
            var templateUrl = '/app/common/alert/infoDialog.template.html';
            modal.show(templateUrl, 'alertDialogController');
        }

    }

    angular.module('EOHIntranet').controller('AdmimRecruitmentCreateController', AdmimRecruitmentCreateController);
    AdmimRecruitmentCreateController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray', 'alertDialogService'];
})();
