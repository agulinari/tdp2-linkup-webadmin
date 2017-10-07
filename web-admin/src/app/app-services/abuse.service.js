 'use strict';

    angular
        .module('sbAdminApp')
        .factory('AbuseService', AbuseService);

    AbuseService.$inject = ['$http'];
    function AbuseService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.Update = Update;

        return service;

        function GetAll() {
            return $http.get('/api/abuses').then(handleSuccess, handleError('Error getting all abuse'));
        }

        function Update(id, isOpen) {
            var body = {
                "abuseReport" : {
                    "_id" : id,
                    "isOpen" : isOpen  
                }       
            };
            return $http.put('/api/abuses', body).then(handleSuccess, handleError('Error updating user'));
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
