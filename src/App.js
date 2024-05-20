
import React from 'react';
import './App.css';
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


function App() {
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
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
