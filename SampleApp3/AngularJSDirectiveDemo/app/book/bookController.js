(function () {
    var booksController = function ($scope,$filter) {
        $scope.message = "Hello kulala from booksController";

        this.greeting = "This is a greeting message using controller as syntax";

        $scope.books = [];
        $scope.countries = [
            "India", 
            "Denmark",
            "USA",
            "Singapore",
            "Germany"
        ];
        $scope.orderField = "ID";
        $scope.allCapsMessage = $filter("uppercase") ($scope.message);
        $scope.conversionRate = $filter("number") (62.3, 5);

        $scope.fetchBooks = function () {
            $scope.books = [
               {ID: 1, BookName: "Test Books 1", AuthorName: "Test Author 1", ISBN: "Test1"},
               { ID: 2, BookName: "Test Books 2", AuthorName: "Test Author 2", ISBN: "TEST2" },
               { ID: 3, BookName: "Test Books 3", AuthorName: "Test Author 3", ISBN: "TEST3" },
               { ID: 4, BookName: "Test Books 4", AuthorName: "Test Author 4", ISBN: "TEST4" },
               { ID: 5, BookName: "Test Books 5", AuthorName: "Test Author 5", ISBN: "TEST5" },
               { ID: 6, BookName: "Test Books 6", AuthorName: "Test Author 6", ISBN: "TEST6" }  
            ];
        }
    }

    angular.module('myAngularApplication').controller('booksController', ["$scope", "$filter", booksController]);
}());