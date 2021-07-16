import React,{useEffect, useState} from 'react'

const Message = ({fail, children}) => {
//   const [show, setShow] = useState(true);
//   useEffect(()=>{
//     setTimeout(()=>{
//         setShow(false)
//     },3000)
// },[fail])
const [show, setShow] = useState({children});
// const [showin, setShowIn] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setShow(''); // count is 0 here
  }, 3000);

}, [fail]);


return (
    <>
    {fail ? (
      
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>{show}</strong> 
        </div>
      )
      : (
            <div class="alert alert-primary alert-dismissible fade show" role="alert">
            <strong>Successfully Registered</strong> 
          
            </div>
      )
}
    </>
  )

}
    


export default Message

