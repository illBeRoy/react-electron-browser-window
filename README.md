# react-electron-browser-window
*Electron's BrowserWindow as a react component*

### Abstract
A react component that gives access to the encapsulating window, similarly to how react native's Statusbar component works.

By controlling the window through a react component, you give your react app canonic access to electron's BrowserWindow object. A good usecase is a multiscreen application - you can embed a `<BrowserWindow />` component in each of your route components, making each one of them adjust the window to its needs without having to programatically do so throguh electron's `remote`.

### Install
* Using NPM:

	`$ npm install --save react-electron-browser-window`

* Using yarn:

	`$ yarn add react-electron-browser-window`

### Documentation
The `<BrowserWindow />` component contains the following props:

* `title`: String - title of the window (if not frameless)
* `visible`: Boolean - whether to show or hide the window
* `icon`: Boolean - sets the window's icon
* `width, height`: (Number, Number) - window's dimensions, will apply only if both are given
* `left, top`: (Number, Number) - window's position, will apply only if both are given
* `center`: Boolean - moves the window to the center, overrides position
* `animated`: Boolean - if true, will animate window between dimensions and positions.
* `movable`: Boolean - if true, window will be movable
* `resizable`: Boolean - if true, window will be resizable
* `minimizable`: Boolean - if true, window will be minisizable
* `maximizable`: Boolean - if true, window will be maximizable
* `fullscreenable`: Boolean - if true, window will be fullscreenable
* `closable`: Boolean - if true, window will be closable
* `alwaysOnTop`: Boolean - whether window always shows on top
* `skipTaskbar`: Boolean - if true, window will not show on taskbar
* `windowState`: String - either one of the following options:
	* `normal`: default window state
	* `minimized`: window will be minimized
	* `maximized`: window will be maximized
	* `fullscreen`: window will be fullscreen
	* `kiosk`: window will show in kiosk mode
* `macOsVibrancy`: String - displays the window with vibrancy effect on macOS:
`light`, `dark`, `titlebar`, `selection`, `menu`, `popover`, `sidebar`, `medium-light`, `ultra-dark`, `appearance-based`

**Default value policy:**

The component only takes its parameters **explicitly**, that is, if it was not passed, it will not be touched.
That is useful in cases where you want to control certain aspects of your window from other places in your code. If you only pass certain parameters through the BrowserWindow component, you can be rest assured that it will apply nothing but them.

### Example
```javascript
import React, {Component} from 'react';
import BrowserWindow from 'react-electron-browser-window';


class App extends Component {

	render() {
	
		return (
			<BrowserWindow title="Hello, World!" visible={true} center={true} />
		)
	}

}
```

### License
Code is provided under MIT license.
