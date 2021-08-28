import React, { useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_GAMES } from "../../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { QUERY_GAMES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import GameCard from "../GameCard";
import spinner from "../../assets/spinner.gif";

function GamesList() {
  const [state, dispatch] = useStoreContext();

  const { id } = useParams();
  const { loading, data } = useQuery(QUERY_GAMES);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_GAMES,
        games: data.games,
      });
      data.games.forEach((game) => {
        idbPromise("games", "put", game);
      });
    } else if (!loading) {
      idbPromise("games", "get").then((game) => {
        dispatch({
          type: UPDATE_GAMES,
          games: game,
        });
      });
    }
  }, [data, loading, dispatch]);

  const filteredGames = () => {
    if (!id) {
      return state.games;
    }
    return state.games.filter((game) => game.field._id === id);
  };
  console.log(state.games);
  console.log(filteredGames());

  return (
    <div className="my-2">
      <h3>Games</h3>
      {filteredGames().length ? (
        <ul>
          {filteredGames().map((game) => (
            <GameCard
              key={game._id}
              _id={game._id}
              time={game.time}
              description={game.description}
              field={game.field.name}
              playerCount={game.playerCount}
            ></GameCard>
          ))}
        </ul>
      ) : (
        <h3>You don't have any games yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default GamesList;
// import React from 'react';
// import gameList from '../GameList';
// import { capitalizeFirstLetter } from '../../utils/helpers';

// function gameList(props) {
//   const { field } = props;
//   return (
//     <section>
//       <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
//       <p>{currentCategory.description}</p>
//       <GameList category={currentCategory.name} />
//     </section>
//   );
// }
// export default gameList;
