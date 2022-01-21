<template>
    <component :is="layout">
        <slot></slot>
    </component>
</template>

<script>
    export default {
        name: "Layout",
        data() {
            return {
                layout: null
            };
        },
        methods: {
            setLayout(name) {
                this.layout = name ? () => import(`./${name}`) : 'div';
            }
        }
    }
</script>