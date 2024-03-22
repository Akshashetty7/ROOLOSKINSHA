// vite.config.js
import { defineConfig } from "file:///C:/Users/aksha/OneDrive/Desktop/Roolooo%20internship/interns-projects/client/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/aksha/OneDrive/Desktop/Roolooo%20internship/interns-projects/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig(() => ({
  plugins: [react()],
  esbuild: {
    loader: "tsx",
    // OR "jsx"
    include: [
      // Add this for business-as-usual behaviour for .jsx and .tsx files
      "src/**/*.jsx",
      "src/**/*.tsx",
      "node_modules/**/*.jsx",
      "node_modules/**/*.tsx",
      // Add the specific files you want to allow JSX syntax in
      "src/LocalJsxInJsComponent.js",
      "node_modules/bad-jsx-in-js-component/index.js",
      "node_modules/bad-jsx-in-js-component/js/BadJSXinJS.js",
      "node_modules/bad-jsx-in-js-component/ts/index.ts",
      "node_modules/bad-jsx-in-js-component/ts/BadTSXinTS.ts",
      // --- OR ---
      // Add these lines to allow all .js files to contain JSX
      "src/**/*.js",
      "node_modules/**/*.js",
      // Add these lines to allow all .ts files to contain JSX
      "src/**/*.ts",
      "node_modules/**/*.ts"
    ]
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxha3NoYVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFJvb2xvb28gaW50ZXJuc2hpcFxcXFxpbnRlcm5zLXByb2plY3RzXFxcXGNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYWtzaGFcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxSb29sb29vIGludGVybnNoaXBcXFxcaW50ZXJucy1wcm9qZWN0c1xcXFxjbGllbnRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2Frc2hhL09uZURyaXZlL0Rlc2t0b3AvUm9vbG9vbyUyMGludGVybnNoaXAvaW50ZXJucy1wcm9qZWN0cy9jbGllbnQvdml0ZS5jb25maWcuanNcIjsvLyB2aXRlLmNvbmZpZy50c1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoKSA9PiAoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuICBlc2J1aWxkOiB7XHJcbiAgICBsb2FkZXI6IFwidHN4XCIsIC8vIE9SIFwianN4XCJcclxuICAgIGluY2x1ZGU6IFtcclxuICAgICAgLy8gQWRkIHRoaXMgZm9yIGJ1c2luZXNzLWFzLXVzdWFsIGJlaGF2aW91ciBmb3IgLmpzeCBhbmQgLnRzeCBmaWxlc1xyXG4gICAgICBcInNyYy8qKi8qLmpzeFwiLFxyXG4gICAgICBcInNyYy8qKi8qLnRzeFwiLFxyXG4gICAgICBcIm5vZGVfbW9kdWxlcy8qKi8qLmpzeFwiLFxyXG4gICAgICBcIm5vZGVfbW9kdWxlcy8qKi8qLnRzeFwiLFxyXG5cclxuICAgICAgLy8gQWRkIHRoZSBzcGVjaWZpYyBmaWxlcyB5b3Ugd2FudCB0byBhbGxvdyBKU1ggc3ludGF4IGluXHJcbiAgICAgIFwic3JjL0xvY2FsSnN4SW5Kc0NvbXBvbmVudC5qc1wiLFxyXG4gICAgICBcIm5vZGVfbW9kdWxlcy9iYWQtanN4LWluLWpzLWNvbXBvbmVudC9pbmRleC5qc1wiLFxyXG4gICAgICBcIm5vZGVfbW9kdWxlcy9iYWQtanN4LWluLWpzLWNvbXBvbmVudC9qcy9CYWRKU1hpbkpTLmpzXCIsXHJcbiAgICAgIFwibm9kZV9tb2R1bGVzL2JhZC1qc3gtaW4tanMtY29tcG9uZW50L3RzL2luZGV4LnRzXCIsXHJcbiAgICAgIFwibm9kZV9tb2R1bGVzL2JhZC1qc3gtaW4tanMtY29tcG9uZW50L3RzL0JhZFRTWGluVFMudHNcIixcclxuXHJcbiAgICAgIC8vIC0tLSBPUiAtLS1cclxuXHJcbiAgICAgIC8vIEFkZCB0aGVzZSBsaW5lcyB0byBhbGxvdyBhbGwgLmpzIGZpbGVzIHRvIGNvbnRhaW4gSlNYXHJcbiAgICAgIFwic3JjLyoqLyouanNcIixcclxuICAgICAgXCJub2RlX21vZHVsZXMvKiovKi5qc1wiLFxyXG5cclxuICAgICAgLy8gQWRkIHRoZXNlIGxpbmVzIHRvIGFsbG93IGFsbCAudHMgZmlsZXMgdG8gY29udGFpbiBKU1hcclxuICAgICAgXCJzcmMvKiovKi50c1wiLFxyXG4gICAgICBcIm5vZGVfbW9kdWxlcy8qKi8qLnRzXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWEsT0FBTztBQUFBLEVBQ2pDLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUE7QUFBQSxJQUNSLFNBQVM7QUFBQTtBQUFBLE1BRVA7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BR0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQTtBQUFBLE1BS0E7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUdBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
