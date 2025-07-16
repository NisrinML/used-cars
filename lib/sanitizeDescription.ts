import { encode } from 'html-entities';
//To ensure HTML-safe descriptions
export function sanitizeDescription(text: string, maxLength: number = 160): string {
  const encodedText = encode(text, { level: 'html5' });
  const plainText = encodedText.replace(/<[^>]+>/g, '');
  return plainText.length > maxLength ? plainText.slice(0, maxLength - 3) + '...' : plainText;
}