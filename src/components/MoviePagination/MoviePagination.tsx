import React from "react";
import ReactPaginate from "react-paginate";
import style from "./Pagination.module.scss"

type PropsType = {
    pagesTotal: number
    onPageChange: (e: any) => void
    currentPage: number
}

export const MoviePagination: React.FC<PropsType> = ({ pagesTotal, onPageChange, currentPage}) => {
    return (
        <div className={style.pagination}>
            <ReactPaginate
                previousLabel={'← prev'}
                nextLabel={'next →'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pagesTotal}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                containerClassName={style.pagination}
                activeClassName={style.active}
                previousClassName={style.prev}
                nextClassName={style.next}
                onPageChange={onPageChange}
                forcePage={currentPage - 1}
            />
        </div>
    )
}