import React, {useState} from 'react';
import './App.css'
import faker from 'faker';
import Profile from './Profile';
import styled, {ThemeProvider,csss} from 'styled-components';
function App() {
  const theme = {
    primary : 'azure',
    danger : 'blue'
  }
  const [name,setName] = useState("srinivas");
  const [prof,setprof] = useState([
    {
      id : 1,
      role:"Article",
      name : "srinivas",
      img : faker.image.avatar(),
      text : "What if famous brands had regular fonts? Meet RegulaBrands!",
      subtext : "I’ve worked in UX for the better part of a decade. From now on, I plan to re",
    },
    {
      id:2,
      role:"Article",
      name : "vasamsetti",
      img : faker.image.avatar(),
      text : "What if famous brands had regular fonts? Meet RegulaBrands!",
      subtext : "I’ve worked in UX for the better part of a decade. From now on, I plan to re",
    },
    {
      id:3,
      role:"Article",
      name : "srinivas vasamsetti",
      img : faker.image.avatar(),
      text : "What if famous brands had regular fonts? Meet RegulaBrands!",
      subtext : "I’ve worked in UX for the better part of a decade. From now on, I plan to re",
    }
  ])
  const changeName = () => {
    setName("srinivas_vasamsetti");
  }

const deleteChangeHandler = (cardIndex) =>{
  const copyprof = [...prof]
  copyprof.splice(cardIndex,1)
  setprof(copyprof);
}

const changeNameHandler = (event,id) => {
    const prod = prof.findIndex(pro=>pro.id == id)

    const copcard=[...prof]

    prof[prod].name = event.target.value

    setprof(copcard)
}



//const butcol = {
//  backgroundColor:null
//}

const classes = ['buttons'];

  const cards = (prof.map((pro,index)=> <Profile name={pro.name}  text={pro.text} role={pro.role} subtext={pro.subtext} img={pro.img} key={pro.id}/>))
  const but = <button className="btn btn-success" onClick={changeName}>change name</button>;
  const changeInputHandler = event => setName(event.target.value);
  return (
      <ThemeProvider theme={theme}>
        <div className='App'>
         <center> <div className="headerr"> 
              <div>ATG WORLD</div>
              <div><input type="text" className="inut" placeholder="Search for your favourite groups in ATG"/></div>
              <div>Create Account .<a href="#">It's Free</a></div>
          </div></center>
         <div>
          <div>
            <div className="imga"><img src="unsplash.jpg" className="aimg" /></div>
            <font className="sw">Computer Engineering</font>
            <font className="ss">142,765 Computer Engineers follow this</font>
          </div>
         <center> <div className="welcome">
          <div className="navbar">
            <div>
              <a href="#" className="ah">All Posts(3)</a>
              <a href="#">Article</a>
              <a href="#">Event</a>
              <a href="#">Education</a>
              <a href="#">Job</a>
            </div>
            <div className="nested">
            <select className="form-select" aria-label="Default select example">
              <option selected>Write a Post</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button className="btn btn-primary">Join Group</button>
            </div>
          </div>
            <hr/>
            <div className="fin">
              <div>{cards}</div>
              <div className="loca">Noida , India
              <hr/>Your location will help us serve better and extend a personalised experience.</div>
            </div>
        </div></center>
        </div>
        </div>
        <br/><br/><br/>

      </ThemeProvider>
  )
}

export default App

