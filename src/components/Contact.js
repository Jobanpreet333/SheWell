import React from 'react'

function Contact() {
  return (
<>
<div className='container'>
    <form>
    <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="name" class="form-control" id="name" aria-required/>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required/>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" required/>
  </div>
  <div class="mb-3">
    <label for="date" class="form-label">Book an Appointment on Date:</label>
    <input type="date" class="form-control" id="date"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form></div>
</>
  )
}

export default Contact