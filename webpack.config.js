const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        'bundle.js': [
          path.resolve(__dirname, 'src/activeOrder.js'),
          path.resolve(__dirname, 'src/allOrder.js'), 
          path.resolve(__dirname, 'src/doneOrder.js'),
          path.resolve(__dirname, 'src/editFood.js'), 
          path.resolve(__dirname, 'src/editOrder.js'),
          path.resolve(__dirname, 'src/food.js'), 
          path.resolve(__dirname, 'src/home.js'), 
          path.resolve(__dirname, 'src/login.js'), 
          path.resolve(__dirname, 'src/logout.js'), 
          path.resolve(__dirname, 'src/sales.js'), 
        ]
      },
      output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist'),
      }, 
      experiments: {
        topLevelAwait: true
      }
};