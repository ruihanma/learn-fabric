// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
var canvas = new fabric.Canvas('c');
var circle = new fabric.Circle({
  // 对象自身样式 //////////////////////////////////////////////////////////////////////
  angle: 45,
  // 物体的旋转角度（度）旋转点是左上角
  startAngle: 0,
  endAngle: 270 * Math.PI / 180,
  // 圆弧形的端角，应为度，这是一个疏忽。 在下一个主要版本中可能会更改为度
  // 注意 这里如果fill了颜色 那么形状会变成一个残月 而不是从中心点缺失的3/4个圆饼状
  fill: 'rgba(0,0,0,1)',
  // 对象填充的颜色采用CSS颜色
  fillRule: "nonzero",
  // 填充规则 接受两种模式 nonzero, evenodd
  // 向后不兼容说明：此属性用于设置globalCompositeOperation直到v1.4.12（改用`fabric.Object＃globalCompositeOperation`）
  // 目前未看出明显差别
  radius: 50,
  left: 100,
  top: 100,
  // 对象自身样式 End //////////////////////////////////////////////////////////////////////
  // 外侧控制框 //////////////////////////////////////////////////////////////////////
  backgroundColor: "hsl(240,100%,50%)",
  // 对象的背景颜色。接受rgba 十六进制 hsla(hue, saturation, lightness)
  // 针对对象的轮廓 不针对内部的形状
  borderColor: "#ff0000",
  // 控制对象边界的颜色（处于活动状态时）
  // 针对对象的轮廓 不针对内部的形状
  borderDashArray: [5],
  // 指定对象边框的虚线图案的数组（hasBorder必须为true）
  // 用法如上 未尝试数组的极值 最小为一
  borderOpacityWhenMoving: 1,
  // 当对象处于活动和移动状态时，对象的控制边界不透明
  borderScaleFactor: 2,
  // 对象控制边界的比例因子
  // 控制框的宽度
  centeredRotation: true,
  // 设置为true时，通过控件旋转时，此对象将使用中心点作为变换的原点。 向后不兼容说明：此属性替代“ centerTransform”（布尔值）。
  // 只针对控件旋转 不针对rotate角度
  // 如果为false 旋转的点为左上角00点
  centeredScaling: true,
  // 如果为true，则在通过控件缩放时，此对象将使用中心点作为变换的原点。 向后不兼容说明：此属性替代“ centerTransform”（布尔值）。
  // 如果为false 缩放的点为左上角00点
  cornerColor: "rgba(255,0,0)",
  // 控制对象角的颜色（处于活动状态时）
  // cornerDashArray: [1, 3],
  // 指定对象控件的破折号模式的数组（hasBorder必须为true）
  cornerSize: 15,
  // 对象控制角的大小（以像素为单位）
  cornerStrokeColor: "#333",
  // 控制对象角的颜色（当它是活动的且 transparentCorners 为false）
  cornerStyle: "circle",
  // 控制对象角的形式 'rect' or 'circle'
  transparentCorners: false,
  // 外侧控制框 End //////////////////////////////////////////////////////////////////////
  // 剪裁操作 //////////////////////////////////////////////////////////////////////
  absolutePositioned: false,
  // 仅在将对象用作clipPath时才有意义。
  // 如果为true，clipPath将具有相对于画布的顶部和左侧，并且不受对象转换的影响。
  // 这将使clipPath相对于画布，但仅剪切特定对象。 警告这是测试版，此功能可能会更改或重命名。 从2.4.0开始
  // clipPath: new fabric.Rect({width: 10, height: 20, fill: '#f55', opacity: 0.7}),
  // 无需描边即可定义其形状的裁剪区域的fabricObject。 呈现为黑色时，将在呈现对象时使用clipPath对象，并将上下文放置在对象cacheCanvas的中心。 如果希望clipPath的0,0与对象中心对齐，请使用clipPath.originX / Y来“居中”
  // 参数为各种形状的对象
  // 会将原来的图形按照传入的形状进行剪裁
  // clipTo: ctx => ctx.arc(0, 0, 10, 0, Math.PI * 2, true),
  // 确定对象裁剪的函数（上下文作为第一个参数传递）。
  // 如果您使用代码最小化，则可以缩小/忽略ctx参数，您应该在函数中使用var ctx = arguments [0];作为解决方法。
  // 请注意，上下文原点位于对象的中心点（不是左/上角）
  // 会将原来的图形按照传入的形状进行剪裁
  // 2.0.0作废
  // 同上clipPath
  // 剪裁操作 End //////////////////////////////////////////////////////////////////////
  // aCoords
  // 在画布对象中描述对象的角位置绝对坐标属性为tl，tr，bl，br，并描述四个主角。
  // 每个属性都是一个带有x，y，Fabric.Point实例的对象。
  // 坐标取决于以下属性：宽度，高度，scaleX，scaleY skewX，skewY，角度，strokeWidth，顶部，左侧。
  // 这些坐标对于了解对象在哪里很有用。
  // 它们会使用oCoords更新，但是在缩放或平移更改时无需更新。
  // 坐标使用@method setCoords更新。
  // 您可以计算它们而无需使用@method calcCoords（true）更新。
  // cacheProperties
  // 检查高速缓存是否需要刷新时要考虑的属性列表 可以通过 statefullCache ON（或如果需要的话是惰性模式）
  // 或通过单次调用Object.set（key，value）来检查那些属性。
  // 如果键在此列表中，则将该对象标记为脏并在下一次渲染时刷新 含有的属性如下
  // 'fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform' +
  // 'strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath'
  dirty: false,
  // 当设置为“ true”时，对象的缓存将在下一次渲染调用时重新渲染。 从1.7.0开始
  evented: true,
  // 设置为false时，对象不能成为事件的目标。 所有事件都通过它传播。 在v1.3.4中引入
  // 即 设置为false 就不能拖拽移动 不能拖拽缩放 不能拖拽旋转 ；可以点击控制角移动对象
  excludeFromExport: false // 如果为true，则不会以OBJECT / JSON格式导出对象

});
canvas.add(circle);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58033" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/learn-fabric.e31bb0bc.js.map