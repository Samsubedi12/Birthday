import React, { useState } from 'react';
import { friendsWishes } from '../data/photoData';

const FriendsWishes = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const handleCardClick = (index) => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(index)) {
      newFlippedCards.delete(index);
    } else {
      newFlippedCards.add(index);
    }
    setFlippedCards(newFlippedCards);
  };

  return (
    <section className="friends-wishes-section section-reveal">
      <h2>Wishes From Your Amazing Friends</h2>
      <div className="wishes-grid">
        {friendsWishes.map((friend, index) => (
          <div 
            key={index} 
            className={`flip-card ${flippedCards.has(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={friend.image} alt={friend.name} />
                <h3>{friend.name}</h3>
              </div>
              <div className="flip-card-back">
                <p>{friend.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FriendsWishes;