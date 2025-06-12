/** @type {import('tailwindcss').Config} */
module.exports = {
    // Enable dark mode using the 'dark' class on the <html> tag
    darkMode: 'class',
  
    // Specify the content files to scan for Tailwind CSS class names.
    // This helps Tailwind CSS remove unused styles in production.
    content: [
        "./index.html",
        "./privacy_policy.html",
        "./email_verified.html",
        "./reset_password.html",
        "./js/utils.js",
       "./js/components.js"
        ],
      // Customize the theme
    theme: {
        // Extend the default theme with additional values without replacing them.
        extend: {
          // Define custom font families
          fontFamily: {
            // 'sans' is the name of the font family (e.g., font-sans in HTML)
            sans: [
              'Inter', // Prioritize the 'Inter' font if available
              'system-ui', // Use the OS default UI font
              'sans-serif', // Use the browser's default sans-serif font as a fallback
            ],
          },
          // Add additional customizations here in the future as needed.
        },
        // You could also override the default theme completely using this object
      },
    // Add plugins and other customizations here
    plugins: [],
  };