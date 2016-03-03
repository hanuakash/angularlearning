using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webapi.Models;
using System.Web.Http.Cors;
namespace webapi.Controllers
{
    [RoutePrefix("mock")]
    [EnableCors(origins:"*", headers:"*", methods:"*")]
    public class MockController : ApiController
    {
        [HttpGet]
        [Route("niranjan")]
        public IHttpActionResult Niranjan() {
            return Ok<User>(new User()
            {
                alias = "Niranjan",
                email = "niranjan_awati",
                empno = 41993,
                location = "Pune",
                password = "41993"
            });
        }
        [HttpGet]
        [Route("users/{empno:int}/reportees")]
        public IHttpActionResult ReporteesOf(int empno) {
            return Ok<IEnumerable<User>>(new List<User>() { 
                new User(){alias="Person1", email="person_1@abc.com", empno=1, location="Mysore", password="12345"},
                new User(){alias="Person2", email="person_2@abc.com", empno=2, location="Mysore", password="12345"},
                new User(){alias="Person3", email="person_3@abc.com", empno=3, location="Mysore", password="12345"},
                new User(){alias="Person4", email="person_4@abc.com", empno=4, location="Mysore", password="12345"},
                new User(){alias="Person5", email="person_5@abc.com", empno=5, location="Mysore", password="12345"},
                new User(){alias="Person6", email="person_6@abc.com", empno=6, location="Bangalore", password="1233"},
                new User(){alias="Person7", email="person_7@abc.com", empno=7, location="Bangalore", password="1233"},
                new User(){alias="Person8", email="person_8@abc.com", empno=8, location="Bangalore", password="1233"},
                new User(){alias="Person9", email="person_9@abc.com", empno=9, location="Bangalore", password="1233"},
                new User(){alias="Person10", email="person_10@abc.com", empno=10, location="Pune", password="1233"},
                new User(){alias="Person11", email="person_11@abc.com", empno=11, location="Pune", password="1233"},
                new User(){alias="Person12", email="person_12@abc.com", empno=12, location="Pune", password="1233"},
            });
        }
    }
}
