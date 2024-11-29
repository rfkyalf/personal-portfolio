import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      spacing: {
        'safe-top': 'calc(env(safe-area-inset-top) + 5px)',
        'safe-bottom': 'calc(env(safe-area-inset-bottom) + 5px)',
      },
    },
  },
  plugins: [],
} satisfies Config;
