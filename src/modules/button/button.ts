import Button from '../../components/button/button.vue'

(Button as any).install = function (Vue: any) {
  Vue.component(Button.name, Button)
}

export default Button
