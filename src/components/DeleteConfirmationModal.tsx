import React from 'react';
import styled from '@emotion/styled';

interface Props {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 90%;
`;

const Title = styled.h2`
  margin: 0 0 16px 0;
  font-size: 20px;
  color: #333;
`;

const Message = styled.p`
  margin: 0 0 24px 0;
  color: #666;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const Button = styled.button<{ variant?: 'danger' | 'default' }>`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  background-color: ${props => props.variant === 'danger' ? '#dc3545' : '#e9ecef'};
  color: ${props => props.variant === 'danger' ? 'white' : '#333'};

  &:hover {
    background-color: ${props => props.variant === 'danger' ? '#c82333' : '#dee2e6'};
  }
`;

export const DeleteConfirmationModal: React.FC<Props> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onCancel}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Title>Delete Note</Title>
        <Message>Are you sure you want to delete this note? This action cannot be undone.</Message>
        <ButtonGroup>
          <Button onClick={onCancel}>Cancel</Button>
          <Button variant="danger" onClick={onConfirm}>Delete</Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};