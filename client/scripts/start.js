const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const devWebpackConfig = require('../config/webpack.config.dev')

const PORT = 3000

const spinner = ora('server is preparing to start...')

spinner.start()

const compiler = webpack(devWebpackConfig)

const server = new WebpackDevServer(compiler, {
  host: 'localhost',
  hot: true,
  compress: true,
  open: true,
  quiet: true,
  disableHostCheck: true
})

server.listen(PORT, () => {
  spinner.stop()
  console.log(chalk.magenta(`Server is running successfully at ${PORT}.`))
})
