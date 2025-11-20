import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yellow-primary': '#fbbf24',
        'orange-primary': '#f97316',
        'gold-primary': '#d4af37',
        'bronze-primary': '#cd7f32',
        'black-primary': '#000000',
      },
    },
  },
  plugins: [],
}
export default config
