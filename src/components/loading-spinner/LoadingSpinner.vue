<template>
	<div
		class="loader ease-linear rounded-full border-gray-200"
		:style="customStyles"
		:class="customClasses"
	></div>
</template>

<script>
	export default {
		name: 'LoadingSpinner',
		props: {
			size: {
				type: Number,
				default: 16,
			},
			thick: {
				type: Number,
				default: 4,
			},
			spinColor: {
				type: String,
				default: '#5ebea3',
			},
		},
		computed: {
			customClasses() {
				return `w-${ this.size } h-${ this.size } border-${ this.thick } border-t-${ this.thick }`;
			},
			customStyles() {
				return `border-top-color: ${ this.spinColor };`;
			},
		},
	};
</script>

<style scoped>
	.loader {
		-webkit-animation: spinner 1.5s linear infinite;
		animation: spinner 1.5s linear infinite;
	}

	@-webkit-keyframes spinner {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
