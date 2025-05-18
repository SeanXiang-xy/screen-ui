import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";
export default defineConfig({
  build: {
    target: "modules",
    //打包文件目录
    outDir: "es",
    //压缩
    minify: true,
    rollupOptions: {
      input: ["index.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: resolve(__dirname, "./dist"),
        },
      ],
    },
    lib: {
      entry: "./index.ts",
      name: "utils",
    },
  },

  plugins: [
    dts({
      outputDir: resolve(__dirname, "./dist"),
      tsConfigFilePath: "../../tsconfig.json",
    }),
  ],
});
