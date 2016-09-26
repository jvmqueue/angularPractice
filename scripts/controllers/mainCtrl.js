angular.module('siteVerizon').controller('mainCtrl', ['$scope', function($scope){
    'use strict';
        $scope.blnItemActive = [];
        let _fnc = {
            resetMenus:function(){
                for(let i = 0, len = $scope.blnItemActive.length; i < len; i++){
                    $scope.blnItemActive[i] = false;
                }
            },
            listenerNavMenu:function($event){
                _fnc.resetMenus();
                let target = $event.target;
                let intDataIndex = parseInt($event.target.dataset.index);
                $scope.blnItemActive[intDataIndex] = true;
            } // End _fnc.navMenu

        }; // End _fnc
        $scope.listenerNavMenu = _fnc.listenerNavMenu; 



}]);