import React, { useState } from 'react';
import Modal from '../Modal';

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
      {isModalOpen && <Modal onClose={toggleModal} currentGame={currentGame} />}
      <div className="flex-row">
        {currentGames.map((image, i) => (
          <img
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