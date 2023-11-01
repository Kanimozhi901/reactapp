import React,{useState} from 'react'
function body1(){
    const[counts1,setCounts1]=useState(100);
    const[counts2,setCounts2]=useState(100);
    
    function myfunc1()
    {
        setCounts1(counts1+1)
    }
    function myfunc2()
    {
        setCounts1(counts1-1)
    }
    function myfunc3()
    {
        setCounts2(counts2+1)
    }
    



  return (
    <div>
    
    <button onClick={myfunc1}>Increase</button>
    <span>{counts1}</span>
    <button onClick={myfunc2}>Decrease</button>
    <span>{counts1}</span>
    <button onMouseOver={myfunc3}>Decrease</button>
    <span>{counts2}</span>
    </div>
  );
  }

export default body1;

