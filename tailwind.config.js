/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        animation: {
            orbit: "orbit calc(var(--duration)*1s) linear infinite",
          },
          keyframes: {
            orbit: {
              "0%": {
                transform:
                  "rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
              },
              "100%": {
                transform:
                  "rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
              },
            },
          },
      },
    },
    plugins: [],
  }