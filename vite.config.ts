import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    eslint({
      overrideConfigFile: path.resolve(__dirname, '.eslintrc.cjs'),
      cache: false, // Отключите кэш для тестирования
      fix: true, // Автоматически исправляет ошибки
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: ['node_modules', 'dist'], // Исключения
    }),
  ],
   css: {
    modules: {
      localsConvention: 'camelCase' // Опционально: преобразование имён классов
    }
   }
});
