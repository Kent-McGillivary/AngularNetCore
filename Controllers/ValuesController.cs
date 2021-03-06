﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TodoApi.Models;

namespace angularnetcore.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "valueabc", "valuecd2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public TodoItem Get(int id)
        {
           
            return new TodoItem{  Id = id,  Name="TestThtryis" + id, IsComplete=true };
        }

       /*  // POST api/values
        [HttpPost("Test")]
        public string TestPost([FromBody]Object value)
        {
            return "TestPost"+ value;
        } */

        [HttpPost("Tyu")]
        public String Create([FromBody] TodoItem item)
        {
   
            return "test3";
        }

        [HttpPost("Tyut")]
        public String Create([FromBody] string item)
        {
   
            return "tyut testing: " + item;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
