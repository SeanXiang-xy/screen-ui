const markdown = {
  config: (md) => {
    const { demoBlockPlugin } = require("vitepress-theme-demoblock");
    md.use(demoBlockPlugin, {
      cssPreprocessor: "less",
      scriptReplaces: [
        {
          searchValue: /import ({.*}) from "vue"/g,
          replaceValue: (s, s1) => `const ${s1} = Vue`,
        },
      ],
    });
  },
};
export default markdown;
