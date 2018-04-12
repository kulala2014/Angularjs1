angular.module('app',[])
.controller('FirstCtrl',function($scope){
    $scope.msg="Hello World~";
})
.controller('NextCtrl', function($scope){
    $scope.msg="Hello Angular~~~~~~";
});