/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{html,js}',
//     './components/**/*.{html,js}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],

//   // ...
// }