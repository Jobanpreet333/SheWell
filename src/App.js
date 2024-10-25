import logo from './logo.svg';
import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Sign from './components/SignUp';
import Front  from './components/Front';
import Period from './components/Period';
import Product from './components/Product'
import Contact  from './components/Contact';
import Menshygiene from './components/Menhygiene'
import Menstraul from './components/Menstrual';
import Mensdiet from './components/Mensdiet';
import Mensexercise from './components/Mensexercise';
import Mensmedication from './components/Mensmedication';
import Mensissue from './components/Mensissue';
import Maternity from './components/Maternity';
import Mtp from './components/Mtp';
import Infertiltiy from './components/Infertiltiy';
import Contraceptives from './components/Contraceptives';
import Pregdiet from './components/Pregdiet';
import Pregamedicine from './components/Pregamedicine';
import Miscarriage from './components/Miscarriage';
import Pregaexercise from './components/Pregaexercise';
import Pregaproblems from './components/Pregaproblems';
import Pregnancy from './components/Pregnancy';
import Abortion from './components/Abortion';

function App() {
  return (

    <>

    <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path="/" element={<Front/>} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/sign" element={<Sign />} />
          <Route exact path="/period" element={<Period />} />
          <Route exact path="/product" element={<Product/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/menshygiene" element={<Menshygiene/>} />
          <Route exact path="/menstrual" element={<Menstraul/>} />
          <Route exact path="/mensdiet" element={<Mensdiet/>} />
          <Route exact path="/mensexercise" element={<Mensexercise/>} />
          <Route exact path="/mensmedication" element={<Mensmedication/>} />
          <Route exact path="/mensissue" element={<Mensissue/>} />
          <Route exact path="/maternity" element={<Maternity/>} />
          <Route exact path="/mtp" element={<Mtp/>} />
          <Route exact path="/infertility" element={<Infertiltiy/>} />
          <Route exact path="/infertility" element={<Infertiltiy/>} />
          <Route exact path="/contraceptives" element={<Contraceptives/>} />
          <Route exact path="/pregadiet" element={<Pregdiet/>} />
          <Route exact path="/pregamedicine" element={<Pregamedicine/>} />
          <Route exact path="/miscarriage" element={<Miscarriage/>} />
          <Route exact path="/pregaexercise" element={<Pregaexercise/>} />
          <Route exact path="/pregaproblems" element={<Pregaproblems/>} />
          <Route exact path="/pregnancy" element={<Pregnancy/>} />
          <Route exact path="/abortion" element={<Abortion/>} />


         
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
