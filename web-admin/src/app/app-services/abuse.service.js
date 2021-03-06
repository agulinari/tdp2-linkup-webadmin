 'use strict';

    angular
        .module('sbAdminApp')
        .factory('AbuseService', AbuseService);

    AbuseService.$inject = ['$http'];
    function AbuseService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetOpen = GetOpen;
        service.GetClosed = GetClosed;
        service.Update = Update;

        return service;

        function GetAll() {
            return $http.get('/api/abuses').then(handleSuccess, handleError('Error getting all abuse'));
        }

        function GetOpen() {
            return $http.get('/api/abuses/open').then(handleSuccess, handleError('Error getting open abuses'));
        }

        function GetClosed() {
            return $http.get('/api/abuses/closed').then(handleSuccess, handleError('Error getting closed abuses'));
        }

        function Update(id, isOpen) {
            var body1 = { //Se actualiza un solo abuseReport
                "abuseReport" : {
                    "_id" : id,
                    "isOpen" : isOpen  
                }       
            };
            
            var body2 = {   //Se cierran los abuseReport de un usuario
                "abuseReport" : {
                    "idUser" : id
                }
            };
            
            var body = (isOpen!=undefined || isOpen!=null)?body1:body2;
            
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
