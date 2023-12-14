import { Platform } from 'react-native';

const theme = {
	colors: {
		textPrimary: '#24292e',
		textSecondary: '#586069',
		textHeader: '#ffffff',
		primary: '#0366d6',
		header: '#24292e',
		mainBackground: '#e1e4e8',
	},
	fontSizes: {
		body: 14,
		subheading: 16,
	},
	fonts: {
		main: Platform.select({
			android: 'Roboto',
			iOS: 'Arial',
			default: 'System',
		}),
	},
	fontWeights: {
		normal: '400',
		bold: '700',
	},
};

export default theme;
