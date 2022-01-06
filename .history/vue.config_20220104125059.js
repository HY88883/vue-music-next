module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        prependData:
        `  @import "@/assets/scss/variable.scss";
        @import "@/assets/scss/mixin.scss";`
        // 旧版本  data: `
        //   @import '@/style/reset.scss';

        //   `
      }
    }
  }

}
