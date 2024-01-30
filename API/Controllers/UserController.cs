using API.Models;
using API.Services;
using DbLayer.Entites;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
                _userService = userService;
        }

        [HttpPost("signup")]
        public IActionResult SignUp([FromBody] SignUpRequestModel user)
        {
            try
            {

                User newUser = new User()
                {

                    Username = user.Username,
                    Email = user.Email,
                    Password = user.Password,
                    Birthdate = user.Birthdate,
                    CreatedDate = DateTime.Today,
                    PhoneNumber = user.PhoneNumber,

                };
                _userService.AddUser(newUser);
                return(Ok());


            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = "Internal Server Error", Error = ex.Message });
            }
        }
    }
}

