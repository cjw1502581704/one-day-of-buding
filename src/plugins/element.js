import Vue from 'vue'
import { Button, FormItem, Form, Input, Message, Notification, Container, Aside, Main, Menu, MenuItem } from 'element-ui'

Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Container)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Input)
Vue.prototype.$message = Message
Vue.prototype.$notify = Notification
