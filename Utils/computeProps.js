import React from "react";
import ReactNativePropRegistry
  from "react-native/Libraries/Renderer/shims/ReactNativePropRegistry";
var _ = require("lodash");

function computeProps(incomingProps, defaultProps) {
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

export default computeProps;
