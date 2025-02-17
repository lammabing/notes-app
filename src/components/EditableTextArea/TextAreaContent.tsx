import React from 'react';
import { 
  NoteContainer, 
  StyledTextArea, 
  DeleteButton, 
  TitleInput,
  ColorPicker,
  ColorButton
} from '../../styles/components';
import { BACKGROUND_COLORS } from '../../utils/constants';

interface Props {
  title: string;
  content: string;
  backgroundColor: string;
  onTitleChange: (title: string) => void;
  onContentChange: (content: string) => void;
  onBackgroundColorChange: (color: string) => void;
  onDelete: () => void;
}

export const TextAreaContent: React.FC<Props> = ({
  title,
  content,
  backgroundColor,
  onTitleChange,
  onContentChange,
  onBackgroundColorChange,
  onDelete
}) => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <ColorPicker>
      {BACKGROUND_COLORS.map(color => (
        <ColorButton
          key={color.value}
          color={color.value}
          isSelected={backgroundColor === color.value}
          onClick={() => onBackgroundColorChange(color.value)}
          title={color.label}
        />
      ))}
    </ColorPicker>
    <NoteContainer backgroundColor={backgroundColor}>
      <TitleInput
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="Note title..."
      />
      <StyledTextArea
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        placeholder="Enter note content..."
      />
    </NoteContainer>
    <DeleteButton onClick={onDelete}>×</DeleteButton>
  </div>
);