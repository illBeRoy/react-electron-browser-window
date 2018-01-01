import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {remote} from 'electron';


export default class BrowserWindow extends Component {

    static propTypes = {
        title: PropTypes.string,
        visible: PropTypes.bool,
        icon: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        left: PropTypes.number,
        top: PropTypes.number,
        center: PropTypes.bool,
        animated: PropTypes.bool,
        movable: PropTypes.bool,
        resizable: PropTypes.bool,
        minimizable: PropTypes.bool,
        maximizable: PropTypes.bool,
        fullscreenable: PropTypes.bool,
        closable: PropTypes.bool,
        alwaysOnTop: PropTypes.bool,
        skipTaskbar: PropTypes.bool,
        windowState: PropTypes.oneOf('normal', 'minimized', 'maximized', 'fullscreen', 'kiosk'),
        macOsVibrancy: PropTypes.oneOf('light', 'dark', 'titlebar', 'selection', 'menu', 'popover', 'sidebar', 'medium-light', 'ultra-dark', 'appearance-based')
    };

    render() {

        let window = remote.getCurrentWindow();

        if (this.props.title) {

            window.setTitle(this.props.title);
        }

        if (this.props.icon) {

        	window.setIcon(this.props.icon);
        }

        if (typeof this.props.left == 'number' && typeof this.props.top == 'number') {

        	window.setPosition(this.props.left, this.props.top, this.props.animated);
        }

        if (this.props.width && this.props.height) {

            window.setSize(this.props.width, this.props.height, this.props.animated);
        }

        if (this.props.macOsVibrancy) {

        	window.setVibrancy(this.props.macOsVibrancy);
        }

        switch (this.props.windowState) {
        	case 'minimized':
        		if (!window.isMinimized()) {

        			window.setKiosk(false);
        			window.setFullScreen(false);
        			window.minimize();
        		}
        		break;

        	case 'maximized':
        		if (!window.isMaximized()) {

        			window.setKiosk(false);
        			window.setFullScreen(false);
        			window.maximize();
        		}
        		break;

        	case 'fullscreen':
        		if (!window.isFullScreen()) {

        			window.setKiosk(false);
        			window.setFullScreen(true);
        		}
        		break;

        	case 'kiosk':
        		if (!window.isKiosk()) {

        			window.setFullScreen(false);
        			window.setKiosk(true)
        		}

        	case 'normal':
        		break;

        }

        if (typeof this.props.resizable == 'boolean') {

            window.setResizable(this.props.resizable);
        }

        if (typeof this.props.movable == 'boolean') {

            window.setMovable(this.props.movable);
        }

        if (typeof this.props.minimizable == 'boolean') {

            window.setMinimizable(this.props.minimizable);
        }

        if (typeof this.props.maximizable == 'boolean') {

            window.setMaximizable(this.props.maximizable);
        }

        if (typeof this.props.fullscreenable == 'boolean') {

            window.setFullScreenable(this.props.fullscreenable);
        }

        if (typeof this.props.closable == 'boolean') {

            window.setClosable(this.props.closable);
        }        

        if (typeof this.props.alwaysOnTop == 'boolean') {

            window.setAlwaysOnTop(this.props.alwaysOnTop);
        }        

        if (typeof this.props.skipTaskbar == 'boolean') {

            window.setSkipTaskbar(this.props.skipTaskbar);
        }        

        if (this.props.center) {

            window.center();
        }

        if (typeof this.props.visible == 'boolean') {

        	if (this.props.visible) {

            	window.show();
	        } else {

    	    	window.hide();
	        }
	    }

        return null;
    }
}
