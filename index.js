var canvas = new fabric.Canvas('c');
var circle = new fabric.Circle({

  // 对象自身样式 //////////////////////////////////////////////////////////////////////
  angle: 0,
  // 物体的旋转角度（度）旋转点是左上角

  startAngle: 0,

  endAngle: (270 * Math.PI) / 180,
  // 圆弧形的端角，应为度，这是一个疏忽。 在下一个主要版本中可能会更改为度
  // 注意 这里如果fill了颜色 那么形状会变成一个残月 而不是从中心点缺失的3/4个圆饼状

  fill: 'rgba(0,0,0,1)',
  // 对象填充的颜色采用CSS颜色

  fillRule: `nonzero`,
  // 填充规则 接受两种模式 nonzero, evenodd
  // 向后不兼容说明：此属性用于设置globalCompositeOperation直到v1.4.12（改用`fabric.Object＃globalCompositeOperation`）
  // TODO 目前未看出明显差别

  height: 10,
  // 对象高度 原型无效

  radius: 50,
  left: 100,
  top: 100,

  // 对象自身样式 End //////////////////////////////////////////////////////////////////////


  // 外侧控制框 //////////////////////////////////////////////////////////////////////
  backgroundColor: `hsl(240,100%,50%)`,
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

  hasBorders: true,
  // 设置为“ false”时，不呈现对象的控制边界

  hasControls: true,
  // 设置为false时，不显示对象的控件，并且不能用于操作对象 只能移动

  hasRotatingPoint: true,
  // 设置为“ false”时，对象的控制旋转点将不可见或无法选择

  centeredRotation: true,
  // 设置为true时，通过控件旋转时，此对象将使用中心点作为变换的原点。 向后不兼容说明：此属性替代“ centerTransform”（布尔值）。
  // 只针对控件旋转 不针对rotate角度
  // 如果为false 旋转的点为左上角00点

  centeredScaling: true,
  // 如果为true，则在通过控件缩放时，此对象将使用中心点作为变换的原点。 向后不兼容说明：此属性替代“ centerTransform”（布尔值）。
  // 如果为false 缩放的点为左上角00点

  cornerColor: `rgba(255,0,0)`,
  // 控制对象角的颜色（处于活动状态时）

  // cornerDashArray: [1, 3],
  // 指定对象控件的破折号模式的数组（hasBorder必须为true）

  cornerSize: 15,
  // 对象控制角的大小（以像素为单位）

  cornerStrokeColor: `#333`,
  // 控制对象角的颜色（当它是活动的且 transparentCorners 为false）

  cornerStyle: `circle`,
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

  flipX: false,
  // 如果为true，则将对象渲染为水平翻转
  // 在坐标系内 将X轴旋转180度

  flipY: false,
  // 如果为true，则将对象渲染为垂直翻转
  // 在坐标系内 将Y轴旋转180度

  hoverCursor: null,
  // 将鼠标悬停在画布上此对象时使用的默认光标值
  // TODO 目前未察觉用处

  globalCompositeOperation: `source-over`,
  // 全局合成操作 默认为source-over
  // 用于画布globalCompositeOperation的复合规则
  // TODO 目前未察觉用处

  // 导出
  excludeFromExport: false,
  // 如果为true，则不会以OBJECT / JSON格式导出对象



});

canvas.add(circle);