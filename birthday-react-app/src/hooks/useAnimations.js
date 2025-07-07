import { useCallback } from 'react';

export const useAnimations = () => {
  // Confetti burst function
  const launchConfettiBurst = useCallback((times = 30) => {
    for (let i = 0; i < times; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10vh';
        confetti.style.background = `hsl(${Math.random()*360}, 80%, 70%)`;
        confetti.style.width = '12px';
        confetti.style.height = '12px';
        confetti.style.borderRadius = '50%';
        confetti.style.opacity = 0.8;
        confetti.style.transform = `rotate(${Math.random()*360}deg)`;
        confetti.style.position = 'fixed';
        confetti.style.zIndex = '1000';
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = `fallAndFade ${Math.random() * 2 + 3}s linear forwards`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
      }, i * 20);
    }
  }, []);

  // Balloon burst function
  const launchBalloonBurst = useCallback((times = 10) => {
    const balloonContainer = document.getElementById('balloon-container') || document.body;
    for (let i = 0; i < times; i++) {
      setTimeout(() => {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 90 + 'vw';
        balloon.style.background = `radial-gradient(circle at 60% 40%, hsl(${Math.random()*360}, 80%, 70%) 60%, #fff 100%)`;
        balloon.style.position = 'fixed';
        balloon.style.bottom = '-100px';
        balloon.style.width = '60px';
        balloon.style.height = '80px';
        balloon.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%';
        balloon.style.animation = 'balloon-float 7s ease-in-out forwards';
        balloon.style.zIndex = '1';
        balloon.style.pointerEvents = 'none';
        balloonContainer.appendChild(balloon);
        setTimeout(() => balloon.remove(), 7000);
      }, i * 80);
    }
  }, []);

  // Firework/sparkle burst function
  const launchFireworkBurst = useCallback((centerX, centerY, times = 18) => {
    for (let i = 0; i < times; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = (centerX + Math.random()*80-40) + 'px';
        sparkle.style.top = (centerY + Math.random()*80-40) + 'px';
        sparkle.style.background = `hsl(${Math.random()*360}, 80%, 90%)`;
        sparkle.style.position = 'fixed';
        sparkle.style.width = '6px';
        sparkle.style.height = '6px';
        sparkle.style.borderRadius = '50%';
        sparkle.style.animation = 'sparkle-fade 0.8s ease-out forwards';
        sparkle.style.zIndex = '1001';
        sparkle.style.pointerEvents = 'none';
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);
      }, i * 20);
    }
  }, []);

  // Create floating heart
  const createFloatingHeart = useCallback((x, y) => {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = '❤️';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.position = 'fixed';
    heart.style.fontSize = '20px';
    heart.style.color = '#ff4081';
    heart.style.animation = 'float-heart 3s ease-in-out forwards';
    heart.style.zIndex = '1001';
    heart.style.pointerEvents = 'none';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }, []);

  return {
    launchConfettiBurst,
    launchBalloonBurst,
    launchFireworkBurst,
    createFloatingHeart
  };
};