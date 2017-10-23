'use strict';

    angular
        .module('sbAdminApp')
       .controller('AdvertFormController', AdvertFormController);

    AdvertFormController.$inject = ['AdvertisingService','$state', '$scope', '$stateParams', '$rootScope', 'FlashService'];
    function AdvertFormController(AdvertisingService,$state, $scope, $stateParams, $rootScope, FlashService) {
        var vm = this;
        vm.error = false;
        $scope.advert = null;

        $scope.processImage = function (flowFile){
        	//flow-file-added="!!{png:1,gif:1,jpg:1,jpeg:1}[$file.getExtension()]"

        	var files = ["png", "gif", "jpg", "jpeg"];
        	if (!files.includes(flowFile.getExtension())) return false;
	        
        	if (flowFile.size > 500000) return false;	

			var fileReader = new FileReader();
			    fileReader.onload = function (event) {
                    var strImage = event.target.result.split(',');
			        $scope.advert.image = (strImage.length>1)?strImage[1]:
                                          ((strImage.length==1)?strImage[0]:'');
			    };
			fileReader.readAsDataURL(flowFile.file);
			return true;
		}

		$scope.removeImage = function ($flow){
			$scope.advert.image = null;
			$flow.cancel();
		}
            
        $scope.submit = function() {
         
            var adDesc = $scope.advert.title;
            var adImage = $scope.advert.image;
            var adUrl = $scope.advert.url;                
                        
            AdvertisingService.Add(adDesc,adImage,adUrl).then(function (data) {
                if (data.success) {
                    FlashService.Success("Advertising added.");
                } else {
                    FlashService.Error(data.message);
                }
            });
                        
        }

        
    }
