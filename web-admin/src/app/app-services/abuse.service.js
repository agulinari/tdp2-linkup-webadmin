 'use strict';

    angular
        .module('sbAdminApp')
        .factory('AbuseService', AbuseService);

    AbuseService.$inject = ['$http'];
    function AbuseService($http) {
        var service = {};

        service.GetAll = GetAll;

        return service;

        function GetAll() {
            return $http.get('localhost:3000/AbuseReport').then(handleSuccess, handleError('Error getting all abuse'));
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
