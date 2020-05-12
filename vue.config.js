const path = require('path');

module.exports = {
  // 配置构建时是否生成map文件（生产环境下不生成，提高性能）
  productionSourceMap: proccess.env.NODE_ENV === 'production' ? false : true,
  configureWebpack: {
    // 配置resolve模块
    resolve: {
      // 配置别名路径
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@src': path.resolve(__dirname, 'src'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@router': path.resolve(__dirname, 'src/router'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@api': path.resolve(__dirname, 'src/api'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@styles': path.resolve(__dirname, 'src/assets/styles'),
        '@img': path.resolve(__dirname, 'src/assets/img'),
      }
    },
    // 配置devServer 服务器
    devServer: {
      port: 8080,
      open: true,
      
    }
  }
}