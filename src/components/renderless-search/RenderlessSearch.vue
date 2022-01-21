<template>
    <div class="inline" :class="renderlessClass">
        <slot name="input" :input="input" :value="value" :search="search" :clear="clear">
            <div class="relative inline-flex items-center mr-1" :class="insideDivClass">
                <IconSearch class="absolute left-0 ml-3 w-4 h-4 cursor-pointer" />

                <input
                    ref="input"
                    class="form-input pl-8 py-1 w-full outline-none focus:outline-none focus:shadow-none"
                    :class="inputSearchClass"
                    :value="value"
                    @input="input"
                    @keypress.enter="search"
                    :readonly="disableInput"
                    placeholder="Search"
                    @focus="$emit('focus')"
                    @focusout="$emit('focusout')"
                />

                <loading-spinner
                    v-if="disableInput"
                    class="absolute right-0 mr-2 fill-current text-gray-400"
                    :size="5"
                />
                <span @click="clear" v-if="value && value.length > 0">
                    <IconCrossFilled class="absolute right-0 -mt-3 mr-2 w-6 h-6 text-gray-400 cursor-pointer" />
                </span>
            </div>
        </slot>

        <slot name="trigger" :search="search"></slot>
    </div>
</template>

<script>
    import LoadingSpinner from '@/components/loading-spinner/LoadingSpinner';

    import { IconCrossFilled, IconSearch } from '@/components/icons';

    export default {
        name: 'RenderlessSearch',
        components: { LoadingSpinner, IconCrossFilled, IconSearch },
        props: {
            value: {
                type: String,
            },
            awaitSearch: {
                type: Boolean,
                default: false,
            },
            renderlessClass: {
                type: String,
                default: '',
            },
            insideDivClass: {
                type: String,
                default: '',
            },
            inputSearchClass: {
                type: String,
                default: 'rounded-full',
            },
            disableInput: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                delayTimer: 0,
                awaitTime: 0,
            };
        },
        methods: {
            input(event) {
                const value = event.target.value;

                if (this.awaitSearch) {
                    this.awaitTime = 500;
                }

                clearTimeout(this.delayTimer);
                this.delayTimer = setTimeout(() => {
                    this.$emit('input', value);
                }, this.awaitTime);
            },
            search() {
                this.$emit('search', this.value);
            },
            clear() {
                this.$emit('input', '');
                this.$emit('search', '');
            },
        },
    };
</script>