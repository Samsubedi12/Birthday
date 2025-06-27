// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    // --- PIN Lock Feature ---
    // Handles the secret code overlay and unlocking the page
    const correctPin = '25'; // The secret PIN: number of days you are older
    const pinOverlay = document.getElementById('pin-overlay');
    const pinInput = document.getElementById('pin-input');
    const pinSubmitBtn = document.getElementById('pin-submit-btn');
    const pinErrorMessage = document.getElementById('pin-error-message');

    // Confetti burst function
    function launchConfettiBurst(times = 30) {
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
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 3000);
            }, i * 20);
        }
    }
    // Balloon burst function
    function launchBalloonBurst(times = 10) {
        const balloonContainer = document.getElementById('balloon-container');
        for (let i = 0; i < times; i++) {
            setTimeout(() => {
                const balloon = document.createElement('div');
                balloon.className = 'balloon';
                balloon.style.left = Math.random() * 90 + 'vw';
                balloon.style.background = `radial-gradient(circle at 60% 40%, hsl(${Math.random()*360}, 80%, 70%) 60%, #fff 100%)`;
                balloonContainer.appendChild(balloon);
                setTimeout(() => balloon.remove(), 7000);
            }, i * 80);
        }
    }
    // Firework/sparkle burst function
    function launchFireworkBurst(centerX, centerY, times = 18) {
        for (let i = 0; i < times; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = (centerX + Math.random()*80-40) + 'px';
                sparkle.style.top = (centerY + Math.random()*80-40) + 'px';
                sparkle.style.background = `hsl(${Math.random()*360}, 80%, 90%)`;
                sparkle.style.borderRadius = '50%';
                document.body.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 800);
            }, i * 20);
        }
    }

    // Function to check if the entered PIN is correct
    function checkPin() {
        if (pinInput.value === correctPin) {
            pinOverlay.style.opacity = '0'; // Fade out
            setTimeout(() => {
                pinOverlay.style.display = 'none'; // Hide after fade
                initializePageFeatures(); // Initialize all other page features
                launchConfettiBurst(40); // Confetti burst on unlock
                launchBalloonBurst(12); // Balloons on unlock
            }, 500); // Match fade duration
        } else {
            pinErrorMessage.style.display = 'block'; // Show error message
            pinInput.value = ''; // Clear input
            pinInput.focus(); // Keep focus on input
        }
    }

    // Event listeners for PIN submit button and Enter key
    pinSubmitBtn.addEventListener('click', checkPin);
    pinInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPin();
        }
    });

    // Prevent scrolling on the main body until unlocked
    document.body.style.overflow = 'hidden';

    // --- Encapsulate all existing page features into an initialization function ---
    function initializePageFeatures() {
        document.body.style.overflow = ''; // Allow scrolling once unlocked

        // --- 1. Personalized Audio-Visual Storytelling ---
        // Handles background music play/pause and volume
        const backgroundAudio = document.getElementById('background-audio');
        const playPauseBtn = document.getElementById('play-pause-btn');
        const volumeSlider = document.getElementById('volume-slider');

        // Set initial volume
        backgroundAudio.volume = volumeSlider.value;

        playPauseBtn.addEventListener('click', () => {
            if (backgroundAudio.paused) {
                backgroundAudio.play();
                playPauseBtn.textContent = 'Pause Our Song \u23f8\ufe0f';
            } else {
                backgroundAudio.pause();
                playPauseBtn.textContent = 'Play Our Song \ud83c\udfb6';
            }
        });

        volumeSlider.addEventListener('input', () => {
            backgroundAudio.volume = volumeSlider.value;
        });

        // Optional: Voiceover integration (uncomment and personalize)
        // const voiceoverMessageBtn = document.getElementById('voiceover-message-btn');
        // const messageVoiceover = new Audio('YOUR_MESSAGE_VOICEOVER.mp3'); // REPLACE THIS
        // if (voiceoverMessageBtn) {
        //     voiceoverMessageBtn.addEventListener('click', () => {
        //         if (messageVoiceover.paused) {
        //             messageVoiceover.play();
        //             voiceoverMessageBtn.textContent = '\u23f8\ufe0f Pause Message';
        //             backgroundAudio.volume = 0.2; // Lower background music
        //         } else {
        //             messageVoiceover.pause();
        //             voiceoverMessageBtn.textContent = '\u25b6\ufe0f Listen to My Message';
        //             backgroundAudio.volume = volumeSlider.value; // Restore background music volume
        //         }
        //     });
        // }

        // --- Dynamic Photo Grid with Interactive Filters/Effects ---
        // Handles the interactive photo gallery and filtering
        const dynamicPhotoGrid = document.getElementById('dynamicPhotoGrid');
        const filterButtons = document.querySelectorAll('.filter-buttons button');
        const photoData = [
            // IMPORTANT: Replace these with your actual photo paths and details
            { src: 'journey/firstdate.jpg', alt: 'Our First Date', description: 'This is from our very first date! I remember how nervous I was, but your smile made everything feel so easy. It was the start of something truly special.', categories: ['love', 'memories'], voiceover: 'VOICEOVER_FIRST_DATE.mp3' }, // Add voiceover path if desired
            { src: 'journey/adventure.jpg', alt: 'Adventure Time', description: 'Remember this adventure? You were so brave and adventurous, and I just loved watching you light up. Every moment with you is an an adventure!', categories: ['fun', 'travel', 'memories'], voiceover: 'VOICEOVER_ADVENTURE.mp3' },
            { src: 'journey/cozynight.jpg', alt: 'Cozy Nights In', description: 'And then there are these quiet, cozy nights. They\'re just as precious, if not more. Being with you, no matter what we\'re doing, is my favorite place to be.', categories: ['love', 'fun', 'memories'] },
            { src: 'journey/future.jpg', alt: 'Our Future', description: 'Looking at all our memories, I\'m just so excited for all the new ones we\'ll create together. Here\'s to us, and to forever!(Made by AI but soon it will be real)', categories: ['love', 'memories'] },
            { src: 'journey/laughter.jpg', alt: 'Laughing Out Loud', description: 'Your laugh is my favorite sound in the world. This photo captures one of those moments perfectly.', categories: ['fun', 'love'] },
            { src: 'journey/foodie.jpg', alt: 'Foodie Adventures', description: 'Our quest for the best [type of food] led us here! So many delicious memories with you.', categories: ['fun', 'food'] },
            // Add more photos with their details and categories
        ];

        // Function to render photos based on selected filter
        function renderPhotos(filter = 'all') {
            dynamicPhotoGrid.innerHTML = ''; // Clear existing photos
            const filteredPhotos = photoData.filter(photo =>
                filter === 'all' || photo.categories.includes(filter)
            );

            filteredPhotos.forEach(photo => {
                const photoCard = document.createElement('div');
                photoCard.className = 'photo-card';
                photoCard.innerHTML = `
                    <img src="${photo.src}" alt="${photo.alt}">
                    <div class="photo-card-info">
                        <h3>${photo.alt}</h3>
                        <p>${photo.description}</p>
                    </div>
                `;
                // Add click listener for lightbox
                photoCard.addEventListener('click', () => openLightbox(photo));
                dynamicPhotoGrid.appendChild(photoCard);
            });
        }

        // Initial render of all photos
        renderPhotos('all');

        // Filter button functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                renderPhotos(button.dataset.filter);
            });
        });

        // Lightbox functionality (re-using existing structure)
        const lightboxOverlay = document.getElementById('lightboxOverlay');
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxDescription = document.getElementById('lightboxDescription');
        const lightboxClose = document.getElementById('lightboxClose');
        // const voiceoverPhotoBtn = document.getElementById('voiceover-photo-btn'); // For optional photo voiceovers
        let currentPhotoVoiceover = null;

        // Function to open the lightbox with the selected photo
        function openLightbox(photo) {
            lightboxImage.src = photo.src;
            lightboxImage.alt = photo.alt;
            lightboxDescription.textContent = photo.description;
            lightboxOverlay.classList.add('active');

            // Handle optional photo voiceover
            // if (photo.voiceover) {
            //     voiceoverPhotoBtn.style.display = 'block';
            //     if (currentPhotoVoiceover) {
            //         currentPhotoVoiceover.pause();
            //         currentPhotoVoiceover.currentTime = 0;
            //     }
            //     currentPhotoVoiceover = new Audio(photo.voiceover);
            //     voiceoverPhotoBtn.onclick = () => {
            //         if (currentPhotoVoiceover.paused) {
            //             currentPhotoVoiceover.play();
            //             voiceoverPhotoBtn.textContent = '\u23f8\ufe0f Pause Story';
            //             backgroundAudio.volume = 0.2; // Lower background music
            //         } else {
            //             currentPhotoVoiceover.pause();
            //             voiceoverPhotoBtn.textContent = '\u25b6\ufe0f Listen to Story';
            //             backgroundAudio.volume = volumeSlider.value; // Restore background music
            //         }
            //     };
            // } else {
            //     voiceoverPhotoBtn.style.display = 'none';
            //     if (currentPhotoVoiceover) {
            //         currentPhotoVoiceover.pause();
            //         currentPhotoVoiceover.currentTime = 0;
            //     }
            //     currentPhotoVoiceover = null;
            // }
        }

        // Event listeners to close the lightbox
        lightboxClose.addEventListener('click', () => {
            lightboxOverlay.classList.remove('active');
            // if (currentPhotoVoiceover) {
            //     currentPhotoVoiceover.pause();
            //     currentPhotoVoiceover.currentTime = 0;
            //     backgroundAudio.volume = volumeSlider.value;
            // }
        });

        lightboxOverlay.addEventListener('click', (e) => {
            if (e.target === lightboxOverlay) {
                lightboxOverlay.classList.remove('active');
                // if (currentPhotoVoiceover) {
                //     currentPhotoVoiceover.pause();
                //     currentPhotoVoiceover.currentTime = 0;
                //     backgroundAudio.volume = volumeSlider.value;
                // }
            }
        });

        // --- Confetti & Love Cringe/Clings Animation ---
        // Creates animated confetti and love icons in the hero banner
        const heroBanner = document.querySelector('.hero-banner');

        // Function to create a confetti or love icon particle
        function createParticle(type) {
            const particle = document.createElement('div');
            particle.className = type === 'confetti' ? 'confetti-piece' : 'love-cringe-cling';
            heroBanner.appendChild(particle);

            const size = Math.random() * 10 + 5 + 'px'; // 5-15px for confetti
            const iconSize = Math.random() * 30 + 20 + 'px'; // 20-50px for icons

            particle.style.width = type === 'confetti' ? size : iconSize;
            particle.style.height = type === 'confetti' ? size : iconSize;
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = Math.random() * 100 + 'vh'; // Start anywhere
            particle.style.opacity = Math.random() * 0.7 + 0.3; // 0.3 - 1
            particle.style.transform = `scale(${Math.random() * 0.8 + 0.2}) rotate(${Math.random() * 360}deg)`;

            // Apply specific styles based on type
            if (type === 'confetti') {
                const colors = ['#f8bbd0', '#ff80ab', '#c2185b', '#e040fb']; // Pink hues
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px'; // Circles or squares
                particle.style.animation = `fallAndFade ${Math.random() * 5 + 3}s linear infinite`; // 3-8s
            } else { // love-cringe-cling
                const clingyPhrases = [
                    "Mine!", "Forever!", "Obsessed ❤️", "Can't live without you!",
                    "You're stuck with me 😉", "My favorite human!", "Totally smitten!",
                    "Simp for you! (in a good way!)", "Only you!", "Love you to the moon!"
                ];
                const chosenPhrase = clingyPhrases[Math.floor(Math.random() * clingyPhrases.length)];

                particle.textContent = chosenPhrase;
                particle.style.fontSize = Math.random() * 1.2 + 0.8 + 'em'; // 0.8em to 2em
                particle.style.backgroundColor = 'rgba(255, 240, 245, 0.7)'; /* Light pink background */
                particle.style.padding = '5px 10px';
                particle.style.borderRadius = '15px';
                particle.style.border = '1px solid #c2185b';
                particle.style.color = '#c2185b';
                particle.style.fontWeight = 'bold';
                particle.style.whiteSpace = 'nowrap'; /* Keep phrases on one line */
            }
        }

        // Add confetti
        for (let i = 0; i < 50; i++) { // 50 confetti pieces
            setTimeout(() => createParticle('confetti'), Math.random() * 3000);
        }
        // Add love cringe/clings (e.g., hearts)
        for (let i = 0; i < 20; i++) { // 20 hearts/icons
            setTimeout(() => createParticle('love-cringe-cling'), Math.random() * 5000);
        }

        // --- Interactive Hover/Press for Flip Cards (for touch devices) ---
        const flipCards = document.querySelectorAll('.flip-card');

        flipCards.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('flipped'); // Toggle a class for flipping
            });
            // For non-touch devices, CSS :hover handles it.
            // For touch, the 'click' event acts as a toggle.
        });

        // --- Cursor Follower Animation ---
        const cursorFollower = document.querySelector('.cursor-follower');
        const cursorTextFollower = document.querySelector('.cursor-text-follower');

        document.addEventListener('mousemove', (e) => {
            cursorFollower.style.left = `${e.clientX}px`;
            cursorFollower.style.top = `${e.clientY}px`;
            cursorTextFollower.style.left = `${e.clientX}px`;
            cursorTextFollower.style.top = `${e.clientY}px`;
        });

        // --- "Miss You Already" Pop-Up (When Trying to Leave) ---
        window.addEventListener('beforeunload', (event) => {
            const messages = [
                "Wait! Don't leave me! My heart will break! 💔",
                "Are you sure you want to go? I'll miss you already!",
                "Nooooo! Just one more second! (or forever?) 😉",
                "You can't escape my love! Come back! 😂"
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];

            // Standard for modern browsers to prevent custom message display directly
            event.returnValue = randomMessage; // For some older browsers
            return randomMessage; // For modern browsers
        });

        // --- Birthday Game: "Catch the Falling Wishes" ---
        const gameArea = document.getElementById('gameArea');
        const basket = document.getElementById('basket');
        const scoreDisplay = document.getElementById('score');
        const timeDisplay = document.getElementById('time');
        const startGameBtn = document.getElementById('startGameBtn');
        const gameOverlay = document.getElementById('gameOverlay');
        const overlayMessage = document.getElementById('overlayMessage');

        let score = 0;
        let timeLeft = 30;
        let gameInterval;
        let itemFallInterval;
        let gameRunning = false;
        let itemFallSpeed = 0.7; // Slower initial speed for easier game

        // Add bonus items and more fun emojis
        const fallingItems = [
            '🎁', '🎂', '💖', '🎉', '🎈', '✨', '👑', '🥂', '🥳',
            '🍬', '🍭', '🍫', '🍦', '🧸', '🦄', '⭐', '🎵', '🎀',
            { emoji: '🌟', bonus: true } // Bonus item
        ];

        // Fun sound for catching items
        const catchSound = new Audio('https://cdn.pixabay.com/audio/2022/07/26/audio_124bfa4c3e.mp3');
        catchSound.volume = 0.4;

        function startGame() {
            score = 0;
            timeLeft = 30;
            itemFallSpeed = 0.7; // Reset speed
            scoreDisplay.textContent = score;
            timeDisplay.textContent = timeLeft;
            gameRunning = true;
            gameOverlay.classList.add('hidden');
            basket.style.left = '50%'; // Reset basket position

            // Clear any existing items
            gameArea.querySelectorAll('.falling-item').forEach(item => item.remove());

            gameInterval = setInterval(gameLoop, 1000); // Update every second
            itemFallInterval = setInterval(createFallingItem, 700); // More frequent items
        }

        function endGame() {
            gameRunning = false;
            clearInterval(gameInterval);
            clearInterval(itemFallInterval);
            overlayMessage.textContent = `Game Over! Your score: ${score}!`;
            startGameBtn.textContent = "Play Again?";
            gameOverlay.classList.remove('hidden');
            // Remove all falling items
            gameArea.querySelectorAll('.falling-item').forEach(item => item.remove());
        }

        function gameLoop() {
            timeLeft--;
            timeDisplay.textContent = timeLeft;

            // Increase fall speed over time, but more gently
            if (timeLeft % 10 === 0 && timeLeft > 0) { // Every 10 seconds
                itemFallSpeed += 0.2;
            }

            if (timeLeft <= 0) {
                endGame();
            }
        }

        function createFallingItem() {
            if (!gameRunning) return;

            let itemData = fallingItems[Math.floor(Math.random() * fallingItems.length)];
            let isBonus = false;
            let emoji = itemData;
            if (typeof itemData === 'object') {
                emoji = itemData.emoji;
                isBonus = itemData.bonus;
            }

            const item = document.createElement('div');
            item.className = 'falling-item';
            item.textContent = emoji;
            if (isBonus) item.style.backgroundColor = '#ffe066'; // Highlight bonus
            if (isBonus) item.style.boxShadow = '0 0 20px 5px #ffe066';

            const startLeft = Math.random() * (gameArea.offsetWidth - 40);
            item.style.left = `${startLeft}px`;

            gameArea.appendChild(item);

            let currentTop = -50;
            const individualFallSpeed = Math.random() * 1.2 + itemFallSpeed; // Slower, easier
            const animationInterval = setInterval(() => {
                currentTop += individualFallSpeed;
                item.style.top = `${currentTop}px`;

                const basketRect = basket.getBoundingClientRect();
                const itemRect = item.getBoundingClientRect();
                const gameAreaRect = gameArea.getBoundingClientRect();

                // Collision detection
                if (currentTop + item.offsetHeight >= (basketRect.top - gameAreaRect.top) &&
                    itemRect.left < (basketRect.right - gameAreaRect.left) &&
                    itemRect.right > (basketRect.left - gameAreaRect.left)) {
                    // Caught!
                    if (isBonus) {
                        score += 5; // Bonus points
                        item.animate([
                            { transform: 'scale(1)', backgroundColor: '#ffe066' },
                            { transform: 'scale(1.5)', backgroundColor: '#fff700' },
                            { transform: 'scale(0)', backgroundColor: '#ffe066' }
                        ], { duration: 400 });
                    } else {
                        score++;
                        item.animate([
                            { transform: 'scale(1)' },
                            { transform: 'scale(1.3)' },
                            { transform: 'scale(0)' }
                        ], { duration: 300 });
                    }
                    scoreDisplay.textContent = score;
                    catchSound.currentTime = 0;
                    catchSound.play();
                    setTimeout(() => item.remove(), 250);
                    clearInterval(animationInterval);

                    // Add sparkle/heart
                    const sparkle = document.createElement('div');
                    sparkle.className = 'catch-sparkle';
                    sparkle.textContent = emoji;
                    sparkle.style.left = (item.offsetLeft + 20) + 'px';
                    sparkle.style.top = (item.offsetTop - 10) + 'px';
                    gameArea.appendChild(sparkle);
                    setTimeout(() => sparkle.remove(), 800);
                    // Animate score pop
                    scoreDisplay.classList.add('pop');
                    setTimeout(() => scoreDisplay.classList.remove('pop'), 400);
                } else if (currentTop > gameArea.offsetHeight) {
                    // Missed!
                    item.remove();
                    clearInterval(animationInterval);
                }
            }, 20);
        }

        // Make basket bigger for easier play
        basket.style.width = '140px';
        basket.style.height = '80px';

        // Basket movement
        gameArea.addEventListener('mousemove', (e) => {
            if (!gameRunning) return;
            const gameAreaRect = gameArea.getBoundingClientRect();
            let newBasketX = e.clientX - gameAreaRect.left - (basket.offsetWidth / 2);

            // Keep basket within game area bounds
            if (newBasketX < 0) newBasketX = 0;
            if (newBasketX > gameArea.offsetWidth - basket.offsetWidth) {
                newBasketX = gameArea.offsetWidth - basket.offsetWidth;
            }
            basket.style.left = `${newBasketX}px`;
        });

        // Touch support for basket movement
        gameArea.addEventListener('touchmove', (e) => {
            if (!gameRunning) return;
            e.preventDefault(); // Prevent scrolling
            const gameAreaRect = gameArea.getBoundingClientRect();
            const touch = e.touches[0];
            let newBasketX = touch.clientX - gameAreaRect.left - (basket.offsetWidth / 2);

            if (newBasketX < 0) newBasketX = 0;
            if (newBasketX > gameArea.offsetWidth - basket.offsetWidth) {
                newBasketX = gameArea.offsetWidth - basket.offsetWidth;
            }
            basket.style.left = `${newBasketX}px`;
        }, { passive: false }); // passive: false for preventDefault

        startGameBtn.addEventListener('click', startGame);

        // --- Love Meter ---
        const loveMeterFill = document.getElementById('loveMeterFill');
        const loveMeterMessage = document.getElementById('loveMeterMessage');
        const loveMessages = [
            "Just starting to feel it...",
            "Warming up!",
            "Getting stronger!",
            "Almost full!",
            "Bursting with love for you! ❤️"
        ];
        let messageIndex = 0;
        let loveMeterAnimated = false;

        function fillLoveMeter() {
            let width = 0;
            loveMeterMessage.style.opacity = 0;
            const interval = setInterval(() => {
                if (width >= 100) {
                    clearInterval(interval);
                    loveMeterMessage.textContent = loveMessages[4]; // Final message
                    loveMeterMessage.style.opacity = 1;
                    // Firework/sparkle burst at the end
                    const rect = loveMeterFill.getBoundingClientRect();
                    launchFireworkBurst(rect.left + rect.width/2, rect.top + rect.height/2, 24);
                    // Heart at the end
                    const heart = document.createElement('div');
                    heart.textContent = '💖';
                    heart.style.position = 'fixed';
                    heart.style.left = (rect.left + rect.width/2) + 'px';
                    heart.style.top = (rect.top - 30) + 'px';
                    heart.style.fontSize = '2.5em';
                    heart.style.zIndex = 3000;
                    heart.style.opacity = 1;
                    heart.style.transition = 'opacity 1.2s, transform 1.2s';
                    document.body.appendChild(heart);
                    setTimeout(() => { heart.style.opacity = 0; heart.style.transform = 'translateY(-60px) scale(1.5)'; }, 100);
                    setTimeout(() => heart.remove(), 1400);
                } else {
                    width += 1;
                    loveMeterFill.style.width = `${width}%`;
                    if (width % 20 === 0 && messageIndex < loveMessages.length - 1) {
                        messageIndex++;
                        loveMeterMessage.style.opacity = 0;
                        setTimeout(() => {
                            loveMeterMessage.textContent = loveMessages[messageIndex];
                            loveMeterMessage.style.opacity = 1;
                        }, 200);
                    }
                }
            }, 40); // Slower fill for dramatic effect
        }
        // fillLoveMeter(); // Start filling on page load (removed)

        // Animate love meter only when in view
        const loveMeterSection = document.querySelector('.love-meter-section');
        if (loveMeterSection) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !loveMeterAnimated) {
                        loveMeterAnimated = true;
                        fillLoveMeter();
                        observer.unobserve(loveMeterSection);
                    }
                });
            }, { threshold: 0.4 }); // 40% visible
            observer.observe(loveMeterSection);
        }

        // --- Reasons I Love You Bubbles ---
        const reasonBubbles = document.querySelectorAll('.reason-bubble');
        reasonBubbles.forEach(bubble => {
            let currentContent = bubble.textContent;
            const actualReason = bubble.dataset.reason; // Get the hidden reason

            bubble.addEventListener('click', () => {
                if (bubble.textContent === currentContent) {
                    bubble.textContent = actualReason; // Show reason
                    bubble.style.backgroundColor = '#c2185b';
                    bubble.style.color = 'white';
                } else {
                    bubble.textContent = currentContent; // Hide reason, back to emoji
                    bubble.style.backgroundColor = '#ffeff5';
                    bubble.style.color = '#c2185b';
                }
            });
        });

        // --- Open Gift Feature ---
        const giftBox = document.getElementById('giftBox');
        const openGiftBtn = document.getElementById('openGiftBtn');
        const giftContent = document.getElementById('giftContent');

        // Add shake/bounce to open-gift-btn before click
        if (openGiftBtn) {
            setInterval(() => {
                if (!openGiftBtn.disabled && !openGiftBtn.classList.contains('shake')) {
                    openGiftBtn.classList.add('shake');
                    setTimeout(() => openGiftBtn.classList.remove('shake'), 700);
                }
            }, 4000);
        }

        openGiftBtn.addEventListener('click', () => {
            giftBox.classList.add('open'); // Trigger gift box animation
            openGiftBtn.disabled = true; // Disable button
            launchConfettiBurst(40); // Confetti burst on gift open
            launchBalloonBurst(12); // Balloons on gift open

            setTimeout(() => {
                giftBox.style.display = 'none'; // Hide the box completely
                giftContent.classList.remove('hidden'); // Show the gift message
            }, 800); // Match animation duration
        });

        // --- 3. Build-Your-Own-Wish / Dream Board ---
        const dreamBoardArea = document.getElementById('dream-board-area');
        const stickerPalette = document.getElementById('stickerPalette');
        const stickers = [
            '✈️', '🏠', '🎶', '📚', '🍕', '🥂', '💖', '💡', '🌟', '🧘‍♀️' // Add more emojis!
        ];

        // Populate sticker palette
        stickers.forEach(emoji => {
            const stickerItem = document.createElement('div');
            stickerItem.className = 'sticker-item';
            stickerItem.textContent = emoji;
            stickerItem.draggable = true; // Make them draggable
            stickerPalette.appendChild(stickerItem);
        });

        let draggedSticker = null;

        stickerPalette.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('sticker-item')) {
                draggedSticker = e.target;
                e.dataTransfer.setData('text/plain', e.target.textContent); // Store emoji
                // Create a clone for dragging, so original stays in palette
                const clone = e.target.cloneNode(true);
                clone.style.position = 'absolute';
                clone.style.left = '-9999px'; // Hide clone initially
                document.body.appendChild(clone);
                e.dataTransfer.setDragImage(clone, clone.offsetWidth / 2, clone.offsetHeight / 2);
                setTimeout(() => clone.remove(), 0); // Remove clone after drag image is set
            }
        });

        dreamBoardArea.addEventListener('dragover', (e) => {
            e.preventDefault(); // Allow drop
        });

        dreamBoardArea.addEventListener('drop', (e) => {
            e.preventDefault();
            if (draggedSticker) {
                const newSticker = document.createElement('div');
                newSticker.className = 'sticker-item placed';
                newSticker.textContent = draggedSticker.textContent;
                
                // Position based on mouse drop relative to dreamBoardArea
                const rect = dreamBoardArea.getBoundingClientRect();
                let x = e.clientX - rect.left - (newSticker.offsetWidth / 2);
                let y = e.clientY - rect.top - (newSticker.offsetHeight / 2);

                // Ensure sticker stays within bounds
                x = Math.max(0, Math.min(x, rect.width - newSticker.offsetWidth));
                y = Math.max(0, Math.min(y, rect.height - newSticker.offsetHeight));

                newSticker.style.left = `${x}px`;
                newSticker.style.top = `${y}px`;
                newSticker.style.position = 'absolute'; // Ensure absolute positioning

                const textInput = document.createElement('input');
                textInput.type = 'text';
                textInput.placeholder = 'My wish...';
                textInput.className = 'sticker-text-input';
                newSticker.appendChild(textInput);

                dreamBoardArea.appendChild(newSticker);
                draggedSticker = null; // Reset dragged sticker

                // Make placed stickers draggable
                makeDraggable(newSticker);
            }
        });

        function makeDraggable(element) {
            let isDragging = false;
            let offsetX, offsetY;

            element.addEventListener('mousedown', (e) => {
                isDragging = true;
                offsetX = e.clientX - element.getBoundingClientRect().left;
                offsetY = e.clientY - element.getBoundingClientRect().top;
                element.style.cursor = 'grabbing';
            });

            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;

                const rect = dreamBoardArea.getBoundingClientRect();
                let newX = e.clientX - rect.left - offsetX;
                let newY = e.clientY - rect.top - offsetY;

                // Constrain within dreamBoardArea
                newX = Math.max(0, Math.min(newX, rect.width - element.offsetWidth));
                newY = Math.max(0, Math.min(newY, rect.height - element.offsetHeight));

                element.style.left = `${newX}px`;
                element.style.top = `${newY}px`;
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
                element.style.cursor = 'move';
            });
        }

        // --- VIRTUAL FIREWORKS & ANIMATED PET ---
        // Fireworks logic
        const fireworksCanvas = document.getElementById('fireworks-canvas');
        const ctx = fireworksCanvas.getContext('2d');
        let fireworksActive = false;
        let fireworksParticles = [];
        function resizeFireworksCanvas() {
            fireworksCanvas.width = window.innerWidth;
            fireworksCanvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeFireworksCanvas);
        resizeFireworksCanvas();

        function randomColor() {
            const colors = ['#ff80ab', '#f8bbd0', '#c2185b', '#e040fb', '#fff700', '#ffb347', '#7cf6ff', '#ffffff'];
            return colors[Math.floor(Math.random() * colors.length)];
        }
        function launchFirework(x, y) {
            const count = 32 + Math.floor(Math.random() * 16);
            for (let i = 0; i < count; i++) {
                const angle = (Math.PI * 2 * i) / count;
                const speed = 2 + Math.random() * 3;
                fireworksParticles.push({
                    x, y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    alpha: 1,
                    color: randomColor(),
                    size: 2 + Math.random() * 2
                });
            }
        }
        function animateFireworks() {
            ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
            fireworksParticles.forEach(p => {
                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });
            fireworksParticles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.03; // gravity
                p.alpha -= 0.012 + Math.random() * 0.01;
            });
            fireworksParticles = fireworksParticles.filter(p => p.alpha > 0);
            if (fireworksParticles.length > 0) {
                requestAnimationFrame(animateFireworks);
            } else {
                fireworksCanvas.style.display = 'none';
                fireworksActive = false;
            }
        }
        function triggerFireworks(centerX, centerY) {
            fireworksCanvas.style.display = 'block';
            fireworksActive = true;
            for (let i = 0; i < 3 + Math.floor(Math.random() * 2); i++) {
                const x = centerX || Math.random() * fireworksCanvas.width;
                const y = centerY || Math.random() * fireworksCanvas.height * 0.6 + 80;
                launchFirework(x, y);
            }
            animateFireworks();
        }
        // --- Animated Pet ---
        const animatedPet = document.getElementById('animated-pet');
        animatedPet.innerHTML = '🐱'; // Cute cat emoji, can be replaced with an <img> if you want
        animatedPet.title = 'Click me for a surprise!';
        animatedPet.addEventListener('click', () => {
            // Bounce animation
            animatedPet.style.transform = 'scale(1.3) rotate(-8deg)';
            setTimeout(() => {
                animatedPet.style.transform = '';
            }, 350);
            // Optional: play a meow sound (uncomment if you want)
            // const meow = new Audio('https://cdn.pixabay.com/audio/2022/07/26/audio_124bfa4c3e.mp3');
            // meow.play();
            // Fireworks!
            triggerFireworks(
                animatedPet.getBoundingClientRect().left + animatedPet.offsetWidth / 2,
                animatedPet.getBoundingClientRect().top + 10
            );
        });
        // Optionally, trigger fireworks on page unlock or other events:
        // triggerFireworks();

        // Hide loader after DOM is ready
        const pageLoader = document.getElementById('page-loader');
        setTimeout(() => { pageLoader.style.opacity = '0'; setTimeout(() => { pageLoader.style.display = 'none'; }, 600); }, 700);

        // Section reveal on scroll
        function revealSectionsOnScroll() {
            const sections = document.querySelectorAll('section');
            const transitions = ['section-reveal','section-slide','section-bounce','section-flip'];
            let i = 0;
            sections.forEach(section => {
                section.classList.add(transitions[i % transitions.length]);
                i++;
            });
            function checkReveal() {
                const trigger = window.innerHeight * 0.92;
                sections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top < trigger) {
                        section.classList.add('visible');
                    }
                });
            }
            window.addEventListener('scroll', checkReveal);
            checkReveal();
        }
        revealSectionsOnScroll();

        // Accessibility: ARIA labels and keyboard for pet and gift
        if (animatedPet) {
            animatedPet.setAttribute('tabindex', '0');
            animatedPet.setAttribute('role', 'button');
            animatedPet.setAttribute('aria-label', 'Click for a surprise!');
            animatedPet.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    animatedPet.click();
                }
            });
        }
        if (openGiftBtn) {
            openGiftBtn.setAttribute('aria-label', 'Open birthday gift');
        }

        // --- SCROLL PROGRESS BAR ---
        const scrollProgress = document.getElementById('scroll-progress');
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            scrollProgress.style.width = percent + '%';
        });

        // --- FLOATING BALLOONS ---
        const balloonContainer = document.getElementById('balloon-container');
        function createBalloon() {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = Math.random() * 90 + 'vw';
            balloon.style.background = `radial-gradient(circle at 60% 40%, ${randomColor()} 60%, #fff 100%)`;
            balloonContainer.appendChild(balloon);
            setTimeout(() => balloon.remove(), 7000);
        }
        setInterval(() => { if (balloonContainer) createBalloon(); }, 2200);

        // --- FLOATING HEARTS/EMOJIS ON CLICK ---
        const heartEmojis = ['❤️','💖','💘','💝','💗','💓','💞','💕','🩷','🥰','😍'];
        document.addEventListener('click', (e) => {
            if (e.target.closest('#animated-pet, #giftBox, .falling-item, .sticker-item, .photo-card, .reason-bubble')) return;
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1400);
        });

        // --- SPARKLE TRAIL ---
        const sparkleColors = ['#fff7b2','#ffe0f0','#ff80ab','#f8bbd0','#fff','#c2185b'];
        document.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.7) return;
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = (e.clientX-6) + 'px';
            sparkle.style.top = (e.clientY-6) + 'px';
            sparkle.style.background = sparkleColors[Math.floor(Math.random()*sparkleColors.length)];
            sparkle.style.borderRadius = '50%';
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 800);
        });

        // --- HANDWRITTEN TEXT ANIMATION ---
        // Add Pacifico font if not present
        if (!document.getElementById('pacifico-font')) {
            const link = document.createElement('link');
            link.id = 'pacifico-font';
            link.rel = 'stylesheet';
            link.href = 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap';
            document.head.appendChild(link);
        }
        // Make the main heading handwritten
        const h1 = document.querySelector('h1');
        if (h1) h1.classList.add('handwritten');

        // --- END MESSAGE ANIMATION ---
        const endMessage = document.getElementById('end-message');
        let endShown = false;
        function showEndMessage() {
            if (endShown) return;
            endShown = true;
            if (endMessage) {
                endMessage.textContent = 'Thank You for scrolling! Love You! 💖';
                endMessage.style.display = 'block';
            }
        }
        window.addEventListener('scroll', () => {
            if (!endMessage) return;
            const rect = endMessage.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) showEndMessage();
        });

        // --- ANIMATED MAP PINS (LEAFLET) ---
        const mapSection = document.getElementById('map-section');
        const mapDiv = document.getElementById('map');
        if (mapDiv && window.L) {
            const map = L.map('map').setView([27.7172, 85.3240], 13); // Kathmandu as example
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);
            // Example pins
            const pins = [
                {lat:27.7172, lng:85.3240, label:'First Date'},
                {lat:27.7122, lng:85.3200, label:'Fun Memory'},
                {lat:27.7200, lng:85.3300, label:'Special Place'}
            ];
            pins.forEach((pin, idx) => {
                setTimeout(() => {
                    const marker = L.marker([pin.lat, pin.lng], {
                        riseOnHover: true
                    }).addTo(map).bindPopup(pin.label);
                    const icon = marker._icon;
                    if (icon) {
                        icon.style.animation = 'map-pin-bounce 0.8s cubic-bezier(.68,-0.55,.27,1.55)';
                    }
                }, 400 + idx * 400);
            });
        }

        // --- ELLIPTICAL 3D CAROUSEL ---
        const ellipticalCarousel = document.getElementById('ellipticalCarousel');
        if (ellipticalCarousel) {
            const track = ellipticalCarousel.querySelector('.carousel-track');
            const photos = Array.from(track.querySelectorAll('.carousel-photo'));
            const N = photos.length;
            let centerIdx = 0;
            // Add captions if missing
            photos.forEach(photo => {
                if (!photo.querySelector('.carousel-caption')) {
                    const caption = document.createElement('div');
                    caption.className = 'carousel-caption';
                    caption.textContent = photo.getAttribute('data-caption') || '';
                    photo.appendChild(caption);
                }
            });
            function renderCarousel() {
                const ellipseW = 320, ellipseH = 80, centerW = 170, centerH = 170, sideW = 90, sideH = 90;
                const depth = 180;
                for (let i = 0; i < N; i++) {
                    const rel = ((i - centerIdx + N) % N);
                    let pos = rel;
                    if (pos > N/2) pos -= N; // wrap
                    // Elliptical arc
                    const angle = (pos / (N/2)) * Math.PI/1.3;
                    const x = Math.sin(angle) * ellipseW;
                    const y = Math.cos(angle) * ellipseH;
                    const scale = pos === 0 ? 1 : 0.55 + 0.35 * (1 - Math.abs(pos)/(N/2));
                    const z = depth - Math.abs(pos)*40;
                    const w = pos === 0 ? centerW : sideW;
                    const h = pos === 0 ? centerH : sideH;
                    photos[i].style.transform = `translate(-50%, -50%) translateX(${x}px) translateY(${y}px) scale(${scale})`;
                    photos[i].style.zIndex = 100 + (N - Math.abs(pos));
                    photos[i].style.width = w + 'px';
                    photos[i].style.height = h + 'px';
                    photos[i].setAttribute('tabindex', '0');
                    // Set .active only for center photo
                    if (pos === 0) {
                        photos[i].setAttribute('aria-current', 'true');
                        photos[i].classList.add('active');
                        // photos[i].focus(); // Removed to prevent scroll jump
                    } else {
                        photos[i].removeAttribute('aria-current');
                        photos[i].classList.remove('active');
                    }
                }
            }
            function moveCarousel(dir) {
                centerIdx = (centerIdx + dir + N) % N;
                renderCarousel();
            }
            document.getElementById('carouselLeft').onclick = () => moveCarousel(-1);
            document.getElementById('carouselRight').onclick = () => moveCarousel(1);
            // Keyboard navigation
            ellipticalCarousel.addEventListener('keydown', e => {
                if (e.key === 'ArrowLeft') moveCarousel(-1);
                if (e.key === 'ArrowRight') moveCarousel(1);
            });
            // Auto-rotation
            let autoRotate = setInterval(() => moveCarousel(1), 2500);
            ellipticalCarousel.addEventListener('mouseenter', () => clearInterval(autoRotate));
            ellipticalCarousel.addEventListener('mouseleave', () => { autoRotate = setInterval(() => moveCarousel(1), 2500); });
            renderCarousel();
        }

        // --- Cursor trailing sparkle/heart ---
        document.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.7) return;
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            const emojis = ['💖','✨','💕','🩷','💘','💝','💗','��','💞','🥰','😍'];
            trail.textContent = emojis[Math.floor(Math.random()*emojis.length)];
            trail.style.left = (e.clientX + Math.random()*12-6) + 'px';
            trail.style.top = (e.clientY + Math.random()*12-6) + 'px';
            document.body.appendChild(trail);
            setTimeout(() => trail.remove(), 800);
        });
    } // End of initializePageFeatures
});