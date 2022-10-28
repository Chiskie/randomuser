import React from "react";
import { Link } from "react-router-dom";

const PageNotFound= () =>{
    return(
        <div className="not-found">
        <h1>404 Error</h1>
        <h1>Page Not Found</h1> <br />
        <Link to='/'> Back to the homepage...</Link>
    </div> )
};

export default PageNotFound;