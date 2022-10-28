import React from "react";
import "./PageNotFound.css";

const Pagination =({userPerPage, totalUsers}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul classname= "pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="!#" className= "page-link">{number}</a>

                    </li>
                ))}
            </ul>

        </nav>
    )
}

export default Pagination