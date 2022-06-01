import React from "react";
import App from '../App';
import AuthProvider from './Context/AuthProvider/AuthProvider'

 export default () => {
     return (
     <AuthProvider>
         <App></App>
     </AuthProvider>
     )
 }