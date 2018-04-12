angular.module('app',[])
.value('realname', 'kulala')
.constant('http','www.baidu.com')
.factory('data',function(){
    return{
    msg:"Hello world~",
    resetMsg:function(){
        this.msg="Hello angular~";
    }}
})
.service('User',function(){
    this.firstname="Kobe";
    this.lastname="Branty";
    this.getName=function(){
        return this.firstname+ " " + this.lastname;
    }
})
.controller('MyCtrl',function ($scope,realname,http,data,User) {
    $scope.msg="Hello angular~~";
    $scope.realname=realname;
    $scope.http=http;
    $scope.data=data;
    data.resetMsg();
    $scope.uname=User.getName();
})