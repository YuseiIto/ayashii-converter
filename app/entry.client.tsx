import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { initializeImageMagick } from "@imagemagick/magick-wasm";

import wasmUrl from "@imagemagick/magick-wasm/magick.wasm?url";

const wasmBytes = await fetch(wasmUrl).then((response) =>
	response.arrayBuffer(),
);

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
