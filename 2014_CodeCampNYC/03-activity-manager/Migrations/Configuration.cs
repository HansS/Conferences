namespace ActivityManager.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using ActivityManager.Models;
    internal sealed class Configuration : DbMigrationsConfiguration<ActivityManager.Models.ActivityContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(ActivityManager.Models.ActivityContext context)
        {

            context.Sessions.AddOrUpdate(s => s.Id,
                new Session(){ Title ="Building SharePoint Apps with ShareCoffee", Event = "SharePoint Conference 2014", Location ="Las Vegas", Year= 2014},
                new Session(){ Title ="SharePoint PowerHour", Event = "TechEd NA 2014", Location ="Houston", Year= 2014},
                new Session(){ Title ="AngularJS <3 MVC", Event = "CodeCamp NYC", Location ="New York City", Year= 2014},
                new Session(){ Title ="Building SharePoint Apps with AngularJS", Event = "ShareConf", Location ="Berlin", Year= 2014},
                new Session(){ Title ="Building SharePoint Apps with AngularJS", Event = "SharePoint Days", Location ="Duesseldorf", Year= 2014});

            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
