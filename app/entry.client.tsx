import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { initializeImageMagick } from "@imagemagick/magick-wasm";

import wasmUrl from "@imagemagick/magick-wasm/magick.wasm?url";

fetch(wasmUrl).then(async (response) => {
	const wasmBytes = await response.arrayBuffer();

	initializeImageMagick(wasmBytes).then(() => {
		startTransition(() => {
			hydrateRoot(
				document,
				<StrictMode>
					<RemixBrowser />
				</StrictMode>,
			);
		});
	});
});
