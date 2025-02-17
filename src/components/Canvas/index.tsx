import React from 'react';
import { CanvasContainer, AddButton } from '../../styles/components';
import { EditableTextArea } from '../EditableTextArea';
import { useCanvasStore } from '../../store/useCanvasStore';

export const Canvas: React.FC = () => {
  const { textAreas, addTextArea, updateTextArea, deleteTextArea } = useCanvasStore();

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
    </CanvasContainer>
  );
};