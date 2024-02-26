using Employee.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.DAL
{
    public class DAL_Employee:DbConnection
    {
        public List<EmployeeModel> ListALLEmployee()
        {

            List<EmployeeModel> objList = new List<EmployeeModel>();
            SqlConnection con = new SqlConnection(strConnect);
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandText = "Sp_Employee_GetALL";
            if (con.State == ConnectionState.Closed)
            {
                con.Open();
            }
            var a = cmd.ExecuteReader();
            DataTable dt=new DataTable();
            dt.Load(a);
              
                foreach (DataRow dtr in dt.Rows)
                {
                EmployeeModel obj = new EmployeeModel
                {
                    DepartmentID = dtr["DepartmentID"].ToString(),
                    EmployeeID = int.Parse(dtr["EmpID"].ToString()),
                    Email = dtr["Email"].ToString(),
                    FirstName = dtr["FirstName"].ToString(),
                    LastName = dtr["LastName"].ToString(),
                    DOB =dtr["DOB"].ToString(),
                    ProfilePicture = dtr["ProfilePicture"].ToString(),
                    DepartmentName= dtr["DepartmentName"].ToString()
                };
                    objList.Add(obj);
                }
             
            return objList;



        }




        public Response AddEmployee(EmployeeModel obj)
        {
            Response obj_Res = new Response();
            try
            {
               
                SqlConnection con = new SqlConnection(strConnect);
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = con;
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "Sp_Employee_AddToDB";
                if (con.State == ConnectionState.Closed)
                {
                    con.Open();
                }

                cmd.Parameters.AddWithValue("@FirstName", obj.FirstName);
                cmd.Parameters.AddWithValue("@LastName", obj.LastName);
                cmd.Parameters.AddWithValue("@DOB",DateTime.Parse( obj.DOB));
                cmd.Parameters.AddWithValue("@Email", obj.Email);
                cmd.Parameters.AddWithValue("@DepartmentID", obj.DepartmentID);
                cmd.Parameters.AddWithValue("@ProfilePicture", obj.ProfilePicture);

                SqlParameter outputParam = new SqlParameter("@EmpID", SqlDbType.Int);
                outputParam.Direction = ParameterDirection.Output;
                cmd.Parameters.Add(outputParam);

                int a= cmd.ExecuteNonQuery();
                if (a > 0)
                {
                    int empID = (int)outputParam.Value;
                    obj.EmployeeID = empID;
                    obj_Res = new Response { objMode = obj,Msg="Success",StatusCode="200" };

                    
                }
            }
            catch (Exception ex)
            {

                throw;
            }

            return obj_Res;
        }
    }
}
