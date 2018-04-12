using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPIServerDemo.DTO;

namespace WebAPIServerDemo.Controllers
{
    public class PersonController : ApiController
    {
        public IEnumerable<Book> Get()
        {
            // this list should be fetched from the DB
            // you can use Entity Framework (EF)
            // for best practice, do not use EF inside the controller.
            // Instead use EF inside a class that implements an interface

            List<Book> books = new List<Book>
            {
                new Book { Id = 1, BookName= "4 Test Books", AuthorName= "5 Test Author", ISBN="5 TEST" },
                new Book { Id = 2, BookName= "5 Test Books", AuthorName= "4 Test Author", ISBN= "1 TEST" },
                new Book { Id = 3, BookName= "1 Test Books", AuthorName="3 Test Author", ISBN="2 TEST" },
                new Book { Id = 4, BookName= "2 Test Books", AuthorName= "2 Test Author", ISBN= "4 TEST" },
                new Book { Id = 5, BookName= "3 Test Books", AuthorName= "1 Test Author", ISBN= "3 TEST" }
            };

            return books;
        }
    }
}
