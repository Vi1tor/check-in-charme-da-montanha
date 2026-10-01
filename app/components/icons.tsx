export const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.15 6.38 2.15 11.76c0 1.73.47 3.41 1.35 4.91L2 22l5.48-1.46c1.44.77 3.06 1.18 4.68 1.18h.01c5.46 0 9.89-4.38 9.89-9.76 0-2.61-1.05-5.06-2.95-6.91A10.07 10.07 0 0 0 12.04 2Zm0 17.8h-.01a8.83 8.83 0 0 1-4.48-1.22l-.32-.19-3.25.87.87-3.16-.21-.34a8.3 8.3 0 0 1-1.3-4.42c0-4.57 3.77-8.28 8.4-8.28 2.25 0 4.36.86 5.95 2.43a8.07 8.07 0 0 1 2.47 5.85c0 4.57-3.77 8.26-8.12 8.46Zm4.6-6.05c-.25-.12-1.5-.74-1.74-.82-.23-.09-.4-.12-.57.12-.17.25-.66.82-.8.99-.15.17-.3.19-.56.06-.25-.12-1.06-.38-2.02-1.2-.75-.67-1.25-1.49-1.39-1.74-.15-.25-.02-.38.11-.5.11-.11.25-.3.38-.45.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.07-.12-.57-1.36-.78-1.86-.2-.48-.41-.42-.57-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.02 2.61.12.17 1.78 2.73 4.32 3.83.6.26 1.07.41 1.44.53.61.19 1.16.16 1.59.1.49-.07 1.5-.61 1.71-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.17-.48-.29Z" />
  </svg>
);

// --- Custom Brand Mountain SVG Logo ---
export const MountainLogo = ({ className = 'w-20 h-14' }: { className?: string }) => (
  <svg viewBox="0 0 100 55" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Mountain peaks */}
    <path d="M10 45 L35 15 L50 30 L75 8 L90 45 Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 45 L42 27 L56 40 L78 16 L94 45" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />

    {/* Araucária tree left */}
    <g transform="translate(42, 26) scale(0.65)" stroke="currentColor" strokeWidth="1.4" fill="none">
      <line x1="10" y1="2" x2="10" y2="24" />
      <path d="M2 15 C4 11, 16 11, 18 15" strokeLinecap="round" />
      <path d="M4 11 C6 7, 14 7, 16 11" strokeLinecap="round" />
      <path d="M6 7 C7 4, 13 4, 14 7" strokeLinecap="round" />
      <path d="M8 4 C9 2, 11 2, 12 4" strokeLinecap="round" />
    </g>

    {/* Araucária tree right */}
    <g transform="translate(48, 22) scale(0.8)" stroke="currentColor" strokeWidth="1.4" fill="none">
      <line x1="10" y1="2" x2="10" y2="24" />
      <path d="M2 15 C4 11, 16 11, 18 15" strokeLinecap="round" />
      <path d="M4 11 C6 7, 14 7, 16 11" strokeLinecap="round" />
      <path d="M6 7 C7 4, 13 4, 14 7" strokeLinecap="round" />
      <path d="M8 4 C9 2, 11 2, 12 4" strokeLinecap="round" />
    </g>
  </svg>
);
