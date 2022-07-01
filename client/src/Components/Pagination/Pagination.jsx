import React from "react";

export default function Pagination({foodPerPage, allFood,paginate}) {
    const pageNumbers = [];

    for (let p =1 ; p<= Math.ceil(allFood/foodPerPage); p++) {
        pageNumbers.push(p)
    }

    

    return (
        <nav>
            <ul>
                {pageNumbers?.map(e => (
                    <li>
                    <a onClick={() => {paginate(e)}} >{e}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}