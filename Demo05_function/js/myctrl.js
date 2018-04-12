angular.module("app",[])
.controller("MyCtrl",function($scope) {
  $scope.msg="";
  $scope.errormsg="";
  $scope.user={uname:'',pwd:''};
  $scope.reverse=function(){
     return $scope.msg.split("").reverse().join("");
  }
  $scope.login=function() {
      if($scope.user.uname=="admin" && $scope.user.pwd=="123"){
          alert("login success!");
      }else{
          $scope.errormsg="uname or pwd is ivaild~";
      }
  }
})