import React from 'react';
import Svg, { Circle, Defs, G, Path, Rect, Stop, SvgProps } from 'react-native-svg';
import { LinearGradient } from '../hack/linear_gradient';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgYacht = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 892.195 746.429" style={props.style} width="100%" height={props.height} {...props}>
    <Defs>
      <LinearGradient id="Yacht_svg__a" x1={231.978} y1={331.464} x2={231.978} y2={18.571} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <Stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
        <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </LinearGradient>
    </Defs>
    <Circle cx={231.978} cy={175.018} r={156.447} fill="url(#Yacht_svg__a)" />
    <Circle cx={231.978} cy={175.018} r={146.792} fill="#ff5252" />
    <Path fill={props.primarycolor} d="M437.195 0h14v136h-14z" />
    <Path fill="#464353" d="M248.195 128h398v204h-398z" />
    <G opacity={0.5} fill={props.primarycolor}>
      <Path d="M274.195 169h84v67h-84zM413.195 169h84v67h-84zM552.195 169h84v67h-84z" />
    </G>
    <Path d="M892.195 277a396.901 396.901 0 01-397 397h-477V277z" fill="#464353" />
    <Path d="M892.195 277a398.475 398.475 0 01-7.87 79H18.195v-79zM802.795 528a399.357 399.357 0 01-86.83 79H18.195v-79z" fill={props.primarycolor} />
    <G opacity={0.5} fill={props.primarycolor}>
      <Path d="M51.195 400h84v67h-84zM190.195 400h84v67h-84zM329.195 400h84v67h-84z" />
    </G>
    <G opacity={0.5} fill={props.primarycolor}>
      <Path d="M465.195 400h84v67h-84zM604.195 400h84v67h-84zM743.195 400h84v67h-84z" />
    </G>
    <Rect y={666.125} width={748.434} height={10.707} rx={5} fill={props.primarycolor} />
    <Rect y={686.469} width={277.317} height={10.707} rx={5} fill={props.primarycolor} />
    <Rect x={213.074} y={711.095} width={277.317} height={10.707} rx={5} fill={props.primarycolor} />
    <Rect x={444.349} y={735.722} width={277.317} height={10.707} rx={5} fill={props.primarycolor} />
    <Rect x={777.344} y={666.125} width={49.253} height={10.707} rx={5} fill={props.primarycolor} />
    <Rect x={495.744} y={686.469} width={49.253} height={10.707} rx={5} fill={props.primarycolor} />
    <Rect x={70.668} y={711.095} width={49.253} height={10.707} rx={5} fill={props.primarycolor} />
    <Rect x={546.068} y={711.095} width={49.253} height={10.707} rx={5} fill={props.primarycolor} />
    <Rect x={39.617} y={735.722} width={277.317} height={10.707} rx={5} fill={props.primarycolor} />
    <Path d="M451.195 0s133 5 153 0c0 0-13 25 0 40s-10 28-10 28h-150z" fill={props.primarycolor} />
  </Svg>
);
SvgYacht.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
