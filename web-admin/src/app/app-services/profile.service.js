
    'use strict';

    angular
        .module('sbAdminApp')
        .factory('ProfileService', ProfileService);

    ProfileService.$inject = ['$http'];
    function ProfileService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetImage = GetImage;
        service.Update = Update;

        return service;

        function GetAll() {
            return $http.get('/api/profiles').then(handleSuccess, handleError('Error getting all profiles'));
        }

        function GetById(id) {
            return $http.get('/api/profiles/' + id).then(handleSuccess, handleError('Error getting profile by id'));
        }

        function GetImage(id, index){
            return $http.get('/api/profiles/image/' + id + '/' + index).then(handleSuccess, handleError('Error getting image profile by id'));
        }

        function Update(id, isActive) {
            var body = {
                "user": {
                    "fbid": id,
                    "control": {
                                "isActive": isActive
                            }
                    }
            };
            return $http.put('/api/profiles', body).then(handleSuccess, handleError('Error updating profile'));
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
