	import { Dimensions,PixelRatio,Platform,StatusBar} from 'react-native';

	export const DEVICE = {
		...Dimensions.get('window')
	}

	const widthPercentageToDP = widthPercent => {
		const screenWidth = Dimensions.get('window').width;
		// Convert string input to decimal number
		const elemWidth = parseFloat(widthPercent);
		return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
	};
	const heightPercentageToDP = heightPercent => {
		const screenHeight = Dimensions.get('window').height;
		// Convert string input to decimal number
		const elemHeight = parseFloat(heightPercent);
	return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
	};


	/**
	 * Event listener function that detects orientation change (every time it occurs) and triggers 
	 * screen rerendering. It does that, by changing the state of the screen where the function is
	 * called. State changing occurs for a new state variable with the name 'orientation' that will
	 * always hold the current value of the orientation after the 1st orientation change.
	 * Invoke it inside the screen's constructor or in componentDidMount lifecycle method.
	 * @param {object} that Screen's class component this variable. The function needs it to
	 *                      invoke setState method and trigger screen rerender (this.setState()).
	 */
	const listenOrientationChange = that => {
		Dimensions.addEventListener('change', newDimensions => {
		// Retrieve and save new dimensions
		screenWidth = newDimensions.window.width;
		screenHeight = newDimensions.window.height;

		// Trigger screen's rerender with a state update of the orientation variable
		that.setState({
			orientation: screenWidth < screenHeight ? 'portrait' : 'landscape'
		});
		});
	};

	/**
	 * Wrapper function that removes orientation change listener and should be invoked in
	 * componentWillUnmount lifecycle method of every class component (UI screen) that
	 * listenOrientationChange function has been invoked. This should be done in order to
	 * avoid adding new listeners every time the same component is re-mounted.
	 */
	const removeOrientationListener = () => {
		Dimensions.removeEventListener('change', () => {});
	};

	const guidelineBaseWidth = 360;
	const guidelineBaseHeight = 760;
	const width = Dimensions.get('window').width;
	const height = Dimensions.get('window').height;
	
	const scale = size => width / guidelineBaseWidth * size;
	const verticalScale = size => height / guidelineBaseHeight * size;
	const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

	const normalize = (size) => {
		let scale = width / 320;
		return Math.round(scale * size);
	}

	function fontScale(size) {
		const SCREEN_WIDTH = Dimensions.get('window').width;
		const scale = SCREEN_WIDTH / 320;
		const newSize = size * scale
		if (Platform.OS === 'ios') {
			return Math.round(PixelRatio.roundToNearestPixel(newSize))
		} else {
			return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
		}
	}

	const X_WIDTH = 375;
	const X_HEIGHT = 812;

	const XSMAX_WIDTH = 414;
	const XSMAX_HEIGHT = 896;
	
	let isIPhoneX_v = false;
	let isIPhoneXMax_v = false;
	let isIPhoneWithMonobrow_v = false;

	const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

	if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
		if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
			isIPhoneWithMonobrow_v = true;
			isIPhoneX_v = true;
		}

		if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
			isIPhoneWithMonobrow_v = true;
			isIPhoneXMax_v = true;
		}
	}

	export const isIPhoneX = () =>  isIPhoneX_v;
	export const isIPhoneXMax = () =>  isIPhoneXMax_v;
	export const isIPhoneWithMonobrow = () => isIPhoneWithMonobrow_v;

	const getStatusBarHeight = (skipAndroid) => {
		return Platform.select({
			ios: isIPhoneWithMonobrow_v ? 44 : 20,
			android: skipAndroid ? 0 : StatusBar.currentHeight,
			default: 0
		})
	}

	export {
		widthPercentageToDP,
		heightPercentageToDP,
		listenOrientationChange,
		removeOrientationListener,
		scale, 
		verticalScale, 
		moderateScale,
		normalize,
		fontScale,
		getStatusBarHeight,
	};
