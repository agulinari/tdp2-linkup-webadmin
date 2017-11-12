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
        service.GetBanDetail = GetBanDetail;

        return service;

        function GetActiveUsers(fromDate, toDate) {
            return $http.get('/api/reports/activeusers?from='+fromDate+'&to='+toDate).then(handleSuccess, handleError('Error getting all abuse'));
        }

        function GetAbuses(fromDate, toDate) {
            return $http.get('/api/reports/abuses?from='+fromDate+'&to='+toDate).then(handleSuccess, handleError('Error getting open abuses'));
        }

        function GetBannedUsers() {
            return $http.get('/api/reports/bannedusers').then(handleSuccess, handleError('Error getting open abuses'));
        }

        function GetBanDetail(isActive){
             return $http.get('/api/reports/bandetail?isActive='+isActive).then(handleSuccess, handleError('Error getting ban detail')); 
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
