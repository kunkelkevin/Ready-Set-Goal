import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import Modal from '../Modal';

React.useEffect(() => checkForGames(),[])

const checkForGames = ({
  $.ajax("/api/games/"{
  type: "GET"
  }).then(
  function(games) {
  setCurrentGameList(games)
  }
);

const [currentGameList, setCurrentGameList] = useState([]);

searchGames = query => {
  API.search(query).then(res =>)
}

router.get() 
  db.games.findAll({
    
  })

const GameList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentGame, setCurrentGame] = useState([]);

  const [games] = useState([
    {
      name: '',
      category: '',
      description: '',
    },
    {
      name: '',
      category: '',
      description:'',
    },
    {
      name:'',
      category:'',
      description:'',
    },
  ]);

  const currentGames = photos.filter((games) => games.category === category);

  const toggleModal = (image, i) => {
    setCurrentGame({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

console.log(category)

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentGames={currentGameList} />}
      <div className="flex-row">
        {currentGames.map((image, i) => (
          <img
          //insert cards//
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default GameList;