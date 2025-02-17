import React from 'react';
import { Rnd } from 'react-rnd';
import { TextArea } from '../../types/TextArea';
import { TextAreaContent } from './TextAreaContent';

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
  return (
    <Rnd
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
      <TextAreaContent
        title={textArea.title}
        content={textArea.content}
        backgroundColor={textArea.backgroundColor}
        onTitleChange={(title) => onUpdate({ title })}
        onContentChange={(content) => onUpdate({ content })}
        onBackgroundColorChange={(backgroundColor) => onUpdate({ backgroundColor })}
        onDelete={onDelete}
      />
    </Rnd>
  );
};