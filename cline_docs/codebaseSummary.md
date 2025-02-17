# Codebase Summary

## Overview
This document provides an overview of the project structure and recent changes made to the post-it notes app.

## Project Structure
The project is organized into the following directories:

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

## Recent Changes
1. **Persistent Storage**: Implemented persistent storage for notes using `localStorage`.
2. **Export Notes**: Added functionality to export notes to a JSON file.
3. **UI Enhancements**: Replaced text buttons with icons for better user experience.

## Datestamp
- **2025-02-15**: Initial implementation of persistent storage and export functionality.
- **2025-02-15**: Added UI enhancements with icons.