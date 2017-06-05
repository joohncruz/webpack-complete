import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/home/hello.vue'
import Example from '../components/example/example.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/example',
            name: 'Exemplo',
            component: Example
        }
    ]
})