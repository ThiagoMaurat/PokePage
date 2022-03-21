import { NavigateBefore, NavigateNext } from "@styled-icons/material";
import Link from "next/link";
import React from "react";
import * as S from "./styles";

interface IPaginationProps {
  currentPage: number;
  pages: number[];
}

export default function Pagination({ currentPage, pages }: IPaginationProps) {
  return (
    <S.Pagination>
      <S.Pages>
        {!(currentPage > 1) && (
          <Link href={`/?page=${currentPage - 1}`}>
            <a className="prev">&lt;</a>
            <span className="previous">
              <NavigateBefore size={20} /> Previous
            </span>
          </Link>
        )}
         {currentPage >= 5 && (
          <>
            <Link href={`${pages.length - (pages.length - 1)}`}>
              <a className="page">{pages.length - (pages.length - 1)}</a>
            </Link>
            <span>...</span>
          </>
        )}

        {currentPage >= 3
          ? pages.slice(currentPage - 3, currentPage + 2).map((page) => {
              return (
                <Link key={page} href={`${page}`}>
                  <a className={`page ${currentPage === page ? "active" : ""}`}>
                    {page}
                  </a>
                </Link>
              )
            })
          : pages.slice(0, 5).map((page) => {
              return (
                <Link key={page} href={`${page}`}>
                  <a className={`page ${currentPage === page ? "active" : ""}`}>
                    {page}
                  </a>
                </Link>
              )
            })}

        {currentPage <= pages.length - 5 && (
          <>
            <span>...</span>
            <Link href={`${pages.length}`}>
              <a className="page">{pages.length}</a>
            </Link>
          </>
        )}

        {!(currentPage === pages.length) && (
          <Link href={`${currentPage + 1}`}>
            <a>
              <span className="next">
                Next <NavigateNext size={20} />
              </span>
            </a>
          </Link>
        )}
      </S.Pages>
    </S.Pagination>
  );
}
