import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { idbPromise } from "../../utils/helpers";
import { QUERY_GAMES } from "../../utils/queries";
import { UPDATE_GAMES } from "../../utils/actions";
// import {  } from "./GameElements";

function Game() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  const [currentGame, setCurrentGame] = useState({});

  const { loading, data } = useQuery(QUERY_GAMES);

  const { games } = state;
  console.log(state);
  useEffect(() => {
    // already in global store
    if (games.length) {
      setCurrentGame(games.find((game) => game._id === id));
    }
    // retrieved from server
    else if (data) {
        console.log(data);
      dispatch({
        type: UPDATE_GAMES,
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
  console.log(currentGame);
  return (
      <div>
          <p>Field: {currentGame.field.name}</p>
          <p>Time: {currentGame.time}</p>
          <p>Players:</p>
          <ul>
          {currentGame.players.map((player) => (
            <p key={player._id}>
                {player.playerName} - {player.experience}
            </p>
          ))}
          </ul>
      </div>
    // <FieldContainer>
    //   <FieldH1 id="about">{currentField.name}</FieldH1>
    //   <FieldP>Field Type  <br></br>{currentField.fieldType}</FieldP>
    //     <FieldButton id={id} to={"/CreateGame/" + id}>Create New Game</FieldButton>
    //   <Games></Games>
    //   <FieldButton to="/LoggedIn">← Back to the game map</FieldButton>
    // </FieldContainer>
  );
}

export default Game;