import React, {Component} from 'react';
import {remote} from 'electron';


export default class BrowserWindow extends Component {

    static propTypes = {
        title: React.PropTypes.string,
        visible: React.PropTypes.bool,
        icon: React.PropTypes.string,
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        left: React.PropTypes.number,
        top: React.PropTypes.number,
        center: React.PropTypes.bool,
        animated: React.PropTypes.bool,
        movable: React.PropTypes.bool,
        resizable: React.PropTypes.bool,
        minimizable: React.PropTypes.bool,
        maximizable: React.PropTypes.bool,
        fullscreenable: React.PropTypes.bool,
        closable: React.PropTypes.bool,
        alwaysOnTop: React.PropTypes.bool,
        skipTaskbar: React.PropTypes.bool,
        windowState: React.PropTypes.oneOf('normal', 'minimized', 'maximized', 'fullscreen', 'kiosk'),
        macOsVibrancy: React.PropTypes.oneOf('light', 'dark', 'titlebar', 'selection', 'menu', 'popover', 'sidebar', 'medium-light', 'ultra-dark', 'appearance-based')
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
