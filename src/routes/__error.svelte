<script lang="ts" context="module">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ error, status }) => ({
		props: {
			status,
			error,
		},
	});
</script>

<script lang="ts">
	// Start: Local Imports

	//  Components
	import SEO from '$components/seo/SEO.svelte';

	// Models
	import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';
	// End: Local Imports

	// Start: Exported Properties
	export let status: string;
	export let error: Error;
	// End: Exported Properties

	const metaData: Partial<IMetaTagProperties> = {
		title: `${status} | Discover Twitter Spaces`,
		description: '404 page of Discover Twitter Spaces',
		keywords: [
			'Twitter Spaces',
			'Twitter',
			'Spaces',
			'Discover',
			'Discover Twitter Spaces',
			'Discover Twitter Spaces in your area',
		],
		searchUrl: '/error',
	};
</script>

<!-- Start: Header Tage -->
<SEO metaData="{metaData}" />
<!-- End: Header Tage -->

<!-- Start: Error View Layout -->
<div class="md:container md:mx-auto">
	<div class="flex flex-col justify-center items-center">
		<!-- Start: Error Status Code -->
		<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
			{status}
		</h1>
		<!-- End: Error Status Code -->
		<p class="text-black dark:text-white mx-1">
			{error.name}
		</p>
	</div>
</div>
<!-- End: Error View Layout -->
