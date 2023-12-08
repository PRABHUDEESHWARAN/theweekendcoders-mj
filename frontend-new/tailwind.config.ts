import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
          "inter": "var(--font-inter)",
          "manrope": "var(--font-manrope)",
          "raleway": "var(--font-raleway)",
      },
      backgroundImage: {
        'hero-bg': "url('/assets/work2.jpeg')",
      },
      animation:{
        blob: "blob 10s infinite",
        marquee: 'marquee 10s linear infinite',
        marquee2: 'marquee 10s linear infinite',
      },
      keyframes:{
        blob:{
          "0%":{
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%":{
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%":{
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)"
          }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      }
    },
  },
  plugins: [],
}
export default config
