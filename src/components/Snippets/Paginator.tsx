import React, { FC, useState } from "react"
import styles from "./Paginator.module.scss"

type Paginator = {
  countSnippets: number
  currentPage: number
  countSnippetsOnPage?: number
  portionSize?: number
  pageClick: (p: number) => void
}

const Paginator: FC<Paginator> = ({
  countSnippets,
  countSnippetsOnPage = 100,
  currentPage,
  pageClick,
  portionSize = 5,
}) => {
  const pagesCount = Math.ceil(countSnippets / countSnippetsOnPage)

  const pages = []

  for (let i = 0; i <= pagesCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={styles.container}>
      <button
        disabled={portionNumber <= 1}
        className={styles.prevBtn}
        onClick={() => setPortionNumber(portionNumber - 1)}
      >
        &laquo;
      </button>
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <a
              key={p}
              className={currentPage === p ? styles.currentPage : undefined}
              onClick={(e) => pageClick(p)}
            >
              {p}
            </a>
          )
        })}
      <button
        disabled={portionCount <= portionNumber}
        className={styles.nextBtn}
        onClick={() => setPortionNumber(portionNumber + 1)}
      >
        &raquo;
      </button>
    </div>
  )
}

export default Paginator
