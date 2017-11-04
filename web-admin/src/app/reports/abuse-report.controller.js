'use strict';

    angular
        .module('sbAdminApp')
        .controller('AbuseReportController', AbuseReportController);


    AbuseReportController.$inject = ['ReportsService','$state', '$scope'];
    function AbuseReportController(ReportsService, $state, $scope) {
        var vm = this;

        $state.go('dashboard.abusereport.pie');

    }

