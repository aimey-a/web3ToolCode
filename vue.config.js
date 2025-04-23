const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: './',
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        client: {
            overlay: false // 关闭编译错误的红色全屏覆盖
        },
        port: 9000, // 端口
    },
    //   server: {
    //     host: '0.0.0.0',
    //     port: 8991,
    //     // 是否开启 https
    //     https: false,
    //   },
})
