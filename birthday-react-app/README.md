# 🎉 Happy Birthday ROJINA (PUKULI) - React Edition

A beautiful, interactive birthday website converted from vanilla HTML/CSS/JavaScript to React. This personalized birthday celebration features animations, interactive elements, photo galleries, games, and heartfelt messages from friends.

## ✨ Features

### 🔐 PIN Lock System
- Secret code entry (hint: number of days older)
- Animated unlock with confetti and balloons
- Error handling with friendly messages

### 🎵 Audio Experience
- Background music player with controls
- Play/pause functionality
- Volume control slider

### 💝 Interactive Elements
- **Love Meter**: Animated progress bar showing infinite love
- **Love Reasons Bubbles**: Clickable emoji bubbles revealing special reasons
- **Gift Box**: Interactive gift opening animation
- **Friends' Wishes**: Flip cards with photos and birthday messages

### 📸 Photo Galleries
- **Journey Photos**: Filterable photo grid with categories (love, fun, travel)
- **Moments Carousel**: Elliptical carousel with photos and videos
- **Lightbox**: Full-screen photo viewing with descriptions

### 🎮 Birthday Game
- Catch falling birthday items game
- Score tracking and timer
- Bonus items for extra points
- Mobile-friendly touch controls

### 🎨 Visual Effects
- **Confetti Animation**: Colorful falling confetti pieces
- **Balloon Float**: Floating balloons animation
- **Sparkle Effects**: Interactive sparkles on interactions
- **Cursor Follower**: Custom heart cursor with text
- **Scroll Progress**: Visual progress bar
- **Section Reveal**: Smooth scroll-triggered animations

### 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized media queries

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd birthday-react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add media files**
   Ensure the following directories exist in `public/`:
   - `public/moments/` - Contains carousel photos and videos
   - `public/wish/` - Contains friends' profile photos
   - `public/journey/` - Contains journey photo gallery
   - `public/video.mp4` - Main birthday video
   - `public/song.m4a` - Background music

4. **Start development server**
   ```bash
   npm start
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 🗂️ Project Structure

```
birthday-react-app/
├── public/
│   ├── moments/          # Carousel media files
│   ├── wish/            # Friends' photos
│   ├── journey/         # Journey photos
│   ├── video.mp4        # Main video
│   ├── song.m4a         # Background music
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PinLock.js           # PIN entry component
│   │   ├── HeroBanner.js        # Hero section with animations
│   │   ├── AudioPlayer.js       # Music player component
│   │   ├── MessageSection.js    # Special message display
│   │   └── FriendsWishes.js     # Flip cards component
│   ├── data/
│   │   └── photoData.js         # Photo and friend data
│   ├── hooks/
│   │   └── useAnimations.js     # Animation utilities
│   ├── App.js           # Main application component
│   ├── App.css          # Main styles (converted from original)
│   └── index.js         # React entry point
└── package.json
```

## 🛠️ Key Components

### `PinLock`
Handles the secret code entry with animated feedback and unlock celebrations.

### `HeroBanner`
Main hero section with animated title and floating particles (confetti and love messages).

### `AudioPlayer`
Music player with play/pause controls and volume adjustment.

### `FriendsWishes`
Interactive flip cards showcasing birthday messages from friends.

### `useAnimations` Hook
Custom hook providing animation utilities for confetti, balloons, and sparkles.

## 🎯 Interactive Features

### PIN Entry
- Enter the secret code (25) to unlock the website
- Animated error messages for incorrect entries
- Celebration animations on successful unlock

### Photo Interactions
- Click on love reason bubbles to reveal messages
- Flip friend cards to read birthday wishes
- Navigate through photo carousels
- View photos in fullscreen lightbox

### Audio Controls
- Toggle background music on/off
- Adjust volume with slider
- Seamless looping

### Gift Opening
- Click the gift box to reveal the surprise
- Animated opening with message reveal

## 🎨 Customization

### Adding New Friends
Edit `src/data/photoData.js` and add to the `friendsWishes` array:

```javascript
{
  name: 'Friend Name',
  image: '/wish/friend-photo.jpg',
  message: 'Birthday message here...'
}
```

### Modifying Love Reasons
Update the love reasons in `src/App.js` within the love-reasons-section.

### Changing Photos
Replace images in the `public/` directories:
- `public/moments/` for carousel
- `public/journey/` for photo gallery
- `public/wish/` for friend photos

### Updating Audio/Video
Replace `public/song.m4a` and `public/video.mp4` with your files.

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The `build/` folder can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any static file hosting service

### Environment Variables
Create a `.env` file for any configuration:
```
REACT_APP_PIN_CODE=25
REACT_APP_TITLE=Happy Birthday ROJINA!
```

## 🔧 Development

### Available Scripts
- `npm start` - Development server
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style
- ES6+ JavaScript
- Functional components with hooks
- CSS modules for styling
- Responsive design principles

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎭 Performance Optimizations

- Lazy loading of images
- Efficient animation cleanup
- Minimal re-renders with proper React patterns
- Optimized media file sizes
- Progressive enhancement

## 💖 Special Features

### Love Meter
Animated progress bar that fills to show infinite love with pulsing effects.

### Confetti System
Dynamic confetti generation with:
- Random colors and shapes
- Physics-based falling animation
- Automatic cleanup

### Responsive Animations
All animations adapt to screen size and respect user preferences for reduced motion.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is a personal birthday gift. Please respect the privacy of the individuals featured in the photos and messages.

## 🙏 Acknowledgments

- Original design and concept
- Friends who contributed birthday messages
- React community for excellent documentation
- Create React App for the foundation

---

Made with ❤️ for ROJINA (PUKULI) by Your PUKULE

*"My dearest Rojina, from the moment our paths crossed, my world became infinitely brighter..."*
