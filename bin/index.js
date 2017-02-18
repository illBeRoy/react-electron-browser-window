'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _electron = require('electron');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrowserWindow = function (_Component) {
    _inherits(BrowserWindow, _Component);

    function BrowserWindow() {
        _classCallCheck(this, BrowserWindow);

        return _possibleConstructorReturn(this, (BrowserWindow.__proto__ || Object.getPrototypeOf(BrowserWindow)).apply(this, arguments));
    }

    _createClass(BrowserWindow, [{
        key: 'render',
        value: function render() {

            var window = _electron.remote.getCurrentWindow();

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
                        window.setKiosk(true);
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
    }]);

    return BrowserWindow;
}(_react.Component);

BrowserWindow.propTypes = {
    title: _react2.default.PropTypes.string,
    visible: _react2.default.PropTypes.bool,
    icon: _react2.default.PropTypes.string,
    width: _react2.default.PropTypes.number,
    height: _react2.default.PropTypes.number,
    left: _react2.default.PropTypes.number,
    top: _react2.default.PropTypes.number,
    center: _react2.default.PropTypes.bool,
    animated: _react2.default.PropTypes.bool,
    movable: _react2.default.PropTypes.bool,
    resizable: _react2.default.PropTypes.bool,
    minimizable: _react2.default.PropTypes.bool,
    maximizable: _react2.default.PropTypes.bool,
    fullscreenable: _react2.default.PropTypes.bool,
    closable: _react2.default.PropTypes.bool,
    alwaysOnTop: _react2.default.PropTypes.bool,
    skipTaskbar: _react2.default.PropTypes.bool,
    windowState: _react2.default.PropTypes.oneOf('normal', 'minimized', 'maximized', 'fullscreen', 'kiosk'),
    macOsVibrancy: _react2.default.PropTypes.oneOf('light', 'dark', 'titlebar', 'selection', 'menu', 'popover', 'sidebar', 'medium-light', 'ultra-dark', 'appearance-based')
};
exports.default = BrowserWindow;