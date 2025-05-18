import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
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
      //忽略打包vue文件
      external: ["vue", /\.less/, "@screen-ui/utils", "echarts"],
      input: ["index.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: resolve(__dirname, "./dist/es"),
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: resolve(__dirname, "./dist/lib"),
        },
      ],
    },
    lib: {
      entry: "./index.ts",
      name: "screen",
    },
  },

  plugins: [
    vue(),
    dts({
      entryRoot: "src",
      outputDir: [
        resolve(__dirname, "./dist/es/src"),
        resolve(__dirname, "./dist/lib/src"),
      ],
      tsConfigFilePath: "../../tsconfig.json",
    }),
    {
      name: "style",
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle);
        for (const key of keys) {
          const bundler: any = bundle[key];
          this.emitFile({
            type: "asset",
            fileName: key,
            source: bundler.code.replace(/\.less/g, ".css"),
          });
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
