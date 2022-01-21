<template>
    <div class="pb-8 flex flex-col flex-1 min-h-0" :class="`relative ${customClass}`">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'FooterSection',
        props: {
            customClass: {
                type: String,
                default: '',
            },
        },
    };
</script>