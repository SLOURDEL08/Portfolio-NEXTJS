import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      'smd': '500px',
      'zmd': '551px',
      'md': '768px',
      'foot': '683px',
      'mdd': '900px',
      'lg': '1024px',
      'xl': '1280px',
      'xml': '1150px',
      'hxl': '1180px',
      '2xl': '1440px',
    },
  },
  plugins: [],
}
export default config