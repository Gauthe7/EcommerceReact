import React from 'react'
import '../Nav.css'
import { useState } from 'react';

function View() {
 const [ids, setid] = useState();
 function indata(datapass){
  setid([...ids,datapass])
  console.log("id is paiing",datapass);
 }




  return (
    <>

    
    
    </>
  )
}

export default View