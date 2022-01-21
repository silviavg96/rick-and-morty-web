<template>
    <div :class="`relative ${customClass}`">
        <div class="flex">
            <h1 class="leading-none text-2xl xl:text-3xl text-gray-700 font-medium w-full">
                <slot name="title"></slot>
            </h1>
            <slot name="explanation"></slot>
        </div>

        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'TitleSection',
        props: {
            customClass: {
                type: String,
                default: '',
            },
        },
    };
</script>