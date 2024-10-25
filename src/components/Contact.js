import React from 'react'

function Contact() {
  return (
<>
      <div className='container'>


        <form >
          <h2>Doctor Appointment Form</h2>

          <label for="name">Full Name</label>
          <input type="text" id="name" name="name" required />

          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required/>

            <label for="appointment_date">Preferred Appointment Date</label>
            <input type="date" id="appointment_date" name="appointment_date" required/>

              <label for="time">Preferred Time</label>
              <input type="time" id="time" name="time" required/>

                <label for="doctor">Select Doctor</label>
                <select id="doctor" name="doctor" required>
                  <option value="" disabled selected>Choose Doctor</option>
                  <option value="dr_smith">Dr. Smith</option>
                  <option value="dr_jones">Dr. Jones</option>
                  <option value="dr_clark">Dr. Clark</option>
                </select>

                <label for="reason">Reason for Appointment</label>
                <textarea id="reason" name="reason" rows="4" placeholder="Briefly describe your reason for the appointment"></textarea>

                <label for="recommendations">Recommendations / Requests</label>
                <textarea id="recommendations" name="recommendations" rows="4" placeholder="Any additional notes or specific requirements"></textarea>

                <button type="submit">Schedule Appointment</button>
                </form>


          </div>
          </>
          )
}

          export default Contact