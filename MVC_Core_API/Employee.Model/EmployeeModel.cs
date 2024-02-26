using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Model
{
    public class EmployeeModel
    {

        public int EmployeeID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DOB { get; set; }
        public string Email { get; set; }
        public string DepartmentID { get; set; }
        public string ProfilePicture { get; set; }

        public string DepartmentName { get; set; }
    }
    public class Response
    {
    public    EmployeeModel objMode { get; set; }
        public string StatusCode { get; set; }
        public string Msg { get; set; }

    }
}
