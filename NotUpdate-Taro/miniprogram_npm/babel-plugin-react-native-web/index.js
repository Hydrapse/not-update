module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1589772950405, function(require, module, exports) {
module.exports = require('./src');

}, function(modId) {var map = {"./src":1589772950406}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950406, function(require, module, exports) {
const moduleMap = require('./moduleMap');

const isCommonJS = opts => opts.commonjs === true;

const getDistLocation = (importName, opts) => {
  const format = isCommonJS(opts) ? 'cjs/' : '';
  if (importName === 'index') {
    return `react-native-web/dist/${format}index`;
  } else if (importName && moduleMap[importName]) {
    return `react-native-web/dist/${format}exports/${importName}`;
  }
};

const isReactNativeRequire = (t, node) => {
  const { declarations } = node;
  if (declarations.length > 1) {
    return false;
  }
  const { id, init } = declarations[0];
  return (
    (t.isObjectPattern(id) || t.isIdentifier(id)) &&
    t.isCallExpression(init) &&
    t.isIdentifier(init.callee) &&
    init.callee.name === 'require' &&
    init.arguments.length === 1 &&
    (init.arguments[0].value === 'react-native' || init.arguments[0].value === 'react-native-web')
  );
};

const isReactNativeModule = ({ source, specifiers }) =>
  source &&
  (source.value === 'react-native' || source.value === 'react-native-web') &&
  specifiers.length;

module.exports = function({ types: t }) {
  return {
    name: 'Rewrite react-native to react-native-web',
    visitor: {
      ImportDeclaration(path, state) {
        const { specifiers } = path.node;
        if (isReactNativeModule(path.node)) {
          const imports = specifiers
            .map(specifier => {
              if (t.isImportSpecifier(specifier)) {
                const importName = specifier.imported.name;
                const distLocation = getDistLocation(importName, state.opts);

                if (distLocation) {
                  return t.importDeclaration(
                    [t.importDefaultSpecifier(t.identifier(specifier.local.name))],
                    t.stringLiteral(distLocation)
                  );
                }
              }
              return t.importDeclaration(
                [specifier],
                t.stringLiteral(getDistLocation('index', state.opts))
              );
            })
            .filter(Boolean);

          path.replaceWithMultiple(imports);
        }
      },
      ExportNamedDeclaration(path, state) {
        const { specifiers } = path.node;
        if (isReactNativeModule(path.node)) {
          const exports = specifiers
            .map(specifier => {
              if (t.isExportSpecifier(specifier)) {
                const exportName = specifier.exported.name;
                const localName = specifier.local.name;
                const distLocation = getDistLocation(localName, state.opts);

                if (distLocation) {
                  return t.exportNamedDeclaration(
                    null,
                    [t.exportSpecifier(t.identifier('default'), t.identifier(exportName))],
                    t.stringLiteral(distLocation)
                  );
                }
              }
              return t.exportNamedDeclaration(
                null,
                [specifier],
                t.stringLiteral(getDistLocation('index', state.opts))
              );
            })
            .filter(Boolean);

          path.replaceWithMultiple(exports);
        }
      },
      VariableDeclaration(path, state) {
        if (isReactNativeRequire(t, path.node)) {
          const { id } = path.node.declarations[0];
          if (t.isObjectPattern(id)) {
            const imports = id.properties
              .map(identifier => {
                const distLocation = getDistLocation(identifier.key.name, state.opts);
                if (distLocation) {
                  return t.variableDeclaration(path.node.kind, [
                    t.variableDeclarator(
                      t.identifier(identifier.value.name),
                      t.memberExpression(
                        t.callExpression(t.identifier('require'), [t.stringLiteral(distLocation)]),
                        t.identifier('default')
                      )
                    )
                  ]);
                }
              })
              .filter(Boolean);

            path.replaceWithMultiple(imports);
          } else if (t.isIdentifier(id)) {
            const name = id.name;
            const importIndex = t.variableDeclaration(path.node.kind, [
              t.variableDeclarator(
                t.identifier(name),
                t.callExpression(t.identifier('require'), [
                  t.stringLiteral(getDistLocation('index', state.opts))
                ])
              )
            ]);

            path.replaceWith(importIndex);
          }
        }
      }
    }
  };
};

}, function(modId) { var map = {"./moduleMap":1589772950407}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1589772950407, function(require, module, exports) {
// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT EDIT.
module.exports = {
  AccessibilityInfo: true,
  ActionSheetIOS: true,
  ActivityIndicator: true,
  Alert: true,
  AlertIOS: true,
  Animated: true,
  AppRegistry: true,
  AppState: true,
  AsyncStorage: true,
  BackHandler: true,
  Button: true,
  CameraRoll: true,
  CheckBox: true,
  Clipboard: true,
  ColorPropType: true,
  DatePickerAndroid: true,
  DatePickerIOS: true,
  DeviceEventEmitter: true,
  DeviceInfo: true,
  Dimensions: true,
  DrawerLayoutAndroid: true,
  Easing: true,
  EdgeInsetsPropType: true,
  FlatList: true,
  I18nManager: true,
  Image: true,
  ImageBackground: true,
  ImageEditor: true,
  ImagePickerIOS: true,
  ImageStore: true,
  InputAccessoryView: true,
  InteractionManager: true,
  Keyboard: true,
  KeyboardAvoidingView: true,
  LayoutAnimation: true,
  Linking: true,
  ListView: true,
  MaskedViewIOS: true,
  Modal: true,
  NativeEventEmitter: true,
  NativeModules: true,
  NavigatorIOS: true,
  NetInfo: true,
  PanResponder: true,
  PermissionsAndroid: true,
  Picker: true,
  PickerIOS: true,
  PixelRatio: true,
  Platform: true,
  PointPropType: true,
  ProgressBar: true,
  ProgressBarAndroid: true,
  ProgressViewIOS: true,
  PushNotificationIOS: true,
  RefreshControl: true,
  SafeAreaView: true,
  ScrollView: true,
  SectionList: true,
  SegmentedControlIOS: true,
  Settings: true,
  Share: true,
  Slider: true,
  SnapshotViewIOS: true,
  StatusBar: true,
  StatusBarIOS: true,
  StyleSheet: true,
  SwipeableFlatList: true,
  SwipeableListView: true,
  Switch: true,
  Systrace: true,
  TVEventHandler: true,
  TabBarIOS: true,
  Text: true,
  TextInput: true,
  TextPropTypes: true,
  TimePickerAndroid: true,
  ToastAndroid: true,
  ToolbarAndroid: true,
  Touchable: true,
  TouchableHighlight: true,
  TouchableNativeFeedback: true,
  TouchableOpacity: true,
  TouchableWithoutFeedback: true,
  UIManager: true,
  Vibration: true,
  VibrationIOS: true,
  View: true,
  ViewPagerAndroid: true,
  ViewPropTypes: true,
  VirtualizedList: true,
  WebView: true,
  YellowBox: true,
  createElement: true,
  findNodeHandle: true,
  processColor: true,
  render: true,
  unmountComponentAtNode: true
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1589772950405);
})()
//# sourceMappingURL=index.js.map