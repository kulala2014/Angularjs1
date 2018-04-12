(function () {
    myModule = angular.module('myAngularApplication', ['ngRoute']);
    myModule.config(['$routeProvider', function ($routeProvider) {
                $routeProvider
                    .when(
                        "/home", {
                            templateUrl: "./template/home.html",
                            controller: "homeController"
                        }
                    )
                    .when(
                        "/about", {
                            templateUrl: "./template/about.html",
                            controller: "aboutController"
                        }
                    )
                    .when(
                        "/contact", {
                            templateUrl: "./template/contact.html",
                            controller: "contactController"
                        }
                    );
            }
            ]);
}());