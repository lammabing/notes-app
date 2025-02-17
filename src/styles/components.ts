import styled from '@emotion/styled';

export const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  position: relative;
`;

export const AddButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  
  &:hover {
    background: #45a049;
  }
`;

export const NoteContainer = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.backgroundColor};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const TitleInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  
  &:focus {
    outline: none;
  }
`;

export const StyledTextArea = styled.textarea`
  flex: 1;
  width: 100%;
  border: none;
  resize: none;
  padding: 8px;
  font-family: Arial, sans-serif;
  background: transparent;
  
  &:focus {
    outline: none;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: -20px;
  right: -20px;
  background: #ff4444;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const ColorPicker = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  display: flex;
  gap: 4px;
`;

export const ColorButton = styled.button<{ color: string; isSelected: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid ${props => props.isSelected ? '#000' : 'transparent'};
  background-color: ${props => props.color};
  cursor: pointer;
  padding: 0;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ExportButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: #007BFF;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);

  &:hover {
    background: #0056b3;
  }
`;