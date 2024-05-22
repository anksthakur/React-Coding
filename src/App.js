
import React from 'react';
import './App.css';
import Home from './components/ReactRouter';
import About from './components/About';
import Student from './components/Student';
import {BrowserRouter as  Router, Route, Routes, Navigate,  } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchParamsHook from './components/SearchParamsHook';
import ContactUs from './components/ContactUs';
import Company from './components/Company';
import Channel from './components/Channel';
import Other from './components/Other';
import Login from './components/Login';
import Protected from './components/Protected';
//import Page404 from './components/Page404';

//import Highordercomp from './Highordercomp';
//import MyPureComponent from './PureComponent';
//import Ref from './Ref';
// import Memo from './Memo';
//import ChildA from './ChildA';
//import UseReducer from './UseReducer';
//import Usecallback from './Usecallback';
//import Usememo from './Usememo';
//import Useref from './Useref';
//import Returninuseeffect from './Returninuseeffect';
//import Useeffectclass from './Useeffectclass';
//import Componentwillunmount from './Componentwillunmount';
//import SholudCompUpda from './SholudCompUpda';
//import Componentdidupdate from './Componentdidupdate';
//import Componentdidmount from './Componentdidmount';
//import Render from './Render';
//import Constructor from './Constructor';
// import Clas from './Clas';
// import Eg from './Eg';
// import FunComp from './FunComp';

// createContext
// export const data = createContext();
// export const data1 = createContext();


function App() {
  //Memo
// const [count,setCount]=useState(0);
// const [data,setData]=useState(10);
  //useCallback

// const [name,setName]=useState("Anup")
// const changeName = ()=>{
//   return "Thakur"
// }

  // useEffect
  //  const [count,setCount] = useState(1);
  //   const [data,setData] = useState(11);
  // iske andar bhi componet bna skte hai aur comp ke andar bhi comp bna skte hai
  // function Apple(){
  //   return(
  //     <div>component ke andar component</div>
  //   )
  // }

  // state ko use kr rhe hai render method ke ley
//const [name,setName] = useState("Anup")

// prop drilling

//useContext
// const name = "Anup Thakur";
// const gender = "Male";

  return (
    <div className="App">
      {/* <h1>Home Page {count}</h1> */}
      {/* <Clas/>
      <Apple/> */}
      {/* prop pass kiya FunComp se */}
      {/* <FunComp text="I am a prop" />
      <Eg text="passing prop"/> */}
      {/* <Constructor/> */}
      {/* render ke ley jab props pass kra  1st to update props*/}
      {/* <Render name={name}/>
      <button onClick={()=>setName("Kanu")}>Update Name</button> */}
      {/* <Componentdidmount/> */}
      {/* <Componentdidupdate/> */}
      {/* <SholudCompUpda/> */}
      {/* <Componentwillunmount/> */}
      {/* useEffect with props */}
       {/* <Useeffectclass count={count} data={data} />
      <button onClick={()=>{setCount(count+1)}}>Update Count</button>
       <button onClick={()=>{setData(data+1)}}>Update data</button> */}
       {/* return in useEffect */}
       {/* <Returninuseeffect/> */}
       {/* <Useref/> */}
       {/* <Usememo/> */}
       {/* <Usecallback name="Anks" changeName={changeName}/> */}
       {/* <UseReducer/> */}
{/* Props drilling */}

{/* context */}
      {/* <data.Provider value={name}>
        <data1.Provider value={gender}>
      <ChildA/>
      </data1.Provider>
      </data.Provider> */}
      {/* Memo */}
      {/* <Memo data={data}/>
      <button onClick={()=>setCount(count+1)}>Count</button> */}
      {/* use of REF */}
      {/* <Ref/> */}
      {/* Pure Component */}
      {/* <MyPureComponent/> */}
    {/* high order component */}
    {/* <Highordercomp/> */}

    {/* Routing */}
    <Router>
    <Navbar/>
      <Routes>
        {/* path define kiya aur element m ki load krna kya hai */}
   <Route path='/' element={<Protected Component={Home}/>}/>
   <Route path='/about' element={<Protected Component={About}/>}/>
   <Route path='/student' element={<Protected Component={Student}/>}/>
   {/* Protected Route */}
   <Route path='/login' element={<Login/>}/>
   {/* Nested routing */}
   <Route path='/contactus' element={<ContactUs/>}>
    <Route path='company' element={<Company/>}/>
    <Route path='channel' element={<Channel/>}/>
    <Route path='other' element={<Other/>}/>
    </Route>
   {/* params */}
   <Route path='/student/:name' element={<Student/>}/>
   {/* useSearchParams */}
   <Route path='/searchParamshook' element={<SearchParamsHook/>}/>
   {/* path="/*" means ki agar upar wala koi url match nhi huya to automatic run ho jayega*/}
   {/* if URL not match with exact path then it will go to the 404 Page */}
   {/* <Route path="/*" element={<Page404/>}/> */}

   {/* jab user galti se galat URL daal de to uhsko navigate kr de doosre page pe*/}
   {/* Navigate */}
   <Route path='/*' element={<Navigate to="/"/>}/>
   </Routes>
    </Router>
    </div>
  );
}

export  default App;

