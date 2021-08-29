import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_ME } from "../../utils/queries";
import {
  ADD_PLAYER_TO_GAME,
  REMOVE_PLAYER_FROM_GAME,
  REMOVE_GAME,
} from "../../utils/mutations";

function GameCard(item) {
  const { _id, field, time, players, description, playerCount } = item;
  const { loading, data } = useQuery(QUERY_ME);

  const [joinedGame, setJoinedGame] = useState(false);
  const [currentCount, setCurrentCount] = useState(playerCount);

  const [addPlayerToGame] = useMutation(ADD_PLAYER_TO_GAME);
  const [removePlayerFromGame] = useMutation(REMOVE_PLAYER_FROM_GAME);
  const [removeGame] = useMutation(REMOVE_GAME);

  const joinOrDrop = async (event) => {
    // event.preventDefault();
    if (joinedGame) {
      setCurrentCount(currentCount - 1);
      await removePlayerFromGame({
        variables: {
          _id: event.target.id,
          player: data.me._id,
        },
      });
    } else {
      setCurrentCount(currentCount + 1);
      await addPlayerToGame({
        variables: {
          _id: event.target.id,
          player: data.me._id,
        },
      });
    }
    setJoinedGame(!joinedGame);
  };

  const deleteGame = async (event) => {
    await removeGame({
      variables: {
        _id: event.target.id,
      },
    });
    window.location.reload();
  };

  useEffect(() => {
    if (data) {
      const playerIds = players.map((player) => player._id);
      setJoinedGame(playerIds.includes(data.me._id));
    }
  }, [data, setJoinedGame, setCurrentCount]);

  return (
    <section className="card">
      <p>Field: {field}</p>
      <p>Time: {time}</p>
      <p>Description: {description}</p>
      <p>Player Count ({currentCount})</p>
      <button id={_id} onClick={joinOrDrop}>
        {joinedGame ? "Dropout" : "Join"}
      </button>
      <button id={_id} onClick={deleteGame}>
        Delete Game
      </button>
    </section>
  );
}

export default GameCard;
