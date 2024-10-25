import React from 'react'
import Product from '../product.png'
import Perdiet from '../perdiet.png'
import Mensthygiene from '../menshygiene.png'
import Mensexer from '../menexer.png'
import Menmedi from '../menmedi.png'
import Cycle from '../cycle.png'
import Menissue from '../mensissues.png'
import {Link } from "react-router-dom";

function Period() {
    return (
        <>
            <h1 className='cycle'>MENSTRUATION</h1>

            <h3 className='periodHeading' >Experiencing your First Period?</h3>
            <div className='cardsImg'>

                <div class="card" style={{ "width": "18rem" }}>
                 <Link to="/menstrual">
                    <img src={Cycle} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Menstrual Cycle</h5>
                    </div>
                    </Link>
                   
                </div>
                <div class="card" style={{ "width": "18rem" }}>
                <Link to="/product">
                    <img src={Product} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Period Products</h5>
                    </div>
                    </Link>
                </div>
                

            </div>
            <div className='cardsImg'>
            <div class="card" style={{ "width": "18rem" }}>
                <Link to='/mensdiet'>
                    <img src={Perdiet} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Diet</h5>
                    </div>
                    </Link>
                </div>
                <div class="card" style={{ "width": "18rem" }}>
                    <Link to="/menshygiene">
                    <img src={Mensthygiene} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Hygiene</h5>
                    </div>
                    </Link>
                </div>
                <div class="card" style={{ "width": "18rem" }}>
                    <Link to="/mensexercise">
                    <img src={Mensexer} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Workout</h5>
                    </div>
                    </Link>
                </div>
                
            </div>
            <div className='cardsImg'>

            <div class="card" style={{ "width": "18rem" }}>
                <Link to="/mensmedication">
                    <img src={Menmedi} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Medication</h5>
                    </div>
                    </Link>
                </div>
            <div class="card" style={{ "width": "18rem" }}>
                <Link to='/mensissue'>
                <img src={Menissue} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Problems Faced</h5>
                </div>
                </Link>
            </div>
            

        </div >
    </>
  )
}

export default Period