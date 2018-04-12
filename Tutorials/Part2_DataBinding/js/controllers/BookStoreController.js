app.controller('BookStore', function($scope){
    $scope.content = "Angularjs";
    $scope.items =  [
        {ISBN:"5674789", Name: "Asp.Net MVC", Price: 560, Quantity: 20},
        {ISBN:"4352134",Name: "AngularJS", Price: 450, Quantity: 25},
        {ISBN:"2460932",Name: "Javascript", Price: 180, Quantity: 15}
    ];
    $scope.editing = false;

    $scope.totalPrice = function() {
        var total = 0;
        for(i=0;i<$scope.items.length;i++){
            total += $scope.items[i].Price*$scope.items[i].Quantity;
        }
        return total;
    }

    $scope.removeItem = function (index) {
        $scope.items.splice(index, 1);
    }

    $scope.editItem = function (index) {
        $scope.editing = $scope.items.indexOf(index);
    }

    $scope.saveField = function(index) {
        if($scope.editing !== false){
            $scope.editing=false;
        }
    }

    $scope.addItem = function(item) {
        $scope.items.push(item);
        $scope.item = {};
    }
}
)
.directive('sayHello', function(){
    return {
        restrict:'E',
        template:'<div>hello, <b ng-transclude></b>, {{cont}}</div>',
        replace:true,
        transclude:true,
        scope:{
            cont:'=speak'
        }
    };
});