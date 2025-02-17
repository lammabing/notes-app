import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { TextArea } from '../types/TextArea';
import { 
  NoteContainer, 
  StyledTextArea, 
  DeleteButton, 
  TitleInput,
  ColorPicker,
  ColorButton
} from '../styles/components';
import { BACKGROUND_COLORS } from '../utils/constants';
import { useCanvasStore } from '../store/useCanvasStore';
import { DeleteConfirmationModal } from './DeleteConfirmationModal';

interface Props {
  textArea: TextArea;
  onUpdate: (updates: Partial<TextArea>) => void;
  onDelete: () => void;
}

export const EditableTextArea: React.FC<Props> = ({
  textArea,
  onUpdate,
  onDelete,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const bringToFront = useCanvasStore(state => state.bringToFront);

  const handleClick = () => {
    bringToFront(textArea.id);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setIsDeleteModalOpen(false);
    onDelete();
  };

  return (
    <>
      <Rnd
        style={{ zIndex: textArea.zIndex }}
        size={{ width: textArea.width, height: textArea.height }}
        position={{ x: textArea.x, y: textArea.y }}
        onDragStop={(e, d) => {
          onUpdate({ x: d.x, y: d.y });
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          onUpdate({
            width: parseInt(ref.style.width),
            height: parseInt(ref.style.height),
            x: position.x,
            y: position.y,
          });
        }}
      >
        <div 
          style={{ position: 'relative', width: '100%', height: '100%' }}
          onClick={handleClick}
        >
          <ColorPicker>
            {BACKGROUND_COLORS.map(color => (
              <ColorButton
                key={color.value}
                color={color.value}
                isSelected={textArea.backgroundColor === color.value}
                onClick={() => onUpdate({ backgroundColor: color.value })}
                title={color.label}
              />
            ))}
          </ColorPicker>
          <NoteContainer backgroundColor={textArea.backgroundColor}>
            <TitleInput
              value={textArea.title}
              onChange={(e) => onUpdate({ title: e.target.value })}
              placeholder="Note title..."
            />
            <StyledTextArea
              value={textArea.content}
              onChange={(e) => onUpdate({ content: e.target.value })}
              placeholder="Enter note content..."
            />
          </NoteContainer>
          <DeleteButton onClick={handleDeleteClick}>×</DeleteButton>
        </div>
      </Rnd>
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDeleteModalOpen(false)}
      />
    </>
  );
};