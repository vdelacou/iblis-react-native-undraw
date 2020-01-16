import React from 'react';
import Svg, { Defs, Path, Rect, Stop, SvgProps } from 'react-native-svg';
import { LinearGradient } from '../hack/linear_gradient';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgPlainCreditCard = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 910 574.86" style={props.style} width="100%" height={props.height} {...props}>
    <Defs>
      <LinearGradient id="PlainCreditCard_svg__a" x1={455} y1={574.86} x2={455} gradientUnits="userSpaceOnUse">
        <Stop offset={0.01} stopColor="gray" stopOpacity={0.25} />
        <Stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </LinearGradient>
      <LinearGradient id="PlainCreditCard_svg__b" x1={187} y1={491.9} x2={187} y2={398} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
        <Stop offset={0.54} stopColor="#b3b3b3" stopOpacity={0.1} />
        <Stop offset={1} stopColor="#b3b3b3" stopOpacity={0.05} />
      </LinearGradient>
    </Defs>
    <Rect width={910} height={574.86} rx={16.5} ry={16.5} fill="url(#PlainCreditCard_svg__a)" />
    <Rect x={12.41} y={8.56} width={877.18} height={543.02} rx={16.5} ry={16.5} fill="#fff" />
    <Path fill={props.primarycolor} d="M12.41 121.93h877.18v119.34H12.41z" />
    <Path fill="#e0e0e0" d="M134.74 293.49h641.48v53.7H134.74z" />
    <Path fill={props.primarycolor} d="M315.25 403.89h356.54v26.85H315.25zM315.25 445.66h140.23v26.85H315.25zM531.56 445.66h140.23v26.85H531.56z" />
    <Rect x={127} y={398} width={120} height={93.9} rx={18.5} ry={18.5} fill="url(#PlainCreditCard_svg__b)" />
    <Rect x={134.74} y={403.89} width={104.43} height={82.05} rx={18.5} ry={18.5} fill="#64ffda" />
  </Svg>
);
SvgPlainCreditCard.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
