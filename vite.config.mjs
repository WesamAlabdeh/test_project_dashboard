import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
import env from 'vite-plugin-env-compatible';

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  envPrefix: 'REACT_APP_',
  plugins: [
    react(),
    visualizer({
      filename: './bundle-analysis.html', // Output file
      open: true, // Open the generated file automatically
    }),
    env(/* options */),
    viteCompression(),

    AutoImport({
      imports: [
        'react',
        {
          'react-router-dom': ['useHistory', 'useLocation', 'Link'],
          'react-i18next': ['useTranslation'],
          '@Module/core/apis/helpers': [
            'useAddMutation',
            'useDeleteMutation',
            'useGetQuery',
            'useGetQueryPagination',
            'useUpdateMutation',
          ],
        },
      ],
      dts: 'src/auto-imports.d.ts', // Ensure this path is correct
    }),
  ],
  resolve: {
    alias: {
      '@Module': path.resolve(__dirname, 'src/Module'),
    },
  },
});
