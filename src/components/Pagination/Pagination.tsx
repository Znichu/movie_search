import React from "react";
import ReactPaginate from "react-paginate";
import Pagination from 'rc-pagination';
import style from "./Pagination.module.scss"

type PropsType = {
    pagesTotal: number
    onPageChange: (page: number) => void
}

export const MoviePagination: React.FC<PropsType> = ({ pagesTotal, onPageChange}) => {
    return (
        <div className={style.pagination}>
{/*            <ReactPaginate
                previousLabel={'prev'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                containerClassName={style.pagination}
                activeClassName={style.active}
                previousClassName={style.prev}
                nextClassName={style.next}
                initialPage={1}
            />*/}
            <Pagination
                total={pagesTotal}
                onChange={onPageChange}
                className={style.pagination}
            />

        </div>
    )
}