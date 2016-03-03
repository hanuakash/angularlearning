using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webapi.Models
{
    public class User
    {
        public int empno { get; set; }
        public string email { get; set; }
        public string alias { get; set; }
        public string location { get; set; }
        public string password { get; set; }
    }
}