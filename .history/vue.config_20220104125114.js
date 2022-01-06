module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        prependData:
        `  @import "@/assets/scss/variable.scss";
        @import "@/assets/scss/mixin.scss";`
      }
    }
  }

}
