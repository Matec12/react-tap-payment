import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
//import * as react from 'react';
//import * as reactDom from 'react-dom';

export default {
  input: 'libs/index.ts',
  // Keep tap-payment-popupjs out of the bundle. Inlining it froze a copy of the payment SDK
  // into every release, so a fix published there reached nobody until this package was
  // rebuilt and republished as well. Left external it installs alongside us and picks up
  // patch releases on its own.
  external: Object.keys(pkg.dependencies || {}),
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve(),
    typescript({
      clean: true
    }),
    commonjs()
  ]
};
``;
