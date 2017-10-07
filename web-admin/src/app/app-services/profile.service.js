
    'use strict';

    angular
        .module('sbAdminApp')
        .factory('ProfileService', ProfileService);

    ProfileService.$inject = ['$http'];
    function ProfileService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;

        return service;

        function GetAll() {
            return $http.get('/api/profiles').then(handleSuccess, handleError('Error getting all profiles'));
        }

        function GetById(id) {
            return $http.get('/api/profiles/' + id).then(handleSuccess, handleError('Error getting profile by id'));
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
