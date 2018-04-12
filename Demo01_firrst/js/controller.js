angular.module('app',[]).controller('PhoneListCtrl',function ($scope) {
    $scope.phones = [
        {
            "name":"Nexus S",
            "snippet":"Fast just got faster with Nexus S."},
         {
            "name":"Motorola XOOM with Wi-Fi",
            "snippet":"The next, Next Generation tablet."},
         {
            "name":"MOTOROLA XOOM",
            "snippet":"The fist time I use controller."}
    ];
    $scope.test="test";
})
.controller("BookStore", function($scope)
     { 
        $scope.items = [
            {ISBN:"5674789", Name: "Asp.Net MVC", Price: 560, Quantity: 20},
            {ISBN:"4352134",Name: "AngularJS", Price: 450, Quantity: 25},
            {ISBN:"2460932",Name: "Javascript", Price: 180, Quantity: 15}
        ];
})
.directive('sayHello', function(){
    return{
        restrict:'E',
        template:'<div>Hello AngularJS</div>'
    };
})
.directive('sayHelloNew',function(){
return {
     restrict : 'E',
template : '<div>hello，<b ng-transclude></b>！</div>',
     replace : true,
      transclude : true
};
})