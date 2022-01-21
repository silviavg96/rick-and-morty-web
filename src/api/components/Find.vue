<script>
    import Request from './Request';

    export default {
        extends: Request,
        name: 'Find',
        props: {
            action: {},
            primaryKey: {
                type: [String, Number],
                required: true
            }
        },
        methods: {
            async request() {
                try {
                    this.loading = true;

                    const model = await this.getModel();
                    this.localData = await model.find(this.primaryKey, this.config);
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