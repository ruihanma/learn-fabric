window.onload = function () {
  var canvas = new fabric.Canvas('c');
  var circle = new fabric.Circle({

    // 对象自身样式 //////////////////////////////////////////////////////////////////////
    angle: 0,
    // 物体的旋转角度（度）旋转点是左上角

    startAngle: 0,
    // 圆的起始角度，顺时针方向偏移，应为度，
    // 这是一个疏忽。 在下一个主要版本中可能会更改为度

    endAngle: (270 * Math.PI) / 180,
    // 圆弧形的端角，应为度，这是一个疏忽。 在下一个主要版本中可能会更改为度
    // 注意 这里如果fill了颜色 那么形状会变成一个残月 而不是从中心点缺失的3/4个圆饼状

    fill: 'rgba(0,0,0,1)',
    // 对象填充的颜色采用CSS颜色

    fillRule: `nonzero`,
    // 填充规则 接受两种模式 nonzero, evenodd
    // 向后不兼容说明：此属性用于设置globalCompositeOperation直到v1.4.12（改用`fabric.Object＃globalCompositeOperation`）
    // TODO 目前未看出明显差别

    height: 0,
    // 对象高度 圆形无效

    width: 0,
    // 对象宽度 圆形无效

    radius: 100,
    // 圆形的半径

    left: 100,
    // 对象的左侧位置。 请注意，默认情况下，它是相对于左侧的对象。
    // 您可以通过设置originX = {left / center / right}来更改此设置

    opacity: 1,
    // 物体的不透明度

    originX: `left`,
    // 对象转换的水平原点（“左”，“右”，“中心”之一）
    // 针对left参数计算的点 默认是从左边处开始

    originY: `top`,
    // 对象转换的水平原点（“左”，“右”，“中心”之一）
    // 针对top参数计算的点 默认是从顶边开始

    scaleX: 2,
    // 对象缩放水平比例

    scaleY: 2,
    // 对象缩放垂直比例

    skewX: 0,
    // X轴对角的度数

    skewY: 0,
    // Y轴对角的度数

    stroke: `#f00`,
    // 定义后，将通过笔触渲染对象
    // 描个边 默认为1宽度

    // strokeDashArray: [10],
    // 指定对象笔划的虚线图案的数组（必须定义笔划）

    // strokeDashOffset: [10],
    // TODO 目前未知效果

    strokeLineCap: `butt`,
    // 对象笔画的线尾样式（“butt”，“round”，“square”之一）

    strokeLineJoin: `miter`,
    // 对象笔触的角样式（“ bevil”，“ round”，“ miter”之一）
    // TODO 目前未知效果

    strokeMiterLimit: 4,
    // 对象笔划的最大斜接长度（用于strokeLineJoin =“ miter”）
    // TODO 目前未知效果

    strokeUniform: false,
    // 如果为“ false”，则笔画宽度将与对象成比例。
    // 设为true时，笔划将始终与为笔划宽度输入的确切像素大小匹配。
    // 默认为false

    strokeWidth: 10,
    // 用于渲染此对象的笔触宽度

    top: 100,
    // 对象相对于画布顶部的距离。 请注意，默认情况下，它是相对于自身的顶部。 您可以通过设置originY = {top / center / bottom}来更改此设置

    type: `circle`,
    // 自己属于什么类型

    visible: true,
    // 设置为false时，对象不会在画布上渲染

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

    // cornerDashArray: [1, 3],
    // 指定对象控件的破折号模式的数组（hasBorder必须为true）

    cornerSize: 15,
    // 对象控制角的大小（以像素为单位）

    cornerStrokeColor: `#333`,
    // 控制对象角的颜色（当它是活动的且 transparentCorners 为false）

    cornerStyle: `circle`,
    // 控制对象角的形式 'rect' or 'circle'

    cornerColor: `rgba(255,0,0)`,
    // 控制对象角的颜色（处于活动状态时）

    transparentCorners: false,
    // 设置为true时，对象的控制角在内部呈现为透明（即笔触而不是填充）
    // 控制对象角是否是透明

    lockMovementX: false,
    // 为“ true”时，对象水平移动被锁定

    lockMovementY: false,
    // 为“ true”时，对象垂直移动被锁定

    lockRotation: false,
    // 为“ true”时，对象旋转被锁定

    lockScalingFlip: false,
    // 如果为true，则无法通过缩放为负值来翻转对象

    lockScalingX: false,
    // 当为true时，对象水平缩放被锁定 四角点失效

    lockScalingY: false,
    // 当为true时，对象垂直缩放被锁定 四角点失效

    lockSkewingX: false,
    // 为“ true”时，对象水平倾斜被锁定 边中间点失效
    // 按住shift可以倾斜操作

    lockSkewingY: false,
    // 为“ true”时，对象垂直倾斜被锁定 边中间点失效
    // 按住shift可以倾斜操作

    lockUniScaling: false,
    // 当为true时，对象非均匀缩放被锁定 边中间点消失

    minScaleLimit: 0,
    // 对象的最小允许比例值

    padding: 10,
    // 对象及其控制边界之间的填充（以像素为单位）

    rotatingPointOffset: 40,
    // 对象控制旋转点的偏移量（通过“ hasRotatingPoint”启用时）
    // 旋转那个线的长度

    selectable: true,
    // 当设置为“ false”时，不能选择一个对象进行修改（使用基于点击的选择或基于组的选择）。 但是仍然有很多事情发生。
    // TODO 目前未看出 "但是仍然有很多事情发生" 指的是什么

    selectionBackgroundColor: null,
    // 选择对象的背景颜色。 处于活动状态时在对象后面的着色层。 不能与globalCompositeOperation方法混合使用。

    shadow: new fabric.Shadow({color: `rgba(0,0,0,0.8)`, blur: 10}),
    // 阴影对象


    // 外侧控制框 End //////////////////////////////////////////////////////////////////////


    // 缓存 //////////////////////////////////////////////////////////////////////

    // cacheProperties
    // 检查高速缓存是否需要刷新时要考虑的属性列表 可以通过 statefullCache ON（或如果需要的话是惰性模式）
    // 或通过单次调用Object.set（key，value）来检查那些属性。
    // 如果键在此列表中，则将该对象标记为脏并在下一次渲染时刷新 含有的属性如下
    // 'fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform' +
    // 'strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath'

    noScaleCache: true,
    // 如果为true，则在缩放期间不会更新缓存。
    // 如果缩放比例过大，图片将变得块状，并且在缩放结束时将以正确的细节重新绘制。
    // 此设置取决于性能和应用程序。 自1.7.0起默认为true
    // TODO 目前未看出效果

    objectCaching: true,
    // 当为true时，对象被缓存在另一个画布上。 当为false时，除非必要（clipPath）默认为true，否则不缓存对象

    ownMatrixCache: null,
    // 对象变换矩阵的存储
    // TODO 目前未看出效果

    statefullCache: false,
    // 当为true时，检查对象属性的高速缓存无效。
    // 为false 是为了保证显示 可能消耗硬件性能
    // 在某些特定情况下，您可能希望禁用此功能（喷刷，非常大的画笔，画笔组），或者如果您的应用程序不允许您修改画笔组的属性，而您想对画笔禁用。 自1.7.0起默认为false
    // PS. statefullCache为true时 同时 strokeUniform为true(描边不随图像缩放而缩放) 快速拖拽缩放 图像会出现模糊
    // TODO 目前不知道啥意思

    // 缓存 End //////////////////////////////////////////////////////////////////////


    // 剪裁操作 //////////////////////////////////////////////////////////////////////
    absolutePositioned: false,
    // 仅在将对象用作clipPath时才有意义。
    // 如果为true，clipPath将具有相对于画布的顶部和左侧，并且不受对象转换的影响。
    // 这将使clipPath相对于画布，但仅剪切特定对象。 警告这是测试版，此功能可能会更改或重命名。 从2.4.0开始

    clipPath: new fabric.Rect({width: 20, height: 20, fill: '#f55', opacity: 0.7, inverted: true}),
    // 无需描边即可定义其形状的裁剪区域的fabricObject。 呈现为黑色时，将在呈现对象时使用clipPath对象，并将上下文放置在对象cacheCanvas的中心。 如果希望clipPath的0,0与对象中心对齐，请使用clipPath.originX / Y来“居中”
    // 参数为各种形状的对象
    // 会将原来的图形按照传入的形状进行剪裁

    inverted: false,
    // 仅在将对象用作clipPath时才有意义。
    // 如果为true，则clipPath将使对象从2.4.0版本开始剪辑到clipPath的外部
    // 见clipPath的参数 反向剪裁 能够看见下方元素及背景

    // clipTo: ctx => ctx.arc(0, 0, 10, 0, Math.PI * 2, true),
    // 确定对象裁剪的函数（上下文作为第一个参数传递）。
    // 如果您使用代码最小化，则可以缩小/忽略ctx参数，您应该在函数中使用var ctx = arguments [0];作为解决方法。
    // 请注意，上下文原点位于对象的中心点（不是左/上角）
    // 会将原来的图形按照传入的形状进行剪裁
    // 2.0.0作废
    // 同上clipPath

    // 剪裁操作 End //////////////////////////////////////////////////////////////////////


    // 内部含有参数 //////////////////////////////////////////////////////////////////////
    aCoords: null,
    // 在画布对象中描述对象的角位置绝对坐标属性为tl，tr，bl，br，并描述四个主角。
    // 每个属性都是一个带有x，y，Fabric.Point实例的对象。
    // 坐标取决于以下属性：宽度，高度，scaleX，scaleY skewX，skewY，角度，strokeWidth，顶部，左侧。
    // 这些坐标对于了解对象在哪里很有用。
    // 它们会使用oCoords更新，但是在缩放或平移更改时无需更新。
    // 坐标使用@method setCoords更新。
    // 您可以计算它们而无需使用@method calcCoords（true）更新。
    // TODO 目前未知用处

    oCoords: null,
    // 在画布元素坐标中描述对象的角位置。 主控件的属性为tl，mt，tr，ml，mr，bl，mb，br，mtr。
    // 每个属性都是一个带有x，y和角的对象。 “ corner”属性以相似的方式包含角的交互区域的4个点。
    // 坐标取决于以下属性：宽度，高度，scaleX，scaleY skewX，skewY，角度，strokeWidth，viewportTransform，顶部，左侧，填充。
    // 坐标使用@method setCoords更新。
    // 您可以计算它们而无需使用@method calcCoords更新。
    // TODO 目前未知用处

    matrixCache: null,
    // 对象全变换矩阵的存储
    // TODO 目前未知用处

    moveCursor: null,
    // 在画布上移动此对象时使用的默认光标值
    // TODO 目前未知用处

    stateProperties: (
      'top left width height scaleX scaleY flipX flipY originX originY transformMatrix ' +
      'stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit ' +
      'angle opacity fill globalCompositeOperation shadow clipTo visible backgroundColor ' +
      'skewX skewY fillRule paintFirst clipPath strokeUniform'
    ).split(' '),
    // 检查对象的状态是否已更改（fabric.Object＃hasStateChanged）以及历史记录（撤消/重做）时要考虑的属性列表

    // 内部含有参数 End //////////////////////////////////////////////////////////////////////


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
    // TODO 目前未知用处

    globalCompositeOperation: `source-over`,
    // 全局合成操作 默认为source-over
    // 用于画布globalCompositeOperation的复合规则
    // TODO 目前未知用处

    includeDefaultValues: true,
    // 如果为false，则默认对象的值不包含在其序列化中
    // TODO 目前未知用处

    paintFirst: `fill`,
    // 确定是先绘制填充还是笔划（“fill”或“stroke”之一）
    // TODO 目前未知用处

    perPixelTargetFind: false,
    // 设置为“ true”时，将在画布上以像素为单位“找到”对象，而不是根据边界框
    // TODO 目前未知用处

    // 导出
    excludeFromExport: false,
    // 如果为true，则不会以OBJECT / JSON格式导出对象

  });

  canvas.add(circle);

  let btn = document.getElementById(`btn`);
  btn.onclick = e => {
    var aObject = canvas.getActiveObject();
    if (!aObject) return;
    if (aObject.type === 'activeSelection') {
      aObject.getObjects().forEach(function (obj) {
        obj.set('strokeUniform', !obj.strokeUniform);
      });
    } else {
      // aObject.set('strokeUniform', !aObject.strokeUniform);
      aObject.set('fill', `red`);
    }
    canvas.requestRenderAll();
  };

}