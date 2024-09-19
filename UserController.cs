using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using reactwebpage.Models;


namespace reactwebpage.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly MySqlConnection _connection;

        public UserController(MySqlConnection connection)
        {
            _connection = connection;
        }

        [HttpPost]
        public IActionResult AddUser([FromBody] User user)
        {
            _connection.Open();
            try
            {
                var query = "INSERT INTO Users (FirstName, LastName, MobileNumber, EnrolmentDate, NativePlace, AreasOfInterest, Gender) VALUES (@FirstName, @LastName, @MobileNumber, @EnrolmentDate, @NativePlace, @AreasOfInterest, @Gender)";
                using (var cmd = new MySqlCommand(query, _connection))
                {
                    cmd.Parameters.AddWithValue("@FirstName", user.FirstName);
                    cmd.Parameters.AddWithValue("@LastName", user.LastName);
                    cmd.Parameters.AddWithValue("@MobileNumber", user.MobileNumber);
                    cmd.Parameters.AddWithValue("@EnrolmentDate", user.EnrolmentDate);
                    cmd.Parameters.AddWithValue("@NativePlace", user.NativePlace);
                    cmd.Parameters.AddWithValue("@AreasOfInterest", user.AreasOfInterest);
                    cmd.Parameters.AddWithValue("@Gender", user.Gender);

                    cmd.ExecuteNonQuery();
                }
                return Ok(new { message = "User added successfully!" });
            }
            catch (Exception ex)
            {
                return StatusCode(500,new {message="An error occurred",error=ex.Message});
            }
            finally
            {
                _connection.Close();
            }
        }
    }
}