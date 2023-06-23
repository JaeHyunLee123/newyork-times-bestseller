import { useEffect, useState } from "react";

export default function IndexPage() {
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const { results } = await (await fetch("/api/lists")).json();
      console.log(results);
      setLists(results);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      <h1>The New York Times Best Seller Explorer</h1>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        lists.map((list) => <h4>{list.display_name}</h4>)
      )}
    </div>
  );
}
