<template>
	<d-statistic>
		<d-statistic-item title="销售总量" :precision="2" value="1000" />
		<d-statistic-item value="2000">
			<template #title>插槽使用</template>
			<template #prefix>
				<i class="d-icon-biaozhu"></i>
			</template>
		</d-statistic-item>
		<d-statistic-item title="昨日订单量" :precision="2" value="3000" />
	</d-statistic>
</template>

<script>
export default {};
</script>
