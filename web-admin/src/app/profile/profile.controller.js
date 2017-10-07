'use strict';

    angular
        .module('sbAdminApp')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['ProfileService', '$state', '$scope', '$stateParams', '$rootScope'];
    function ProfileController(ProfileService, $state, $scope, $stateParams, $rootScope) {
        var vm = this;
        vm.error = false;
        
        vm.dataLoading = true;
        ProfileService.GetById($stateParams.fbid).then(function (data) {
                if (data.success) {
                    vm.profile = data.user;
                    vm.dataLoading = false;
                } else {
                    vm.error = true;
                    //Mostrar mensaje
                    vm.dataLoading = false;
                }
        });

        ProfileService.GetImage($stateParams.fbid, 0).then(function (data) {
                if (data.success) {
                    vm.avatar = data.image.data;
                } else {
                    vm.error = true;
                    //Mostrar mensaje
                }
        });

        ProfileService.GetImage($stateParams.fbid, 1).then(function (data) {
                if (data.success) {
                    vm.image = data.image.data;
                    
                } else {
                    vm.error = true;
                    //Mostrar mensaje
                }
        });
    }
