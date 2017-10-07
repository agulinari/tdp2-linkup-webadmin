'use strict';

    angular
        .module('sbAdminApp')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['ProfileService', '$state', '$rootScope'];
    function ProfileController(ProfileService, $state, $rootScope) {
        var vm = this;
        vm.error = false;
        
    }
