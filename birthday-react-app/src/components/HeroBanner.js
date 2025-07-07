import React, { useEffect } from 'react';

const HeroBanner = () => {
  useEffect(() => {
    // Function to create a confetti or love icon particle
    const createParticle = (type) => {
      const heroBanner = document.querySelector('.hero-banner');
      if (!heroBanner) return;

      const particle = document.createElement('div');
      particle.className = type === 'confetti' ? 'confetti-piece' : 'love-cringe-cling';
      heroBanner.appendChild(particle);

      const size = Math.random() * 10 + 5 + 'px'; // 5-15px for confetti
      const iconSize = Math.random() * 30 + 20 + 'px'; // 20-50px for icons

      particle.style.width = type === 'confetti' ? size : iconSize;
      particle.style.height = type === 'confetti' ? size : iconSize;
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      particle.style.opacity = Math.random() * 0.7 + 0.3;
      particle.style.transform = `scale(${Math.random() * 0.8 + 0.2}) rotate(${Math.random() * 360}deg)`;

      if (type === 'confetti') {
        const colors = ['#f8bbd0', '#ff80ab', '#c2185b', '#e040fb'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        particle.style.animation = `fallAndFade ${Math.random() * 5 + 3}s linear infinite`;
      } else { // love-cringe-cling
        const clingyPhrases = [
          "Mine!", "Forever!", "Obsessed ❤️", "Can't live without you!",
          "You're stuck with me 😉", "My favorite human!", "Totally smitten!",
          "Simp for you! (in a good way!)", "Only you!", "Love you to the moon!"
        ];
        const chosenPhrase = clingyPhrases[Math.floor(Math.random() * clingyPhrases.length)];

        particle.textContent = chosenPhrase;
        particle.style.fontSize = Math.random() * 1.2 + 0.8 + 'em';
        particle.style.backgroundColor = 'rgba(255, 240, 245, 0.7)';
        particle.style.padding = '5px 10px';
        particle.style.borderRadius = '15px';
        particle.style.border = '1px solid #c2185b';
        particle.style.color = '#c2185b';
        particle.style.fontWeight = 'bold';
        particle.style.whiteSpace = 'nowrap';
      }
    };

    // Add confetti particles
    const confettiInterval = setInterval(() => {
      createParticle('confetti');
    }, 150);

    // Add love cringe/clings
    const loveInterval = setInterval(() => {
      createParticle('love-cringe-cling');
    }, 400);

    // Cleanup
    return () => {
      clearInterval(confettiInterval);
      clearInterval(loveInterval);
    };
  }, []);

  return (
    <header className="hero-banner">
      <h1>Happy Birthday ROJINA (PUKULI)!</h1>
      <div className="confetti-balloons"></div>
      <div className="love-cringe-clings"></div>
    </header>
  );
};

export default HeroBanner;