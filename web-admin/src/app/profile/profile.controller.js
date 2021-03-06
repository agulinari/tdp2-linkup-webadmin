'use strict';

    angular
        .module('sbAdminApp')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['ProfileService','AbuseService', '$state', '$scope', '$stateParams', '$rootScope'];
    function ProfileController(ProfileService,AbuseService, $state, $scope, $stateParams, $rootScope) {
        var vm = this;
        vm.error = false;
        vm.age = null;
        vm.showLoader = true;
        vm.dataLoading = true;
        vm.avatarLoading = true;
        vm.buttonDisabled = false;

        ProfileService.GetById($stateParams.fbid).then(function (data) {
                if (data.success) {
                    vm.profile = data.user;
                    vm.age = getAge(data.user.birthday);
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
                    vm.avatarLoading = false;
                } else {
                    vm.error = true;
                    vm.avatarLoading = true;
                    //Mostrar mensaje
                }
        });

        ProfileService.GetImage($stateParams.fbid, 1).then(function (data) {
                if (data.success) {
                    vm.image = data.image.data;
                    vm.showLoader = false;
                } else {
                    vm.error = true;
                    vm.showLoader = false;
                    //Mostrar mensaje
                }
        });

        vm.activar = function (isActive){
            vm.buttonDisabled = true;
            
            ProfileService.Update($stateParams.fbid, isActive).then(function (data) {
                if (data.success) {
                    vm.profile = data.user;
                    vm.buttonDisabled = false;
                } else {
                    vm.error = true;
                    vm.buttonDisabled = false;
                    //Mostrar mensaje
                }
            });
            
            if(!isActive){ //Se cierran las denuncias del usuario que se esta desactivando
                AbuseService.Update($stateParams.fbid,null).then(function(data){
                   if(!data.success){
                       vm.error = true;
                       vm.buttonDisabled = false;
                   }
                });
            }
        }

        function getAge(dateString) {
                        var today = new Date();
                        var birthDate = new Date(dateString);
                        var age = today.getFullYear() - birthDate.getFullYear();
                        var m = today.getMonth() - birthDate.getMonth();
                        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                            age--;
                        }
                        return age;
                    }
    }
