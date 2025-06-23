# API Endpoints

## Overview
This document lists all API endpoints and their functions for the post-it notes app.

## Endpoints
The application does not use external APIs. All functionality is handled internally using local storage and state management.

## Functions
1. **Persistent Storage**:
   - **Function**: Save and load notes from `localStorage`.
   - **Usage**: Automatically saves and loads notes without user intervention.

2. **Export Notes**:
   - **Function**: Export notes to a JSON file.
   - **Usage**: Users can export their notes to a JSON file by clicking the export button.

3. **UI Enhancements**:
   - **Function**: Replace text buttons with icons for better user experience.
   - **Usage**: Icons are used for adding notes, deleting notes, and exporting notes.

## Variables
- **textAreas**: Array of text areas (notes) managed by the Zustand store.
- **maxZIndex**: Maximum z-index value for notes to ensure proper layering.
- **addTextArea**: Function to add a new text area.
- **updateTextArea**: Function to update an existing text area.
- **deleteTextArea**: Function to delete a text area.
- **bringToFront**: Function to bring a text area to the front.
- **exportNotes**: Function to export notes to a JSON file.