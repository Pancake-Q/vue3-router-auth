<template>
	<div class="my-page">
		<router-view />
	</div>
</template>

<style scoped>
	.my-page {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 90px 30px 90px 280px;
		z-index: 1;
		box-sizing: border-box;
		background-color: #fff;
	}
</style>
