'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

let Neat = ({
  color,
  columns,
  direction,
  gutter,
  media
} = {
  color: null,
  columns: 12,
  direction: 'ltr',
  gutter: '20px',
  media: null
}) => ({
  theme: {
    color,
    columns,
    direction,
    gutter,
    media
  }
});

let floatDirection = (direction = 'ltr') => {
  return direction === 'rtl' ? 'right' : 'left';
};

let floatOppositeDirection = (direction = 'ltr') => {
  if (direction === 'ltr') {
    return 'right';
  }
  if (direction === 'rtl') {
    return 'left';
  }
};

let parseUnit = value => {
  let parsedValue = parseFloat(value);
  if (parsedValue) {
    let splitValue = value.split(parsedValue);
    return splitValue[splitValue.length - 1].trim();
  } else {
    return '';
  }
};

let stripUnit = value => {
  const unitlessValue = parseFloat(value);
  if (isNaN(unitlessValue)) return value;
  return unitlessValue;
};

let gridCollapse = theme => {
  const { direction, gutter } = theme;
  if (!direction || !gutter) return false;
  let gutterUnit = parseUnit(gutter);
  if (gutterUnit === '%') return false;
  let gutterValue = stripUnit(gutter);
  return {
    [`margin-${floatDirection(direction)}`]: `-${gutter}`,
    [`margin-${floatOppositeDirection(direction)}`]: `-${gutter}`,
    width: `calc(100% + ${gutterValue * 2}${gutterUnit})`
  };
};

let columnWidth = ({
  theme,
  span
} = {}) => {
  const { columns, gutter } = theme;
  if (!columns || gutter === undefined) return false;
  let ratio = span / columns;
  let gutterValue = stripUnit(gutter);
  let gutterUnit = parseUnit(gutter);
  if (gutterValue === 0) {
    return `${ratio * 100}%`;
  } else {
    let affordance = `${gutterValue + gutterValue * ratio}${gutterUnit}`;
    return `${ratio * 100}% - ${affordance}`;
  }
};

let gridColumn = ({
  span,
  theme
} = {
  span: 1
}) => {
  const { columns, direction, gutter } = theme;
  if (!columns || !direction || gutter === undefined) return false;
  if (isNaN(span)) return false;
  span = Math.floor(span);
  if (span > columns) span = columns;
  return {
    width: `calc(${columnWidth({ theme, span })})`,
    float: `${floatDirection(direction)}`,
    [`margin-${floatDirection(direction)}`]: gutter
  };
};

let gridContainer = (parent = '&') => {
  const psuedoSelector = `${parent}::after`;
  return {
    [psuedoSelector]: {
      clear: 'both',
      content: '',
      display: 'block'
    }
  };
};

let gridPush = (push = 0, theme) => {
  const { direction, gutter } = theme;
  if (push > 0) {
    let gutterValue = stripUnit(gutter);
    let gutterUnit = parseUnit(gutter);
    let affordance = `${gutterValue * 2}${gutterUnit}`;
    return {
      [`margin-${floatDirection(direction)}`]: `
        calc(${columnWidth({ theme, span: push })} + ${affordance})
      `.replace(/\s+/g, ' ').trim()
    };
  } else {
    return {
      [`margin-${floatDirection(direction)}`]: gutter
    };
  }
};

let gridShift = (shift = 0, theme) => {
  const { direction, gutter } = theme;
  if (!direction || gutter === undefined) return false;
  if (shift > 0) {
    let width = columnWidth({ theme, span: shift });
    return {
      [`${floatDirection(direction)}`]: `
        calc(${width} + ${gutter})
      `.replace(/\s+/g, ' ').trim()
    };
  } else {
    return {
      [`${floatDirection(direction)}`]: gutter
    };
  }
};

let gridVisual = theme => {
  let { color, gutter } = theme;
  if (!gutter) return false;
  color = color || '';
  return {
    'background-image': `
      repeating-linear-gradient(
        to right, transparent, transparent,
        ${color} ${gutter},
        ${color} calc(${columnWidth({ theme, span: 1 })} + ${gutter})
      )
    `.replace(/\s+/g, ' ').trim()
  };
};

exports.Neat = Neat;
exports.gridCollapse = gridCollapse;
exports.gridColumn = gridColumn;
exports.gridContainer = gridContainer;
exports.gridPush = gridPush;
exports.gridShift = gridShift;
exports.gridVisual = gridVisual;
