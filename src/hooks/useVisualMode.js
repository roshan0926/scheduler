import { useState } from 'react';

export default function useVisualMode(initial) {
	const [mode, setMode] = useState(initial);
	const [history, setHistory] = useState([initial]);

	const transition = function (mode, replace = false) {
		if (replace) {
			setHistory([history.pop(), ...history, mode]);
			setMode(mode);
		} else {
			setMode(mode);
			setHistory([...history, mode]);
		}
	};

	const back = function () {
		if (history.length > 1) {
			setHistory([history.pop(), ...history]);
			setMode(history[history.length - 1]);
		}
	};

	return { mode, transition, back };
}
