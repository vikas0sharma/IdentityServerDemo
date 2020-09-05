using IdentityServer4.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace AuthorizationServer.Controllers
{
    public class HomeController : Controller
    {
        private readonly IIdentityServerInteractionService interaction;

        public HomeController(IIdentityServerInteractionService interaction)
        {
            this.interaction = interaction;
        }

        public async Task<IActionResult> Error(string errorId)
        {
            // retrieve error details from identityserver
            var message = await interaction.GetErrorContextAsync(errorId);

            return View("Error", message);
        }
    }
}
