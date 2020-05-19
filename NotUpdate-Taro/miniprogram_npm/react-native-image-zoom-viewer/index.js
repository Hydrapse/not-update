module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772951537, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var image_viewer_component_1 = require("./image-viewer.component");
exports.ImageViewer = image_viewer_component_1.default;
var image_viewer_type_1 = require("./image-viewer.type");
exports.ImageViewerPropsDefine = image_viewer_type_1.Props;
exports.default = image_viewer_component_1.default;
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./image-viewer.type":1589772951539}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951539, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var image_viewer_style_1 = require("./image-viewer.style");
var Props = /** @class */ (function () {
    function Props() {
        /**
         * 是否显示
         */
        this.show = false;
        /**
         * 图片数组
         */
        this.imageUrls = [];
        /**
         * 滑动到下一页的X阈值
         */
        this.flipThreshold = 80;
        /**
         * 当前页能滑到下一页X位置最大值
         */
        this.maxOverflow = 300;
        /**
         * 初始显示第几张图
         */
        this.index = 0;
        /**
         * 加载失败的图
         */
        this.failImageSource = undefined;
        /**
         * 背景颜色
         */
        this.backgroundColor = 'black';
        /**
         * style props for the footer container
         */
        this.footerContainerStyle = {};
        /**
         * Menu Context Values
         */
        this.menuContext = { saveToLocal: 'save to the album', cancel: 'cancel' };
        /**
         * 是否开启长按保存到本地的功能
         */
        this.saveToLocalByLongPress = true;
        /**
         * 是否允许缩放图片
         */
        this.enableImageZoom = true;
        this.style = {};
        /**
         * Enable swipe down to close image viewer.
         * When swipe down, will trigger onCancel.
         */
        this.enableSwipeDown = false;
        /**
         * 是否预加载图片
         */
        this.enablePreload = false;
        /**
         * 翻页时的动画时间
         */
        this.pageAnimateTime = 100;
        /**
         * 长按图片的回调
         */
        this.onLongPress = function () {
            //
        };
        /**
         * 单击回调
         */
        this.onClick = function () {
            //
        };
        /**
         * 双击回调
         */
        this.onDoubleClick = function () {
            //
        };
        /**
         * 图片保存到本地方法，如果写了这个方法，就不会调取系统默认方法
         * 针对安卓不支持 saveToCameraRoll 远程图片，可以在安卓调用此回调，调用安卓原生接口
         */
        this.onSave = function () {
            //
        };
        this.onMove = function () {
            //
        };
        /**
         * 自定义头部
         */
        this.renderHeader = function () {
            return null;
        };
        /**
         * 自定义尾部
         */
        this.renderFooter = function () {
            return null;
        };
        /**
         * 自定义计时器
         */
        this.renderIndicator = function (currentIndex, allSize) {
            return React.createElement(react_native_1.View, { style: image_viewer_style_1.simpleStyle.count }, React.createElement(react_native_1.Text, { style: image_viewer_style_1.simpleStyle.countText }, currentIndex + '/' + allSize));
        };
        /**
         * Render image component
         */
        this.renderImage = function (props) {
            return React.createElement(react_native_1.Image, props);
        };
        /**
         * 自定义左翻页按钮
         */
        this.renderArrowLeft = function () {
            return null;
        };
        /**
         * 自定义右翻页按钮
         */
        this.renderArrowRight = function () {
            return null;
        };
        /**
         * 弹出大图的回调
         */
        this.onShowModal = function () {
            //
        };
        /**
         * 取消看图的回调
         */
        this.onCancel = function () {
            //
        };
        /**
         * function that fires when user swipes down
         */
        this.onSwipeDown = function () {
            //
        };
        /**
         * 渲染loading元素
         */
        this.loadingRender = function () {
            return null;
        };
        /**
         * 保存到相册的回调
         */
        this.onSaveToCamera = function () {
            //
        };
        /**
         * 当图片切换时触发
         */
        this.onChange = function () {
            //
        };
    }
    return Props;
}());
exports.Props = Props;
var State = /** @class */ (function () {
    function State() {
        /**
         * 是否显示
         */
        this.show = false;
        /**
         * 当前显示第几个
         */
        this.currentShowIndex = 0;
        /**
         * Used to detect if parent component applied new index prop
         */
        this.prevIndexProp = 0;
        /**
         * 图片拉取是否完毕了
         */
        this.imageLoaded = false;
        /**
         * 图片长宽列表
         */
        this.imageSizes = [];
        /**
         * 是否出现功能菜单
         */
        this.isShowMenu = false;
    }
    return State;
}());
exports.State = State;
//# sourceMappingURL=image-viewer.type.js.map
}, function(modId) { var map = {"./image-viewer.style":1589772951540}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772951540, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (width, height, backgroundColor) {
    return {
        modalContainer: { backgroundColor: backgroundColor, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
        watchOrigin: { position: 'absolute', width: width, bottom: 20, justifyContent: 'center', alignItems: 'center' },
        watchOriginTouchable: {
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 30,
            borderColor: 'white',
            borderWidth: 0.5,
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        },
        watchOriginText: { color: 'white', backgroundColor: 'transparent' },
        imageStyle: {},
        container: { backgroundColor: backgroundColor },
        moveBox: { flexDirection: 'row', alignItems: 'center' },
        menuContainer: { position: 'absolute', width: width, height: height, left: 0, bottom: 0, zIndex: 12 },
        menuShadow: {
            position: 'absolute',
            width: width,
            height: height,
            backgroundColor: 'black',
            left: 0,
            bottom: 0,
            opacity: 0.2,
            zIndex: 10
        },
        menuContent: { position: 'absolute', width: width, left: 0, bottom: 0, zIndex: 11 },
        operateContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            height: 40,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1
        },
        operateText: { color: '#333' },
        loadingTouchable: { width: width, height: height },
        loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
        arrowLeftContainer: { position: 'absolute', top: 0, bottom: 0, left: 0, justifyContent: 'center', zIndex: 13 },
        arrowRightContainer: { position: 'absolute', top: 0, bottom: 0, right: 0, justifyContent: 'center', zIndex: 13 }
    };
});
exports.simpleStyle = {
    count: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 38,
        zIndex: 13,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    countText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {
            width: 0,
            height: 0.5
        },
        textShadowRadius: 0
    }
};
//# sourceMappingURL=image-viewer.style.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772951537);
})()
//# sourceMappingURL=index.js.map