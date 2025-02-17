import React from 'react';
import { CanvasContainer, AddButton, ExportButton } from '../styles/components';
import { EditableTextArea } from './EditableTextArea';
import { useCanvasStore } from '../store/useCanvasStore';
import { FaFileExport } from 'react-icons/fa';

export const Canvas: React.FC = () => {
  const { textAreas, addTextArea, updateTextArea, deleteTextArea, exportNotes } = useCanvasStore();

  return (
    <CanvasContainer>
      {textAreas.map((textArea) => (
        <EditableTextArea
          key={textArea.id}
          textArea={textArea}
          onUpdate={(updates) => updateTextArea(textArea.id, updates)}
          onDelete={() => deleteTextArea(textArea.id)}
        />
      ))}
      <AddButton onClick={addTextArea}>+</AddButton>
      <ExportButton onClick={exportNotes}>
        <FaFileExport />
      </ExportButton>
    </CanvasContainer>
  );
};