'use strict';

    angular
        .module('sbAdminApp')
        .factory('AdvertisingService', AdvertisingService);

    AdvertisingService.$inject = ['$http'];
    function AdvertisingService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.Add = Add;
        //service.Delete = Delete;
        service.Update = Update;

        return service;

        function GetAll() {
            return $http.get('/api/ad').then(handleSuccess, handleError('Error getting all advertisings'));
        }
        
        function Add(advertiser, image, url) {
            var body = {
                        "ad":{  "advertiser": advertiser,
                                "image": image,
                                "url": url  }
            };
            
            return $http.post('/api/advertises', body).then(handleSuccess, handleError('Error adding advertising'));
        }
                            
        function Update(advertiser, image, url) {
            var body = {
                    "advertiser": advertiser,
                    "image": image,
                    "url": url,
            };
            return $http.put('/api/ad', body).then(handleSuccess, handleError('Error updating advertising'));
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