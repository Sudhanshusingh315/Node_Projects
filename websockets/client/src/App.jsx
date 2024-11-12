import { useEffect } from 'react';
import './App.css';
import {io} from 'socket.io-client';
function App() {
  const socket = io('http://localhost:3000');
  useEffect(()=>{
    socket.on("connect",()=>{
      console.log(`Socket connected with id ${socket.id}}`);
    });

    socket.on('Meow',(s)=>{
      console.log(s);
    })
  },[])
  return<>
  app
  </>
}

export default App
