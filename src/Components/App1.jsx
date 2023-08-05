import React, { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Student from './Student';
import Contact from './Contact';
import NavBar from './NavBar';
import store from './StoreComponent';
import EditStudent from './EditStudent';
import AddNewStudent from './AddNewStudent';

const App1 = () => {
    const[data,SetData]=useState([
        {name:"Durgash",age:23,Course:"Mern",Batch:"EA21"},
        {name:"Abdullah",age:26,Course:"Mern",Batch:"EA21"},
        {name:"Ganish",age:35,Course:"Mern",Batch:"EA21"},
        {name:"Surabh",age:20,Course:"Mern",Batch:"EA21"},
        {name:"Saleem",age:30,Course:"Mern",Batch:"EA21"},
        {name:"Amrit",age:21,Course:"Mern",Batch:"EA21"},
        {name:"AShwin",age:30,Course:"Mern",Batch:"EA21"},
        {name:"Sunil",age:29,Course:"Mern",Batch:"EA21"},
        {name:"Dilip",age:28,Course:"Mern",Batch:"EA21"},
        {name:"Mohit",age:26,Course:"Mern",Batch:"EA21"}
    ])
    return (
        <div>
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/student' element={<store.Provider value={{entries:data,setEntries:SetData}}>
                <Student/>
                </store.Provider>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/editstudent' element={
                    <store.Provider value={{entries:data,setEntries:SetData}}>
                    <EditStudent/>
                    </store.Provider>
                }/>
                <Route path='/addnewstudent' element={<store.Provider value={{entries:data,setEntries:SetData}}>
                    <AddNewStudent/>
                    </store.Provider>
                    
                }/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App1;
