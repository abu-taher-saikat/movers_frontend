import React from 'react'

const Message = ({success, fail}) => {
    return (
        <div>
           {/* {success ? ( 
                <>
                    <div class="alert alert-primary" role="alert">
                        {children}
                    </div>
                </>
            ) : (
                <>
                    <div class="alert alert-primary" role="alert">
                        {children}
                    </div>
                </>
            )} */}
        </div>
    )
}

export default Message

// {success ? ( 
//     <>
//       <div class="alert alert-primary" role="alert">
//           {children}
//       </div>
//     </>
// ) : (
//   <>
//   <div class="alert alert-primary" role="alert">
//       {children}
//   </div>
// </>
// ) }
