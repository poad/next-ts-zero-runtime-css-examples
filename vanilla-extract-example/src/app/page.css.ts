import { style } from '@vanilla-extract/css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '6rem',
  minHeight: '100vh',
});

export const description = style({
  display: 'inherit',
  justifyContent: 'inherit',
  alignItems: 'inherit',
  fontSize: '0.85rem',
  maxWidth: 'var(--max-width)',
  width: '100%',
  zIndex: 2,
  fontFamily: 'var(--font-mono)',
});
