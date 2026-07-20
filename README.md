# AI Chat Assistant Platform

## Overview

A modern AI chat application interface built with React.js.

Designed to demonstrate frontend development skills, UI implementation, responsive layouts, local chat history, and AI application concepts.

## Features

- Modern chat interface
- Responsive design
- AI response simulation
- Local chat history
- Dark mode UI
- Component-based architecture
- API integration structure
- Smooth message and button animations

## Technologies

- React.js
- JavaScript
- Tailwind CSS
- Vite
- React Hooks
- Local Storage

## Installation

```bash
npm install
```

## Run

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```text
src/
+-- components/
|   +-- Navbar.jsx
|   +-- ChatWindow.jsx
|   +-- MessageBubble.jsx
|   +-- Sidebar.jsx
|   +-- FeatureCard.jsx
|   +-- Footer.jsx
+-- pages/
|   +-- Home.jsx
|   +-- Chat.jsx
+-- services/
|   +-- aiService.js
+-- App.jsx
+-- main.jsx
```

## Screenshots

Screenshots are stored in the `screenshot/` folder:

- `desktop.png`
- `mobile.png`
- `chat.png`

## API Integration Notes

The app currently uses a mock AI response service in `src/services/aiService.js`. The UI is structured so a real API endpoint can be connected later without changing the chat components.
