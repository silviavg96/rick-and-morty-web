<script>
    import Request from './Request';

    export default {
        extends: Request,
        name: 'All',
        props: {
            action: {},
            query: {
                type: Object,
                default: () => ({})
            },
        },
        data() {
            return {
                localData: []
            };
        },
        methods: {
            async request() {
                try {
                    this.loading = true;

                    const model = await this.getModel();
                    this.localData = await model.all({
                        query: this.query,
                        ...this.config
                    });
                    console.log(this.localData);

                    this.$emit('update:data', this.localData);
                } catch (error) {
                    console.log(error);
                    this.error = error;
                } finally {
                    this.loading = false;
                }
            },
        }
    }
</script>

<style scoped>

</style>