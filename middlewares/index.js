const path = require('path')
const context = require("../utils/autoLoadFile")

const install = (app) => {
  context(path.join(__dirname, './middleware'), false).forEach(key => {
    app.use(key.data)
  })
}

module.exports = install