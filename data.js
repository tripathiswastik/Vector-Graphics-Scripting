/**
 * Modern Key Configuration & Lazy Audio Pool for Vector Graphics Scripting
 */
var keyConfig = {
	q: { sound: 'sounds/bubbles.mp3', color: '#1abc9c' },
	w: { sound: 'sounds/clay.mp3', color: '#2ecc71' },
	e: { sound: 'sounds/confetti.mp3', color: '#3498db' },
	r: { sound: 'sounds/corona.mp3', color: '#9b59b6' },
	t: { sound: 'sounds/dotted-spiral.mp3', color: '#34495e' },
	y: { sound: 'sounds/flash-1.mp3', color: '#16a085' },
	u: { sound: 'sounds/flash-2.mp3', color: '#27ae60' },
	i: { sound: 'sounds/flash-3.mp3', color: '#2980b9' },
	o: { sound: 'sounds/glimmer.mp3', color: '#8e44ad' },
	p: { sound: 'sounds/moon.mp3', color: '#2c3e50' },
	a: { sound: 'sounds/pinwheel.mp3', color: '#f1c40f' },
	s: { sound: 'sounds/piston-1.mp3', color: '#e67e22' },
	d: { sound: 'sounds/piston-2.mp3', color: '#e74c3c' },
	f: { sound: 'sounds/prism-1.mp3', color: '#95a5a6' },
	g: { sound: 'sounds/prism-2.mp3', color: '#f39c12' },
	h: { sound: 'sounds/prism-3.mp3', color: '#d35400' },
	j: { sound: 'sounds/splits.mp3', color: '#1abc9c' },
	k: { sound: 'sounds/squiggle.mp3', color: '#2ecc71' },
	l: { sound: 'sounds/strike.mp3', color: '#3498db' },
	z: { sound: 'sounds/suspension.mp3', color: '#9b59b6' },
	x: { sound: 'sounds/timer.mp3', color: '#34495e' },
	c: { sound: 'sounds/ufo.mp3', color: '#16a085' },
	v: { sound: 'sounds/veil.mp3', color: '#27ae60' },
	b: { sound: 'sounds/wipe.mp3', color: '#2980b9' },
	n: { sound: 'sounds/zig-zag.mp3', color: '#8e44ad' },
	m: { sound: 'sounds/piston-3.mp3', color: '#e056fd' }
};

if (typeof module !== 'undefined' && module.exports) {
	module.exports = keyConfig;
}