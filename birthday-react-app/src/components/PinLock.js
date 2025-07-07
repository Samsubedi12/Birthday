import React, { useState, useEffect } from 'react';
import { useAnimations } from '../hooks/useAnimations';

const PinLock = ({ onUnlock }) => {
  const [pin, setPin] = useState('');
  const [showError, setShowError] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { launchConfettiBurst, launchBalloonBurst } = useAnimations();
  
  const correctPin = '25'; // The secret PIN: number of days you are older

  const handleSubmit = () => {
    if (pin === correctPin) {
      setIsVisible(false);
      // Launch celebration animations
      launchConfettiBurst(40);
      launchBalloonBurst(12);
      
      // Delay to let animations start before unlocking
      setTimeout(() => {
        onUnlock();
      }, 500);
    } else {
      setShowError(true);
      setPin('');
      // Hide error after 3 seconds
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    // Prevent scrolling on the main body until unlocked
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div id="pin-overlay" style={{ opacity: isVisible ? 1 : 0 }}>
      <h2>Enter the Secret Code!</h2>
      <p id="pin-hint">Hint: It's the number of days you are older than me 😉</p>
      <input
        type="number"
        id="pin-input"
        placeholder="Your guess..."
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        onKeyPress={handleKeyPress}
        autoFocus
      />
      <button id="pin-submit-btn" onClick={handleSubmit}>
        Unlock My Love!
      </button>
      {showError && (
        <p id="pin-error-message" style={{ display: 'block' }}>
          Nope! Try again, my clever PUKULI!
        </p>
      )}
    </div>
  );
};

export default PinLock;