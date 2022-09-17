<template>
	<div>
		<ul v-if="item.children && item.children.length">
			<li>
				<router-link :to="item.link || item.path">{{ item.title }}</router-link>
				<template v-for="child of item.children" :key="item">
					<MenuItem :item="child" />
				</template>
			</li>
		</ul>
		<ul v-else>
			<li>
				<router-link :to="item.link || item.path">{{ item.title }}</router-link>
			</li>
		</ul>
	</div>
</template>
<script lang="ts" setup>
	const props = defineProps({
		item: {
			type: Object,
			default: () => {},
		},
	});
</script>
