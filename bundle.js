'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Neat$1 = function Neat() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    color: null,
    columns: 12,
    direction: 'ltr',
    gutter: '20px',
    media: null
  },
      color = _ref.color,
      columns = _ref.columns,
      direction = _ref.direction,
      gutter = _ref.gutter,
      media = _ref.media;

  return {
    theme: {
      color: color,
      columns: columns,
      direction: direction,
      gutter: gutter,
      media: media
    }
  };
};

var floatDirection = function floatDirection() {
  var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ltr';

  return direction === 'rtl' ? 'right' : 'left';
};

var floatOppositeDirection = function floatOppositeDirection() {
  var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ltr';

  if (direction === 'ltr') {
    return 'right';
  }
  if (direction === 'rtl') {
    return 'left';
  }
};

var parseUnit = function parseUnit(value) {
  var parsedValue = parseFloat(value);
  if (parsedValue) {
    var splitValue = value.split(parsedValue);
    return splitValue[splitValue.length - 1].trim();
  } else {
    return '';
  }
};

var stripUnit = function stripUnit(value) {
  var unitlessValue = parseFloat(value);
  if (isNaN(unitlessValue)) return value;
  return unitlessValue;
};

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var gridCollapse = function gridCollapse(theme) {
  var _ref;

  var direction = theme.direction,
      gutter = theme.gutter;

  if (!direction || !gutter) return false;
  var gutterUnit = parseUnit(gutter);
  if (gutterUnit === '%') return false;
  var gutterValue = stripUnit(gutter);
  return _ref = {}, defineProperty(_ref, 'margin-' + floatDirection(direction), '-' + gutter), defineProperty(_ref, 'margin-' + floatOppositeDirection(direction), '-' + gutter), defineProperty(_ref, 'width', 'calc(100% + ' + gutterValue * 2 + gutterUnit + ')'), _ref;
};

var columnWidth = function columnWidth() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      theme = _ref.theme,
      span = _ref.span;

  var columns = theme.columns,
      gutter = theme.gutter;

  if (!columns || gutter === undefined) return false;
  var ratio = span / columns;
  var gutterValue = stripUnit(gutter);
  var gutterUnit = parseUnit(gutter);
  if (gutterValue === 0) {
    return ratio * 100 + '%';
  } else {
    var affordance = '' + (gutterValue + gutterValue * ratio) + gutterUnit;
    return ratio * 100 + '% - ' + affordance;
  }
};

var gridColumn = function gridColumn() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    span: 1
  },
      span = _ref.span,
      theme = _ref.theme;

  var columns = theme.columns,
      direction = theme.direction,
      gutter = theme.gutter;

  if (!columns || !direction || gutter === undefined) return false;
  console.log(isNaN(span));
  if (isNaN(span)) return false;
  span = Math.floor(span);
  if (span > columns) span = columns;
  return defineProperty({
    width: 'calc(' + columnWidth({ theme: theme, span: span }) + ')',
    float: '' + floatDirection(direction)
  }, 'margin-' + floatDirection(direction), gutter);
};

var gridContainer = function gridContainer() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '&';

  var psuedoSelector = parent + '::after';
  return defineProperty({}, psuedoSelector, {
    clear: 'both',
    content: '',
    display: 'block'
  });
};

var gridPush = function gridPush() {
  var push = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var theme = arguments[1];
  var direction = theme.direction,
      gutter = theme.gutter;

  if (push > 0) {
    var gutterValue = stripUnit(gutter);
    var gutterUnit = parseUnit(gutter);
    var affordance = '' + gutterValue * 2 + gutterUnit;
    return defineProperty({}, 'margin-' + floatDirection(direction), ('\n        calc(' + columnWidth({ theme: theme, span: push }) + ' + ' + affordance + ')\n      ').replace(/\s+/g, ' ').trim());
  } else {
    return defineProperty({}, 'margin-' + floatDirection(direction), gutter);
  }
};

var gridShift = function gridShift() {
  var shift = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var theme = arguments[1];
  var direction = theme.direction,
      gutter = theme.gutter;

  if (!direction || gutter === undefined) return false;
  if (shift > 0) {
    var width = columnWidth({ theme: theme, span: shift });
    return defineProperty({}, '' + floatDirection(direction), ('\n        calc(' + width + ' + ' + gutter + ')\n      ').replace(/\s+/g, ' ').trim());
  } else {
    return defineProperty({}, '' + floatDirection(direction), gutter);
  }
};

var gridVisual = function gridVisual(theme) {
  var color = theme.color,
      gutter = theme.gutter;

  if (!gutter) return false;
  color = color || '';
  return {
    'background-image': ('\n      repeating-linear-gradient(\n        to right, transparent, transparent,\n        ' + color + ' ' + gutter + ',\n        ' + color + ' calc(' + columnWidth({ theme: theme, span: 1 }) + ' + ' + gutter + ')\n      )\n    ').replace(/\s+/g, ' ').trim()
  };
};

exports['default'] = Neat$1;
exports.gridCollapse = gridCollapse;
exports.gridColumn = gridColumn;
exports.gridContainer = gridContainer;
exports.gridPush = gridPush;
exports.gridShift = gridShift;
exports.gridVisual = gridVisual;
