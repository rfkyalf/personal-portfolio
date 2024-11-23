import { useState, useCallback } from 'react';

const useClipboard = (
  timeout: number = 5000
): [boolean, (text: string) => Promise<boolean>] => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(
    async (text: string) => {
      if (!navigator?.clipboard) {
        console.warn('Clipboard not supported');
        return false;
      }

      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);

        setTimeout(() => setCopied(false), timeout);

        return true;
      } catch (error) {
        console.warn('Copy failed', error);
        setCopied(false);
        return false;
      }
    },
    [timeout]
  );

  return [copied, copyToClipboard];
};

export default useClipboard;
