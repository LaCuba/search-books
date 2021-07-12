import React, { FC } from "react"
import styles from "./Snippet.module.scss"
import bookImg from "./../../icons/book.svg"
import { useDispatch } from "react-redux"

type SnippetPropsType = {
  coverId: string | null
  title: string
  author: Array<string> | null
  bookKey: string
  setBookKey: (bookKey: string) => void
}

const Snippet: FC<SnippetPropsType> = ({
  coverId,
  title,
  author,
  bookKey,
  setBookKey,
}) => {
  const dispatch = useDispatch()

  return (
    <>
      <a
        className={styles.container}
        onClick={() => dispatch(setBookKey(bookKey))}
      >
        <img
          className={styles.cover}
          src={
            coverId
              ? "http://covers.openlibrary.org/b/id/" + coverId + "-S.jpg"
              : bookImg
          }
          alt="cover"
        />
        <h3 className={styles.title}>{title}</h3>
        {author && (
          <div className={styles.author}>
            <b>Author: </b>
            <p> {author.length > 1 ? author.join(", ") : author[0]} </p>
          </div>
        )}
      </a>
    </>
  )
}

export default Snippet
