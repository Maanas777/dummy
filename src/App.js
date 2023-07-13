import logo from './logo.svg';
import './App.css';
import { firestore } from './firebase/config';
import {getDocs,collection,addDoc,setDoc} from 'firebase/firestore'


function App() {

 const adddata = async ()=>{
//collection reference
const docref=collection(firestore,"products", "m7jZLTneYoHGxCb90FZn")

  const datas = await setDoc(docref,{
    name:'Samsung'
  })
 
  
 

 }

  return (
    <div className="App">

      <button onClick={adddata}> click here</button>
      
    </div>
  );
}

export default App;
