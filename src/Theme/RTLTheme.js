import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const theme = createTheme({
	direction: 'rtl',
});

// Create rtl cache
const cacheRtl = createCache({
	key: 'muirtl',
	stylisPlugins: [prefixer, rtlPlugin],
});

export default function Direction(props) {
	return (
		<CacheProvider value={cacheRtl}>
			<ThemeProvider theme={theme}>
              {props.children}
			</ThemeProvider>
		</CacheProvider>
	);
}