module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.ts",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        "background-blue": "#151A30",
        "background-blue-2": "#1e2748"
      },
      boxShadow: {
        dark: "0 4px 14px 0 rgba(19, 51, 81, 0.39)"
      },
      height: {
        "50vh": "50vh",
        "66vh": "66vh",
        "75vh": "75vh"
      },
      spacing: {
        128: "32rem",
        192: "48rem"
      }
    },
    fontFamily: {
      body: ["Roboto", "sans-serif"]
    }
  },
  variants: {
    alignSelf: ["odd"],
    borderWidth: ["responsive"]
  },
  plugins: [require("@tailwindcss/ui")]
};
