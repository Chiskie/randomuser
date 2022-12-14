import "./User.css"
import React,{ useState, useEffect } from "react";
// import Posts from './Components/Posts'
import Pagination from "./Pagination";
import userEvent from "@testing-library/user-event";
import { useResolvedPath } from "react-router-dom";





function Landing (){
    const [data, setData] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [userPerPage, setUserPerPage] = useState(1);


useEffect(() => {
 // data fetching here
setFetching(true);    

fetch('https://randomuser.me/api')
.then((response) => response.json())
    .then((actualData) => {
        console.log(actualData.results[0])

        const firstName= actualData.results[0].name.first,
            lastName= actualData.results[0].name.last;

            const locationName= actualData.results[0].location.street.number,
                    streetName= actualData.results[0].location.street.name,
                    cityName= actualData.results[0].location.city,
                    countryName= actualData.results[0].location.country;
        setData([{
            name: `${firstName} ${lastName}`,
            email: actualData.results[0].email,
            birthday: actualData.results[0].dob.date,
            address: `${locationName} ${streetName}, ${cityName}, ${countryName}`,
            phone: actualData.results[0].phone,
            picture: actualData.results[0].picture.large
        }])

        //data is done fetching
        setFetching(false);

    
    });
    //empty arrray below means it only runs when it mounts 
}, []);




    return (
    <div>
        {fetching ? <div>loading...</div> : 
        <div className="mainuser">
            <h1 className="title-heading"> HELLO, I AM A NEW USER</h1>
            <div className="user-box">

                <img className="user-image " src={data[0]?.picture || "" } alt="User-profile">
                </img>

        <div className="user-info">
            <h2>Name: {data[0]?.name || "" } </h2>
            <h2>Email: {data[0]?.email || "" } </h2>
            <h2>Birthday: {data[0]?.birthday || "" } </h2>
            <h2>Address: {data[0]?.address || "" }</h2>
            <h2>Phone-No: {data[0]?.phone || "" }</h2>
        
        </div>
            </div>

        <div className="buttons">
            <button className="prev">PREV</button>
            <div className="number-buttons">
            <button className="num">1</button>
            <button className="num">2</button>
            <button className="num">3</button>
            <button className="num">4</button>
            <button className="num">5</button>
        </div> 
        <button className="next">NEXT</button>
        </div>

        {/* <Posts posts={posts} loading={loading} />  */}
        {/* <Pagination userPerPage={userPerPage} totalUsers={user.length} />  */}
        </div>
    
    }
    </div>
)
}

export default Landing;
