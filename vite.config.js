import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// change 'your-repo-name' to your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/Sports_React_project/',
})
