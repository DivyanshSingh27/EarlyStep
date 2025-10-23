# EarlyStep React Application

This is a React.js conversion of the original EarlyStep HTML/CSS/JS project. The application provides emergency medical guidance with a focus on snake bite treatment and other medical emergencies.

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Parallax Scrolling**: Smooth parallax effects on the hero section
- **Interactive Swiper**: Carousel showcasing different medical emergency types
- **Card Layout**: Grid of medical guidance cards
- **User Authentication**: Login and signup forms
- **Detailed Medical Guidance**: Step-by-step instructions for snake bite treatment
- **Feedback System**: User feedback form with rating system
- **Modern UI**: Clean, professional design with smooth animations

## Technology Stack

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Vite**: Fast build tool and dev server
- **Swiper.js**: Touch slider component
- **CSS3**: Custom styling with responsive design
- **Font Awesome**: Icon library

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with mobile/desktop menus
│   ├── Hero.jsx            # Parallax hero section
│   ├── SwiperSection.jsx   # Medical emergency carousel
│   ├── CardsSection.jsx    # Grid of medical guidance cards
│   ├── Footer.jsx          # Footer with social links and newsletter
│   ├── Login.jsx           # User login form
│   ├── Signup.jsx          # User registration form
│   └── Snake.jsx           # Snake bite treatment guide
├── App.jsx                 # Main app component with routing
├── App.css                 # Global styles
└── main.jsx                # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd earlystep-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Key Features Implemented

### 1. Parallax Scrolling
- Converted vanilla JavaScript parallax to React hooks
- Smooth scrolling effects on hero section elements
- Performance optimized with proper cleanup

### 2. Interactive Navigation
- Responsive mobile and desktop menus
- Smooth animations and transitions
- Active state management

### 3. Swiper Integration
- Modern carousel component for medical emergency showcase
- Touch-friendly navigation
- Custom styling and effects

### 4. Form Handling
- Controlled components for all forms
- Form validation and submission
- State management with React hooks

### 5. Responsive Design
- Mobile-first approach
- Breakpoints for different screen sizes
- Optimized layouts for all devices

## Routes

- `/` - Home page with hero, swiper, and cards
- `/login` - User login form
- `/signup` - User registration form
- `/snake` - Snake bite treatment guide

## Styling

The application uses a comprehensive CSS file (`App.css`) that includes:
- Global styles and resets
- Component-specific styles
- Responsive design breakpoints
- Animation and transition effects
- Form styling
- Card layouts

## Images

All images are stored in the `public/Images/` directory and are optimized for web use.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- The application uses React 18 with modern hooks
- All components are functional components
- State management is handled with React hooks
- The build process is optimized with Vite
- CSS is organized in a single file for simplicity

## Future Enhancements

- Add more medical emergency types
- Implement user authentication backend
- Add search functionality
- Implement offline support
- Add more interactive features
- Implement data persistence

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.