import React from 'react'
import Stage from '../stage.png'
import Miscarriage from '../miscarriage.png'
import Pregadiet from '../pregadiet.png'
import Pregaexer from '../pregexer.png'
import Pregaissue from '../pregissue.png'
import Pregamedicine from '../pregmedicine.png'
import Infertility from '../infertility.png'
import Contraceptives from '../contraceptives.png'
import Mtp from '../mtp.png'
import { Link } from 'react-router-dom'

function Maternity() {
  return (
    <>

   
      <div className='product'>
        <h1 className='cycle'>MATERNITY</h1>
        <h3 className='pregHeading' >Experiencing your First Pregnancy?</h3>
        <div className='cardsImg'>
          <div class="card" style={{ "width": "18rem" }}>
            <Link to="/pregnancy">
            <img src={Stage} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Pregnancy</h5>
            </div>
            </Link>
          </div>
          <div class="card" style={{ "width": "18rem" }}>
            <Link to='/pregadiet'>
            <img src={Pregadiet} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Diet During Pregnancy</h5>
            </div>
            </Link>
          </div>
          <div class="card" style={{ "width": "18rem" }}>
            <Link to="/pregaexercise">
            <img src={Pregaexer} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Workout</h5>
            </div>
            </Link>
          </div>
          </div>
          <div className='cardsImg'>
           
            <div class="card" style={{ "width": "18rem" }}>
            <Link to='/pregaproblems'>
              <img src={Pregaissue} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Problems Faced</h5>
              </div>
              </Link>
            </div>
            <div class="card" style={{ "width": "18rem" }}>
              <Link to='/miscarriage'>
              <img src={Miscarriage} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Miscarriage</h5>
              </div>
              </Link>
            </div>
            <div class="card" style={{ "width": "18rem" }}>
              <Link to="/pregamedicine">
              <img src={Pregamedicine} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Medication</h5>
              </div>
              </Link>
            </div>
          </div>
          <div className='cardsImg'>
            <div class="card" style={{ "width": "18rem" }}>
              <Link to="/contraceptives">
              <img src={Contraceptives} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Contraceptives</h5>
              </div>
              </Link>
            </div>
            <div class="card" style={{ "width": "18rem" }}>
              <Link to='/mtp'>
             
              <img src={Mtp} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Medical Termination of Pregnancy</h5>
              </div>
              </Link>
            </div>
            <div class="card" style={{ "width": "18rem" }}>
              <Link to="/infertility">
              <img src={Infertility} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Infertility</h5>
              </div>
              </Link>
            </div>
          </div>

          </div>
      </>
      )
}

      export default Maternity