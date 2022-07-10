import React from "react";
import styles from './Pagination.module.css'

export default function Pagination({foodPerPage, allFood,paginate}) {
    const pageNumbers = [];

    for (let p =1 ; p<= Math.ceil(allFood/foodPerPage); p++) {
        pageNumbers.push(p)
    }

    

    return (
        <nav>
            <ul className={styles.container}>
                {pageNumbers?.map(e => (
                    <li className={styles.number} key={e}>
                    <a  onClick={() => {paginate(e)}} >{e}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}