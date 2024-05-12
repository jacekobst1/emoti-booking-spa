import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
    ],
    server: {
        host: 'app.emoti-booking.test',
        port: 5174,
    },
})
