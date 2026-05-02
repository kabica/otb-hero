// src/styles/heroStyles.ts
const heroStyles = {
  hero: "min-h-screen bg-gradient-to-br from-[#f8f4ff] to-[#fffbeb] flex items-center relative overflow-hidden",

  container: "max-w-7xl mx-auto px-6",

  content: "grid md:grid-cols-2 gap-12 items-center pt-20 pb-16",

  leftContent: "space-y-8",

  badge:
    "inline-flex items-center gap-2 text-orange-600 font-medium tracking-widest",

  heading: "text-6xl md:text-7xl font-bold leading-tight text-gray-900",

  description: "text-lg text-gray-600 max-w-md",

  buttons: "flex items-center gap-4 pt-6",

  findMoreBtn:
    "bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-medium transition",

  playBtn:
    "flex items-center gap-3 text-orange-600 hover:text-orange-700 transition",

  imageContainer: "relative hidden md:block",

  mainImage: "w-full max-w-lg rounded-3xl shadow-2xl",
};

export default heroStyles;
