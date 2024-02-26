using Employee.Model;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.DAL
{
    public class DAL_Department:DbConnection
    {
        public List<DepartmentModel> ListALLDepartment()
        {

            List<DepartmentModel> objList = new List<DepartmentModel>();
            SqlConnection con = new SqlConnection(strConnect);
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandText = "sp_Department_GetALL";
            if (con.State == ConnectionState.Closed)
            {
                con.Open();
            }
            var a = cmd.ExecuteReader();
            DataTable dt = new DataTable();
            dt.Load(a);

            foreach (DataRow dtr in dt.Rows)
            {
                DepartmentModel obj = new DepartmentModel
                {
                    DepartmentID =  dtr["DepartmentID"].ToString(),
                    DepartmentName =dtr["DepartmentName"].ToString()
                };
                objList.Add(obj);
            }

            return objList;



        }

    }
}
