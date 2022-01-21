<script>
    import All from './All';

    export default {
        extends: All,
        name: 'Paginate',
        props: {
            action: {},
            query: {
                type: Object,
                default: () => ({})
            },
            replace: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                meta: null
            };
        },
        methods: {
            async request() {
                try {
                    this.loading = true;
                    const model = await this.getModel();
                    const { info, results } = await model.paginate({
                        query: this.query,
                        ...this.config
                    });

                    if (this.replace) {
                        this.localData = [];
                    }

                    console.log('sfe', results, info)
                    this.localData.push(...results);
                    this.meta = info;

                    this.$emit('update:data', this.localData);
                } catch (error) {
                    console.log(error);
                    this.error = error;
                } finally {
                    this.loading = false;
                }
            },
        },
        computed: {
            slotProps() {
                return {
                    request: this.request,
                    loading: this.loading,
                    data: this.localData,
                    meta: this.meta
                };
            }
        },
    }
</script>

<style scoped>

</style>