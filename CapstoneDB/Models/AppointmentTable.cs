using System;
using System.Collections.Generic;

namespace CapstoneDB.Models
{
  public class AppointmentTable
  {
    public int Id { get; set; }
    public string DayOfTheWeek { get; set; }
    public DateTime TimeOfAppointment { get; set; } = DateTime.Now;
    public DateTime DateOfAppointment { get; set; }
  }
}