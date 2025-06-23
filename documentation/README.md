# Post-it Notes App

## Overview
The Post-it Notes App is a web application built using React, TypeScript, and Zustand for state management. It allows users to create, edit, and delete notes, with persistent storage and the ability to export notes to a JSON file.

## Features
1. **Persistent Storage**: Notes are automatically saved and loaded from `localStorage`.
2. **Export Notes**: Users can export their notes to a JSON file.
3. **UI Enhancements**: Icons are used for adding notes, deleting notes, and exporting notes.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/lammabing/post-it-notes-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd post-it-notes-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Key Commands
- `npm start`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the built application.

## Usage
1. **Adding Notes**: Click the "+" button to add a new note.
2. **Editing Notes**: Click on a note to edit its content.
3. **Deleting Notes**: Click the delete icon on a note to delete it.
4. **Exporting Notes**: Click the export icon to export notes to a JSON file.

## Project Structure
- **src/**: Contains the source code for the application.
  - **components/**: Contains reusable React components.
    - **Canvas.tsx**: The main canvas component where notes are displayed.
    - **EditableTextArea.tsx**: A component for editable text areas.
    - **DeleteConfirmationModal.tsx**: A component for delete confirmation modals.
  - **store/**: Contains state management logic.
    - **useCanvasStore.ts**: Zustand store for managing the canvas state.
  - **styles/**: Contains styling for components.
    - **components.ts**: Styled components using Emotion.
    - **globalStyles.ts**: Global styles for the application.
  - **types/**: Contains TypeScript type definitions.
    - **TextArea.ts**: Type definition for text areas.
  - **utils/**: Contains utility functions.
    - **clipboard.ts**: Utility functions for clipboard operations.
    - **constants.ts**: Constant values used in the application.
  - **App.tsx**: The main application component.
  - **main.tsx**: The entry point for the application.

## Dependencies
- **React**: ^18.2.0
- **React DOM**: ^18.2.0
- **React Icons**: ^4.10.1
- **Zustand**: ^4.4.1
- **Emotion**: ^11.11.1
- **Nanoid**: ^4.0.2
- **Vite**: ^4.4.5
- **TypeScript**: ^5.7.3

## Dev Dependencies
- **@types/node**: ^22.13.4
- **@types/react**: ^18.2.15
- **@types/react-dom**: ^18.2.7
- **@vitejs/plugin-react**: ^4.0.3