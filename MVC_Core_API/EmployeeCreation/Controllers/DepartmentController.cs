using Employee.DAL;
using Employee.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeCreation.Controllers
{
    [Route("api/")]
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]
    public class DepartmentController : ControllerBase
    {

        [HttpGet]
        [Route("[controller]")]
        public List<DepartmentModel> Get()
        {
            try
            {
                DAL_Department obj = new DAL_Department();
                var lstDepartment = obj.ListALLDepartment();
                return lstDepartment;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
