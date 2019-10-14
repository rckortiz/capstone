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
    public class ClientTableController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public ClientTableController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/ClientTable
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClientTable>>> GetClient()
        {
            return await _context.Client.ToListAsync();
        }

        // GET: api/ClientTable/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClientTable>> GetClientTable(int id)
        {
            var clientTable = await _context.Client.FindAsync(id);

            if (clientTable == null)
            {
                return NotFound();
            }

            return clientTable;
        }

        // PUT: api/ClientTable/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClientTable(int id, ClientTable clientTable)
        {
            if (id != clientTable.Id)
            {
                return BadRequest();
            }

            _context.Entry(clientTable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientTableExists(id))
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

        // POST: api/ClientTable
        [HttpPost]
        public async Task<ActionResult<ClientTable>> PostClientTable(ClientTable clientTable)
        {
            _context.Client.Add(clientTable);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClientTable", new { id = clientTable.Id }, clientTable);
        }

        // DELETE: api/ClientTable/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ClientTable>> DeleteClientTable(int id)
        {
            var clientTable = await _context.Client.FindAsync(id);
            if (clientTable == null)
            {
                return NotFound();
            }

            _context.Client.Remove(clientTable);
            await _context.SaveChangesAsync();

            return clientTable;
        }

        private bool ClientTableExists(int id)
        {
            return _context.Client.Any(e => e.Id == id);
        }
    }
}
