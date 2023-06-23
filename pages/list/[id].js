import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
        <h2>Loading</h2>
      ) : (
        <>
          <h1>{listInfo.list_name}</h1>
          {listInfo.books.map((book) => (
            <div key={book.primary_isbn13}>
              <img src={`${book.book_image}`} />
              <span>{book.title}</span>
              <span>{book.author}</span>
              <Link href={`${book.amazon_product_url}`}>
                <span>{`Buy now ->`}</span>
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
