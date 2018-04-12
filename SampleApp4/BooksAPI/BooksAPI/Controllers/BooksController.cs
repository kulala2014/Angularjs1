using BooksAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BooksAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BooksController : ApiController
    {
        // GET api/values
        public IEnumerable<Book> Get()
        {
            return new List<Book>
            {
                 new Book{ ID= 1, BookName= "4 Test Books (remote)", AuthorName= "5 Test Author", ISBN= "5 TEST" },
                 new Book{ ID= 2, BookName= "5 Test Books (remote)", AuthorName= "4 Test Author", ISBN= "1 TEST" },
                new Book { ID= 3, BookName= "1 Test Books (remote)", AuthorName= "3 Test Author", ISBN= "2 TEST" },
                new Book { ID= 4, BookName= "2 Test Books (remote)", AuthorName= "2 Test Author", ISBN= "4 TEST" },
                new Book { ID= 5, BookName= "3 Test Books (remote)", AuthorName= "1 Test Author", ISBN= "3 TEST" }

            };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
