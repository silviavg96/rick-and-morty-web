<script>
    export default {
        name: 'Request',
        props: {
            model: {
                type: String,
                required: true
            },
            action: {
                type: String,
                required: true,
                validator(value) {
                    return !['all', 'paginate', 'find'].includes(value);
                }
            },
            form: {
                type: Object,
                default: () => ({})
            },
            config: {
                type: Object,
                default: () => ({})
            },
            data: {
                type: null,
                default: null
            },
            immediate: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                localData: null,
                loading: false,
                error: null
            };
        },
        methods: {
            async request() {
                try {
                    this.loading = true;

                    const model = await this.getModel();
                    console.log('model', model)

                    this.localData = await model[this.action](this.form, this.config);

                    this.$emit('update:data', this.localData);
                    this.$emit('success', this.localData);
                } catch (error) {
                    this.error = error;
                    this.$emit('error', error);
                } finally {
                    this.loading = false;
                }
            },
            async getModel() {
                const model = await import(`../models/${this.model}`);
                return model.default;
            },
        },
        computed: {
            slotProps() {
                return {
                    request: this.request,
                    loading: this.loading,
                    data: this.localData,
                    error: this.error
                };
            }
        },
        render() {
            return this.$scopedSlots.default && this.$scopedSlots.default({
                ...this.slotProps
            });
        },
        created() {
            if (this.immediate) {
                this.request();
            }
        }
    }
</script>

<style scoped>

</style>