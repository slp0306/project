const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/main.ts",
      title: "隋立鹏 2022-05-05",
    },
  },
});
