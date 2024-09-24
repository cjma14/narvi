/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      pearl: {
        '50': '#faf7f0',
        '100': '#F5EFE0',
        '200': '#e2d1a5',
        '300': '#d3b576',
        '400': '#c99f56',
        '500': '#be8542',
        '600': '#a86937',
        '700': '#8c5031',
        '800': '#73422d',
        '900': '#5f3728',
        '950': '#361c12',
      },
      gray: colors.gray,
      cyan: colors.cyan,
      primary: {
        '50': '#f5faeb',
        '100': '#e7f5d2',
        '200': '#d2ebab',
        '300': '#b3dc7a',
        '400': '#8cc63f',
        '500': '#78b032',
        '600': '#5c8c24',
        '700': '#476b20',
        '800': '#3a561e',
        '900': '#33491e',
        '950': '#19280b',
      },
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fb713b",
        400: "#fa5a15",
        500: "#e14d0b",
        600: "#ea580c",
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
