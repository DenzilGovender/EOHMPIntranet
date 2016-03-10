﻿(function () {
    'use strict';

    function AdmimRecruitmentCreateController($location, $scope, $firebaseObject, $firebaseArray) {
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
        }

    }

    angular.module('EOHIntranet').controller('AdmimRecruitmentCreateController', AdmimRecruitmentCreateController);
    AdmimRecruitmentCreateController.$inject = ['$location', '$scope', '$firebaseObject', '$firebaseArray'];
})();
