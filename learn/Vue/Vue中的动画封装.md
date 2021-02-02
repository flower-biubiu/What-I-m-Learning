Vue.component('fade', {
    props: ['show'],
    template: `
        <transition>
            <slot v-show></slot>
        </transition>
        `
})