import React, { useState, useEffect } from 'react';
import './App.css';
import PinLock from './components/PinLock';
import HeroBanner from './components/HeroBanner';
import AudioPlayer from './components/AudioPlayer';
import MessageSection from './components/MessageSection';
import FriendsWishes from './components/FriendsWishes';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle section reveal animation
  useEffect(() => {
    if (!isUnlocked) return;

    const revealSections = () => {
      const sections = document.querySelectorAll('.section-reveal');
      const windowHeight = window.innerHeight;
      const windowTop = window.pageYOffset;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (windowTop + windowHeight > sectionTop + sectionHeight * 0.1) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', revealSections);
    revealSections(); // Initial check

    return () => window.removeEventListener('scroll', revealSections);
  }, [isUnlocked]);

  // Cursor follower effect
  useEffect(() => {
    if (!isUnlocked) return;

    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    document.body.appendChild(cursorFollower);

    const cursorTextFollower = document.createElement('div');
    cursorTextFollower.className = 'cursor-text-follower';
    cursorTextFollower.textContent = "You're stuck with me! 😉";
    document.body.appendChild(cursorTextFollower);

    const handleMouseMove = (e) => {
      cursorFollower.style.left = `${e.clientX}px`;
      cursorFollower.style.top = `${e.clientY}px`;
      cursorTextFollower.style.left = `${e.clientX}px`;
      cursorTextFollower.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cursorFollower.remove();
      cursorTextFollower.remove();
    };
  }, [isUnlocked]);

  // Balloon container
  useEffect(() => {
    if (!isUnlocked) return;

    const balloonContainer = document.createElement('div');
    balloonContainer.id = 'balloon-container';
    document.body.appendChild(balloonContainer);

    return () => {
      balloonContainer.remove();
    };
  }, [isUnlocked]);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  if (!isUnlocked) {
    return <PinLock onUnlock={handleUnlock} />;
  }

  return (
    <div className="App">
      {/* Scroll Progress Bar */}
      <div 
        id="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Page Loader */}
      <div id="page-loader" style={{ display: 'none' }}>
        <div className="loader"></div>
      </div>

      {/* Hero Banner */}
      <HeroBanner />

      <main>
        {/* Audio Section */}
        <AudioPlayer />

        {/* Special Message Section */}
        <MessageSection />

        {/* Love Meter Section */}
        <section className="love-meter-section section-reveal">
          <h2>How Much I Love You!</h2>
          <div className="love-meter-container">
            <div 
              className="love-meter-fill" 
              id="loveMeterFill"
              style={{ width: '100%' }}
            ></div>
          </div>
          <p className="love-meter-message" id="loveMeterMessage">
            Infinite! Beyond measurement! ∞❤️
          </p>
        </section>

        {/* Love Reasons Bubbles Section */}
        <section className="love-reasons-section section-reveal">
          <h2>ROJI Here's Why I Love You!</h2>
          <p>Click on the bubbles to reveal a special reason!</p>
          <div className="love-reasons-grid">
            {[
              { emoji: '😁', reason: 'Your infectious laugh.' },
              { emoji: '💖', reason: 'Your kindness to everyone.' },
              { emoji: '😋', reason: 'Your amazing cooking(which i still haven\'t tried yet!)' },
              { emoji: '🗺️', reason: 'Your adventurous spirit.' },
              { emoji: '✨', reason: 'The way you light up a room.' },
              { emoji: '🧠', reason: 'Your brilliant mind.' },
              { emoji: '😂', reason: 'Our inside jokes.' },
              { emoji: '🤗', reason: 'Your comforting hugs.' },
              { emoji: '🌟', reason: 'You\'re just... YOU!' }
            ].map((item, index) => (
              <div 
                key={index}
                className="reason-bubble" 
                data-reason={item.reason}
                aria-label="Reveal reason"
                onClick={(e) => {
                  alert(item.reason);
                }}
              >
                {item.emoji}
              </div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section className="video-section section-reveal">
          <h2>A Video Just For You</h2>
          <div className="video-container">
            <video controls preload="metadata" poster="https://via.placeholder.com/400x700/DDA0DD/FFFFFF?text=Video+Thumbnail">
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Gift Section */}
        <section className="gift-section section-reveal">
          <h2>Your Special Birthday Gift!</h2>
          <p>Go ahead, open it!</p>
          <div className="gift-box" id="giftBox"></div>
          <button 
            className="open-gift-btn" 
            onClick={() => {
              const giftContent = document.getElementById('giftContent');
              const giftBox = document.getElementById('giftBox');
              if (giftContent && giftBox) {
                giftBox.classList.add('open');
                giftContent.classList.remove('hidden');
              }
            }}
          >
            Open Gift
          </button>
          <div className="gift-content hidden" id="giftContent">
            <p>Surprise! My biggest gift to you is all my love, wrapped up in this page! 💕</p>
          </div>
        </section>

        {/* Friends' Wishes Section */}
        <FriendsWishes />
      </main>

      {/* Footer */}
      <footer>
        <div id="end-message" style={{display:'none'}}></div>
        <p>&copy; 2025 Happy Birthday! Made with ❤️ by Your PUKULE</p>
      </footer>
    </div>
  );
}

export default App;
