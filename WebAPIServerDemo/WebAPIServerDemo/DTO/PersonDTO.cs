using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebAPIServerDemo.DTO
{
    public class PersonDTO
    {
        [Key]
        public int Id { get; set; }
        public string UserName { get; set; }
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Range(1, 100)]
        public int Age { get; set; }
        [DataType(DataType.DateTime)]
        public string RegisterDate { get; set; }
        public string Address { get; set; }
    }

    public class Book
    {
        public int Id { get; set; }
        public string BookName { get; set; }
        public string AuthorName { get; set; }
        public string ISBN { get; set; }
    }
}