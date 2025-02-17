import { KEYBOARD_SHORTCUTS } from './constants';

export const isClipboardShortcut = (e: KeyboardEvent): boolean => {
  const isCopy = e.ctrlKey && e.key.toLowerCase() === 'c';
  const isPaste = e.ctrlKey && e.key.toLowerCase() === 'v';
  return isCopy || isPaste;
};

export const handleClipboardAction = async (
  e: KeyboardEvent,
  textAreaRef: HTMLTextAreaElement | null
): Promise<void> => {
  if (!textAreaRef) return;

  if (e.ctrlKey && e.key.toLowerCase() === 'c') {
    await copyToClipboard(textAreaRef);
  } else if (e.ctrlKey && e.key.toLowerCase() === 'v') {
    await pasteFromClipboard(textAreaRef);
  }
};

export const copyToClipboard = async (textArea: HTMLTextAreaElement): Promise<void> => {
  const selectedText = textArea.value.substring(
    textArea.selectionStart,
    textArea.selectionEnd
  );
  
  try {
    await navigator.clipboard.writeText(selectedText || textArea.value);
  } catch (err) {
    console.error('Failed to copy text:', err);
  }
};

export const pasteFromClipboard = async (textArea: HTMLTextAreaElement): Promise<void> => {
  try {
    const clipboardText = await navigator.clipboard.readText();
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const currentValue = textArea.value;
    
    const newValue = 
      currentValue.substring(0, start) +
      clipboardText +
      currentValue.substring(end);
    
    const event = new Event('input', { bubbles: true });
    textArea.value = newValue;
    textArea.dispatchEvent(event);
    
    textArea.selectionStart = textArea.selectionEnd = start + clipboardText.length;
  } catch (err) {
    console.error('Failed to paste text:', err);
  }
};