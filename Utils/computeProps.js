var React = require("react");
var _ = require("lodash");

module.exports = function(incomingProps, defaultProps) {
  // External props has a higher precedence
  var computedProps = {};

  incomingProps = _.clone(incomingProps);
  delete incomingProps.children;

  var incomingPropsStyle = incomingProps.style;
  delete incomingProps.style;

  // console.log(defaultProps, incomingProps);
  if (incomingProps) {
    _.assign(computedProps, defaultProps, incomingProps);
  } else {
    computedProps = defaultProps;
  }
  // Pass the merged Style Object instead
  if (incomingPropsStyle) {
    if (computedProps.style) {
      computedProps.style = [computedProps.style, incomingPropsStyle]
    } else {
      computedProps.style = incomingPropsStyle
    }
  }

  return computedProps;
};
