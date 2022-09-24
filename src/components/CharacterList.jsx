import { useEffect, useState } from "react";
import { Character } from "./Character";

function NavPage({ page, setPage }) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      {page === 42 ? <p>Final Page</p> : <p>Page {page}</p>}
      {page === 1 ? (
        ""
      ) : (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setPage(page - 1)}
        >
          Previous Page
        </button>
      )}
      {page === 42 ? (
        ""
      ) : (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setPage(page + 1)}
        >
          Next Page
        </button>
      )}
    </header>
  );
}

export function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    }
    fetchData();
    setLoading(true);
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}
