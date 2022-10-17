/**
 * External dependencies
 */
import { FastAverageColor } from 'fast-average-color';
import { colord } from 'colord';

/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

function compositeOver( source, dest ) {
	const a = source.a + dest.a * ( 1 - source.a );
	const r = source.r * source.a + dest.r * dest.a * ( 1 - source.a );
	const g = source.g * source.a + dest.g * dest.a * ( 1 - source.a );
	const b = source.b * source.a + dest.b * dest.a * ( 1 - source.a );
	return { r, g, b, a };
}

function retrieveFastAverageColor() {
	if ( ! retrieveFastAverageColor.fastAverageColor ) {
		retrieveFastAverageColor.fastAverageColor = new FastAverageColor();
	}
	return retrieveFastAverageColor.fastAverageColor;
}

/**
 * useCoverIsDark is a hook that returns a boolean variable specifying if the cover
 * background is dark or not.
 *
 * @param {?string} url          Url of the media background.
 * @param {?number} dimRatio     Transparency of the overlay color. If an image and
 *                               color are set, dimRatio is used to decide what is used
 *                               for background darkness checking purposes.
 * @param {?string} overlayColor String containing the overlay color value if one exists.
 *
 * @return {boolean} True if the cover background is considered "dark" and false otherwise.
 */
export default function useCoverIsDark(
	url,
	dimRatio = 50,
	overlayColor = '#000'
) {
	const [ isDark, setIsDark ] = useState( false );
	useEffect( () => {
		if ( url ) {
			const imgCrossOrigin = applyFilters(
				'media.crossOrigin',
				undefined,
				url
			);
			retrieveFastAverageColor()
				.getColorAsync( url, {
					// Previously the default color was white, but that changed
					// in v6.0.0 so it has to be manually set now.
					defaultColor: [ 255, 255, 255, 255 ],
					// Errors that come up don't reject the promise, so error
					// logging has to be silenced with this option.
					silent: process.env.NODE_ENV === 'production',
					crossOrigin: imgCrossOrigin,
				} )
				.then( ( color ) => {
					const overlay = colord( overlayColor ).alpha(
						dimRatio / 100
					);
					const media = colord( color.hex );
					const c = colord(
						compositeOver( overlay.toRgb(), media.toRgb() )
					);
					console.log( c );
					setIsDark( c.isDark() );
				} );
		} else {
			setIsDark( colord( overlayColor ).isDark() );
		}
	}, [ overlayColor, url, setIsDark ] );
	return isDark;
}
