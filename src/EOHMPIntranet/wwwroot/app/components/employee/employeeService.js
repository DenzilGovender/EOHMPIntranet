(function () {
    'use strict';



    function EmployeeService($http) {

        self.employeeDetail = {};
        self.employeeTitles = [{ TitleName: 'Developer' }, { TitleName: 'HR' }, { TitleName: 'UX' }, { TitleName: 'Project Manager' }]

        this.getEmployeeDetails = function (employee) {
            self.employeeDetail = employee;
        }
        this.getEmployee = function () {
            return self.employeeDetail;
        }

        this.getEmployeeTitle = function () {
            return self.employeeTitles;
        }

    }

    angular.module('EOHIntranet').service('EmployeeService', EmployeeService);
    EmployeeService.$inject = ['$http'];
})();