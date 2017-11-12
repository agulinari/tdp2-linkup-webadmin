'use strict';

    angular
        .module('sbAdminApp')
        .controller('BanReportController', BanReportController);


    BanReportController.$inject = ['ReportsService','$state', '$scope'];
    function BanReportController(ReportsService, $state, $scope) {
        var vm = this;

        $state.go('dashboard.banreport.pie');

    }
