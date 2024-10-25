import React from 'react'
import Periods from '../periods.png'
import Preg from '../preg.png'
import Abortion from '../Abortion.png'
import Appoint from '../appoint.png'
import Pertracker from '../periotracker.png'
import PregTracker from '../pregtracker.png'
import { Link } from "react-router-dom";

function Front() {
    return (
        <>

            <div className='cardsImg'>
                <div class="card" style={{ "width": "18rem" }}>
                    <Link to="/period">
                        <img src={Periods} class="card-img-top" alt="..." />

                        <div class="card-body">
                            <h5 class="card-title">Menstruation</h5>
                        </div>
                    </Link>
                </div>
                <div class="card" style={{ "width": "18rem" }}>
                    <Link to='/maternity'>
                    <img src={Preg} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Maternity</h5>
                    </div>
                    </Link>
                </div>
                <div class="card" style={{ "width": "18rem" }}>
                    <Link to='/abortion'>
                    <img src={Abortion} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Abortion</h5>
                    </div>
                    </Link>
                </div>
            </div>
            <div className='cardsImg'>
                <div class="card" style={{ "width": "18rem" }}>
                    <Link to="/contact">
                    <img src={Appoint} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Book an Appointment</h5>
                    </div>
                    </Link>
                </div>
                <div class="card" style={{ "width": "18rem" }}>
                    <img src={Pertracker} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Period Tracker</h5>
                    </div>
                </div>
                <div class="card" style={{ "width": "18rem" }}>
                    <img src={PregTracker} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Pregnancy Tracker</h5>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Front