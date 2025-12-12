module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // app dir (Next 13+)
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",    // if using src/app
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",     // legacy pages dir
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        accent: '#F59E0B',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #3B82F6, #10B981)',
      },
    },
  },
  plugins: [],
}