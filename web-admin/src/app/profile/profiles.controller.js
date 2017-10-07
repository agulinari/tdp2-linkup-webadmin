'use strict';

    angular
        .module('sbAdminApp')
        .controller('ProfilesController', ProfilesController);

    ProfilesController.$inject = ['ProfileService', '$state', '$rootScope'];
    function ProfilesController(ProfileService, $state, $rootScope) {
        var vm = this;
        vm.error = false;
        
        vm.dataLoading = true;
        vm.rowCollection = [];
        ProfileService.GetAll().then(function (data) {
                if (data.success) {
                    vm.profiles = data.users;
                    vm.dataLoading = false;
                } else {
                    vm.error = true;
                    //Mostrar mensaje
                    vm.dataLoading = false;
                }
            });

        vm.itemsByPage=10;

        vm.translateGender = function(gender){
        	if (gender == 'male'){
        		return 'Masculino';
        	}else{
        		return 'Femenino';
        	}
        }
    }
