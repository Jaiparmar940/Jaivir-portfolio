// Access codes for different personas - replace with your own secure codes
export const CODE_MAP = {
  // Use 8-10 char mixed codes; these are sample placeholders:
  '9462sweA': 'swe',
  'analyst': 'quant',
  'strategy': 'consulting',
  'eng9A2bZ': 'engineering',
  'portfolio': 'banking',
  'yc2025': 'yc',
  'yc2026': 'yc2026',
  'code': 'code',
  'build': 'build',
  'innovation': 'ie',
  /* 'ie-portfolio' intentionally not a code — only "innovation" grants I&E access */
};

// Helper to validate access codes and return persona (case-insensitive)
export function personaFromCode(code) {
  if (!code) return null;
  const c = code.trim();
  const persona = CODE_MAP[c] ?? CODE_MAP[c.toLowerCase()];
  return persona || null;
}

// Get all valid codes for reference
export function getAllCodes() {
  return Object.keys(CODE_MAP);
}

// Validate if a code exists
export function isValidCode(code) {
  return code && CODE_MAP[code] !== undefined;
}
