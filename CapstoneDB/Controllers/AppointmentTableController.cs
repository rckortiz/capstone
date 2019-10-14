using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CapstoneDB;
using CapstoneDB.Models;

namespace dotnet_sdg_template.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentTableController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public AppointmentTableController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/AppointmentTable
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppointmentTable>>> GetAppointment()
        {
            return await _context.Appointment.ToListAsync();
        }

        // GET: api/AppointmentTable/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AppointmentTable>> GetAppointmentTable(int id)
        {
            var appointmentTable = await _context.Appointment.FindAsync(id);

            if (appointmentTable == null)
            {
                return NotFound();
            }

            return appointmentTable;
        }

        // PUT: api/AppointmentTable/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAppointmentTable(int id, AppointmentTable appointmentTable)
        {
            if (id != appointmentTable.Id)
            {
                return BadRequest();
            }

            _context.Entry(appointmentTable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppointmentTableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/AppointmentTable
        [HttpPost]
        public async Task<ActionResult<AppointmentTable>> PostAppointmentTable(AppointmentTable appointmentTable)
        {
            _context.Appointment.Add(appointmentTable);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAppointmentTable", new { id = appointmentTable.Id }, appointmentTable);
        }

        // DELETE: api/AppointmentTable/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AppointmentTable>> DeleteAppointmentTable(int id)
        {
            var appointmentTable = await _context.Appointment.FindAsync(id);
            if (appointmentTable == null)
            {
                return NotFound();
            }

            _context.Appointment.Remove(appointmentTable);
            await _context.SaveChangesAsync();

            return appointmentTable;
        }

        private bool AppointmentTableExists(int id)
        {
            return _context.Appointment.Any(e => e.Id == id);
        }
    }
}
