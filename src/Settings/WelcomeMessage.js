/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {AppContext} from "../App/AppProvider";


export default function ({firstVisit}) {
  return (
    <AppContext.Consumer>
      {({firstVisit}) =>
      firstVisit ? <div>
        Welcome to CryptoDash, please select your favorite coins to begin. {' '};
      </div> : null
      }
    </AppContext.Consumer>
  )
}

// export default function Welcome() {
//   return <h1>Welcome to CryptoDash</h1>;
// }


// const WelcomeMessage = props => {
//   return (
  
//     <h1>Welcome Home </h1>
//   )
// }

// export default WelcomeMessage;