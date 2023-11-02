/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'Rancho': ['Rancho', 'font-effect-shadow-multipl'],
        'Pacifico' :['Pacifico']
      },
    },
    scrollMargin: {
      '96': '24rem',
    },
    
  },
  plugins: [require("daisyui")],
  
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#6690cc",
          
          "secondary": "#03704b",
          
          "accent": "#ff0558",
          
          "neutral": "#1f2937",
          
          "base-100": "#374151",
          
          "info": "#499cd0",
          
          "success": "#1e857b",
          
          "warning": "#ee8720",
          
          "error": "#ea3953",
          "gg" : "ffffff"
        },
      },
    ],
  },
}

