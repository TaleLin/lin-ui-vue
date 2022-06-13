import Button from './src/button/index'

const components = [
  Button
]

function install(app: any) {
  components.forEach(component => {
    app.use(component);
  })
}

export default {
  install,
  Button
}