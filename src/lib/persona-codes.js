// Access codes for different personas - replace with your own secure codes
export const CODE_MAP = {
  // Use 8-10 char mixed codes; these are sample placeholders:
  '9462sweA': 'swe',
  'q312Fx09': 'quant',
  'strategy': 'consulting',
  'eng9A2bZ': 'engineering',
  'portfolio': 'banking',
  'yc2025': 'yc',
  'code': 'code',
  'build': 'build',
};

// Helper to validate access codes and return persona
export function personaFromCode(code) {
  if (!code) return null;
  const persona = CODE_MAP[code];
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
