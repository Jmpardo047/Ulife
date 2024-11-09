/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      background: "#1e1e1e", // Fondo principal oscuro
      searchBar: "",
      surface: "#292929", // Fondo de elementos en neumorfismo
      shadowLight: "#333333", // Sombra ligera para neumorfismo
      shadowDark: "#121212", // Sombra oscura para neumorfismo
      accent: "#4C9AFF", // Acento principal para botones e iconos interactivos
      textPrimary: "#E0E0E0", // Color principal para el texto
      textSecondary: "#A0A0A0", // Color secundario para subtítulos y texto menos relevante
      error: "#FF4D4D", // Para mensajes de error
      success: "#4CAF50", // Para mensajes de éxito o confirmación
    },
    maxHeight: {
      '1/2': '50%',
      '1/3': '40vh',
    },},
  },
  plugins: [],
}

