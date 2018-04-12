(function () {
    var localBooksService = function () {
        var _books = [{
                ID: 1,
                BookName: "4 Test Books",
                AuthorName: "5 Test Author",
                ISBN: "5 TEST"
            },
            {
                ID: 2,
                BookName: "5 Test Books",
                AuthorName: "4 Test Author",
                ISBN: "1 TEST"
            },
            {
                ID: 3,
                BookName: "1 Test Books",
                AuthorName: "3 Test Author",
                ISBN: "2 TEST"
            },
            {
                ID: 4,
                BookName: "2 Test Books",
                AuthorName: "2 Test Author",
                ISBN: "4 TEST"
            },
            {
                ID: 5,
                BookName: "3 Test Books",
                AuthorName: "1 Test Author",
                ISBN: "3 TEST"
            }
        ];

        var nextIdForBook = _books.length + 1;

        var _addBook = function (book) {
            book.ID = nextIdForBook;
            nextIdForBook += 1;
            _book.push(book);
        };

        var _updateBook = function (book) {
            for (var i = 0; i < _books.length; ++i) {
                if (_books[i].ID == book.ID) {
                    _books[i] = book;
                }
            }
        };

        return {
            books: _books,
            addBook: _addBook,
            upateBook: _updateBook
        }

    }

    angular.module('myAngularApplication').factory('localBooksService', [localBooksService]);
}());