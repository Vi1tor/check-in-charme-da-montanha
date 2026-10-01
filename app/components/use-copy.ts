'use client';

import { useState } from 'react';

// Copies text to the clipboard and exposes which key was last copied, for "Copiado" feedback.
export function useCopy() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2200);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
      setCopiedKey(null);
    }
  };

  return [copiedKey, copy] as const;
}
