import React from 'react';
import {
	SafeAreaView,
	StatusBar,
	useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import GameScreen from './source/screen/GameScreen/GameScreen';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		flex: 1,
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};
	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<GameScreen />
		</SafeAreaView>
	);
};

export default App;
