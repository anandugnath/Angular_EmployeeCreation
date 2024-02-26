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
    public class EmployeeController : ControllerBase
    {

        [HttpGet]
        [Route("[controller]")]
        public List<EmployeeModel> Get()
        {
            try
            {
                DAL_Employee obj = new DAL_Employee();
                var lstemployee = obj.ListALLEmployee();
                return lstemployee;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost]
        [Route("[controller]/Save")]
        public Response EmployeeAddToDB(EmployeeModel obj_EmpModel)
        {
            try
            {
                if (obj_EmpModel.FirstName != "" && obj_EmpModel.FirstName != null && obj_EmpModel.LastName != "" && obj_EmpModel.FirstName != null)

                {

                    if (obj_EmpModel.DOB == "" || obj_EmpModel.DOB == null)
                    {
                        obj_EmpModel.DOB = DateTime.Now.ToString("yyyy-MM-dd");

                    }
                    DAL_Employee obj = new DAL_Employee();


                    return obj.AddEmployee(obj_EmpModel);
                }
                else
                {
                    Response obj_Res   =new Response();
                    return obj_Res = new Response { objMode = obj_EmpModel, Msg = "Success", StatusCode = "200" };
                }

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        //DAL_Employee
    }
}
