using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ActivityManager.Models
{
    public class ActivityContext : DbContext
    {
        public DbSet<Session> Sessions { get; set; }
    }
}