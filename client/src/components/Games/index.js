import React from 'react';
import gameList from '../GameList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function gameList(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <GameList category={currentCategory.name} />
    </section>
  );
}
export default gameList;