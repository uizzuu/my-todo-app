import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  server: {
    port: 3000,
    // 프론트에서 /api로 호출하면 => http://localhost:8080/api 로 나오게
    // changeOrigin : 내가 요청하는 사이트가 인증 가능한 사이트인지 
    // 타임리프가 아니라 리액트로 작업할 때는 스프링 csrf 설정 필요X
    proxy: {
      '/api': {
        target: "http://localhost:8080",
        changeOrigin: true,
      }
    }
  },
})
