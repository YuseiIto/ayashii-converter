import type { MetaFunction } from "@remix-run/cloudflare";

import {
	initializeImageMagick,
	ImageMagick,
	Magick,
	MagickFormat,
	Quantum,
} from "@imagemagick/magick-wasm";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	const run = async () => {
		console.log(Magick.imageMagickVersion);
		console.log("Delegates:", Magick.delegates);
		console.log("Features:", Magick.features);
		console.log("Quantum:", Quantum.depth);

		console.log("");
		ImageMagick.read("logo:", (image) => {
			image.resize(100, 100);
			image.blur(1, 5);
			console.log(image.toString());

			image.write(MagickFormat.Jpeg, (data) => {
				console.log(data.length);
			});
		});
	};

	return (
		<main className="">
			<div>
				<button className="btn btn-blue" onClick={run}>
					Primary
				</button>
			</div>
		</main>
	);
}
