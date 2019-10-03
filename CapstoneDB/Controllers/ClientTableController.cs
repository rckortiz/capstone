using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using CapstoneDB.Models;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;


namespace CapstoneDB.Controllers
{
  [Route("api/[controller]")]
  [ApiController]

  public class ClientTableController : ControllerBase
  {
    private DatabaseContext context;
    public ClientTableController(DatabaseContext _context)
    {
      this.context = _context;
    }

    //GET 
    [HttpGet("AllAppointments")]
    public ActionResult<IEnumerable<ClientTable>> GetAllClients()
    {
      var all = context.Client.OrderBy(x => x.Id);
      return all.ToList();
    }
  }
}