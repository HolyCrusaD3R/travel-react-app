import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: '/src/index.html', // Assuming your main entry point is index.html
        home: '/src/Home.js',     // Replace with the actual path to your Home component
        signup: '/src/SignupPage.js', // Replace with the actual path to your SignupPage component
        login: '/src/LoginPage.js',   // Replace with the actual path to your LoginPage component
        contactus: '/src/ContactUsPage.js' // Replace with the actual path to your ContactUsPage component
        // Add more entry points as needed
      }
    }
  }
});