declare module 'sveltekit-autoimport' {
	import { MarkupPreprocessor } from 'svelte/types/compiler/preprocess/types';

	type AutoImportArgs = {
		include?: string[];
		exclude?: string[];
		module?: Record<string, string[]>;
		mapping?: unknown;
		components?: unknown;
	};

	export default function (args: AutoImportArgs): { markup: MarkupPreprocessor };
}
