import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/components/index.ts'],
  tsconfig: 'tsconfig.lib.json',
  dts: true,
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  treeshake: true,
  // 결과 파일 확장자 강제
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.cjs' };
  },
});
