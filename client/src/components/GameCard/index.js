import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { idbPromise } from "../../utils/helpers";
import { QUERY_ALL_GAMES } from "../../utils/queries";
import { UPDATE_GAMES } from "../../utils/actions";

function GameCard() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  console.log("here");
  const [currentGames, setCurrentGames] = useState({});

  const { loading, data } = useQuery(QUERY_ALL_GAMES);

  const { games } = state;

  useEffect(() => {
    // already in global store
    if (games.length) {
      setCurrentGames(games.filter((game) => game.field._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_GAMESS,
        games: data.games,
      });

      data.games.forEach((game) => {
        idbPromise("games", "put", game);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("games", "get").then((indexedGames) => {
        dispatch({
          type: UPDATE_GAMES,
          games: indexedGames,
        });
      });
    }
  }, [games, data, loading, dispatch, id]);

  return (
    <section className="my-5">
      <Link to="/LoggedIn">← Back to the game map</Link>
    </section>
  );
}

export default GameCard;
