import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`
// // eslint-disable-next-line
// export default function () {
//   return 
//   // eslint-disable-next-line
//   <Bar> 
//     <div>CryptoDash</div>
//     <div></div>
//     <div>Dashboard</div>
//     <div>Settings</div> */}
//   </Bar> 
//     // eslint-disable-next-line
// }


function AppBar () {
  return (
    <Bar> 
    <div>CryptoDash</div>
    <div></div>
    <div>Dashboard</div>
    <div>Settings</div> 
  </Bar> 
  );
}

export default AppBar;
