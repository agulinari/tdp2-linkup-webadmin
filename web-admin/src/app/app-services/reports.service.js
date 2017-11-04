 'use strict';

    angular
        .module('sbAdminApp')
        .factory('ReportsService', ReportsService);

    ReportsService.$inject = ['$http'];
    function ReportsService($http) {
        var service = {};

        service.GetActiveUsers = GetActiveUsers;
        service.GetAbuses = GetAbuses;
        service.GetBannedUsers = GetBannedUsers;

        return service;

        function GetActiveUsers(fromDate, toDate) {
            return $http.get('/api/reports/activeusers?from='+fromDate+'&to='+toDate).then(handleSuccess, handleError('Error getting all abuse'));
        }

        function GetAbuses(fromDate, toDate) {
            return $http.get('/api/reports/abuses?from='+fromDate+'&to='+toDate).then(handleSuccess, handleError('Error getting open abuses'));
        }

        function GetBannedUsers(fromDate, toDate, abuseType) {
            return $http.get('/api/reports/bannedusers?from='+fromDate+'&to='+toDate+'&abuse='+abuseType).then(handleSuccess, handleError('Error getting open abuses'));
        }
                
        // private functions

        function handleSuccess(res) {
            res.data.success = true;
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }
