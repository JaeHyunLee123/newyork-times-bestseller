import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/main.module.css";

export default function Detail() {
  const [listInfo, setListInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    if (id) {
      (async function () {
        const { results } = await (await fetch(`/api/list/${id}`)).json();
        setListInfo(results);
        setIsLoading(false);
      })();
    }
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <h2 style={{ marginTop: 70 }} className={styles.loading}>
          Loading
        </h2>
      ) : (
        <>
          <h1 className={styles.title}>{listInfo.list_name}</h1>
          <div className={styles.listsWrapper}>
            {listInfo.books.map((book) => (
              <div className={styles.bookBox} key={book.primary_isbn13}>
                <img className={styles.bookImage} src={`${book.book_image}`} />
                <span className={styles.bookTitle}>{book.title}</span>
                <span className={styles.bookAuthor}>{book.author}</span>
                <Link href={`${book.amazon_product_url}`}>
                  <span className={styles.bookBuyNow}>{`Buy now ->`}</span>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
