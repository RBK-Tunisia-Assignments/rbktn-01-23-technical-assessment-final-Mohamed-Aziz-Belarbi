//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import React ,{useState}from "react";
import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home.jsx";
import AllRecepies from "./components/AllRecipies.jsx"
import axios from "axios";
import Add from "./components/Add";


function App() {

  const[data,setData]=useState([])


  const fetchData=()=>{
    
    axios.get('http://localhost:4000/recepie')
    .then(res=>{
      setData(res.data)
      console.log(res.data)
    })
  }

  useEffect(()=>{fetchData()},[])

  
  


const [view,setView]=useState('Home')
  let changeView = (view) => {
    setView(view);
  };
  return (
    <div className="App">
      <nav className="nav">
        <div
          className="nav-item is-active"
          active-color="orange"
          onClick={() => setView("Home")}
        >
          Home
        </div>

        <div
          className="nav-item"
          active-color="green"
          onClick={() => setView("Allrecepies")}
        >
          All Recipies
        </div>
        <div
          className="nav-item"
          active-color="red"
          onClick={() => setView("Addrecepie")}
        >
          Addrecepie
        </div>
        <div className="nav-item" active-color="red">
          <input type="text"  />
          <button>search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
      {view === "Home" && <Home changeView={changeView}/>}
      {view === "Allrecepies" && <AllRecepies fetchData={fetchData} data={data}  />}
      {view === "Addrecepie" && < Add changeView={changeView}/>}
      <div></div>
    </div>
  );
}
export default App;
