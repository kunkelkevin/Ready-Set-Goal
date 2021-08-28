import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

function GameCard(item) {
  const { field, time, description, playerCount } = item;

  return (
    <section className="card">
      <p>Field: {field}</p>
      <p>Time: {time}</p>
      <p>Description: {description}</p>
      <p>Player Count ({playerCount})</p>
    </section>
  );
}

export default GameCard;
