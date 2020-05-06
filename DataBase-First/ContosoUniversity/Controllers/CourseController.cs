using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using ContosoUniversity.DAL;
using ContosoUniversity.Models;

namespace ContosoUniversity.Controllers
{
  public class CourseController : Controller
  {
    private SchoolContext db = new SchoolContext();

    // GET: Course
    public ActionResult Index(string sortOrder, string searchString)
    {
      ViewBag.CurrentSort = sortOrder;
      ViewBag.CourseIDSortParm = sortOrder == "ID" ? "id_desc" : "ID";
      ViewBag.TitleSortParm = String.IsNullOrEmpty(sortOrder) ? "title_desc" : "";

      var courses = from c in db.Courses select c;

      if (!String.IsNullOrEmpty(searchString))
      {
        courses = courses.Where(c => c.Title.Contains(searchString));
                             //|| c.CourseID.Contains(searchString);
      }

      switch (sortOrder)
      {
        case "title_desc":
          courses = courses.OrderByDescending(c => c.Title);
          break;
        case "ID":
          courses = courses.OrderBy(c => c.CourseID);
          break;
        case "id_desc":
          courses = courses.OrderByDescending(c => c.CourseID);
          break;
        default:
          courses = courses.OrderBy(c => c.Title);
          break;
      }
      return View(courses.ToList());
    }

    // GET: Course/Details/5
    public ActionResult Details(int? id)
    {
      if (id == null)
      {
        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
      }
      Course course = db.Courses.Find(id);
      if (course == null)
      {
        return HttpNotFound();
      }
      return View(course);
    }

    // GET: Course/Create
    public ActionResult Create()
    {
      return View();
    }

    // POST: Course/Create
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Create([Bind(Include = "CourseID,Title,Credits")] Course course)
    {
      try
      {
        if (ModelState.IsValid)
        {
          db.Courses.Add(course);
          db.SaveChanges();
          return RedirectToAction("Index");
        }
      }
      catch (DataException /* dex */)
      {
        //Log the error (uncomment dex variable name and add a line here to write a log.
        ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
      }
      return View(course);
    }


    // GET: Course/Edit/5
    public ActionResult Edit(int? id)
    {
      if (id == null)
      {
        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
      }
      Course course = db.Courses.Find(id);
      if (course == null)
      {
        return HttpNotFound();
      }
      return View(course);
    }

    // POST: Course/Edit/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPost, ActionName("Edit")]
    [ValidateAntiForgeryToken]
    public ActionResult EditPost(int? id)
    {
      if (id == null)
      {
        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
      }
      var courseToUpdate = db.Courses.Find(id);
      if(TryUpdateModel(courseToUpdate, "",
        new string[] { "Title", "Credits" }))
      {
        try
        {
          db.SaveChanges();

          return RedirectToAction("Index");
        }
        catch (DataException /* dex */)
        {
          //Log the error (uncomment dex variable name and add a line here to write a log.
          ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists, see your system administrator.");
        }
      }
      return View(courseToUpdate);
    }

    // GET: Course/Delete/5
    public ActionResult Delete(int? id, bool? saveChangesError=false)
    {
      if (id == null)
      {
        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
      }
      if (saveChangesError.GetValueOrDefault())
      {
        ViewBag.ErrorMessage = "Delete failed. Try again, and if the problem persists see your system administrator.";
      }
      Course course = db.Courses.Find(id);
      if (course == null)
      {
        return HttpNotFound();
      }
      return View(course);
    }

    // POST: Course/Delete/5
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Delete(int id)
    {
      try
      {
        Course course = db.Courses.Find(id);
        db.Courses.Remove(course);
        db.SaveChanges();
      }
      catch (DataException/* dex */)
      {
        //Log the error (uncomment dex variable name and add a line here to write a log.
        return RedirectToAction("Delete", new { id = id, saveChangesError = true });
      }
      return RedirectToAction("Index");
    }

    protected override void Dispose(bool disposing)
    {
      if (disposing)
      {
        db.Dispose();
      }
      base.Dispose(disposing);
    }
  }
}
