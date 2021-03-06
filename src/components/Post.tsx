import React from 'react';
import Svg, { Defs, Rect, Stop, SvgProps } from 'react-native-svg';
import { LinearGradient } from '../hack/linear_gradient';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgPost = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 822 773.08" style={props.style} width="100%" height={props.height} {...props}>
    <Defs>
      <LinearGradient id="Post_svg__a" x1={255.71} y1={773.08} x2={255.71} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <Stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </LinearGradient>
      <LinearGradient id="Post_svg__b" x1={570.12} y1={703.31} x2={570.12} y2={248.91} xlinkHref="#Post_svg__a" />
    </Defs>
    <Rect width={511.42} height={773.08} rx={4.5} ry={4.5} fill="url(#Post_svg__a)" opacity={0.5} />
    <Rect x={6.56} y={5.68} width={498.31} height={757.43} rx={4.5} ry={4.5} fill="#fff" />
    <Rect x={56.39} y={145.21} width={99.66} height={89.7} rx={4.5} ry={4.5} fill={props.primarycolor} />
    <Rect x={185.95} y={145.21} width={269.09} height={9.97} rx={4.48} ry={4.48} fill="#e0e0e0" />
    <Rect x={185.95} y={175.1} width={223.69} height={9.97} rx={4.48} ry={4.48} fill="#e0e0e0" />
    <Rect x={56.39} y={284.73} width={99.66} height={89.7} rx={4.5} ry={4.5} fill={props.primarycolor} />
    <Rect x={185.95} y={284.73} width={269.09} height={9.97} rx={4.48} ry={4.48} fill="#e0e0e0" />
    <Rect x={185.95} y={314.63} width={269.09} height={9.97} rx={4.48} ry={4.48} fill="#e0e0e0" />
    <Rect x={56.39} y={424.26} width={99.66} height={89.7} rx={4.5} ry={4.5} fill={props.primarycolor} />
    <Rect x={185.95} y={424.26} width={269.09} height={9.97} rx={4.48} ry={4.48} fill="#e0e0e0" />
    <Rect x={185.95} y={454.16} width={29.9} height={9.97} rx={4.48} ry={4.48} fill="#e0e0e0" />
    <Rect x={318.25} y={248.91} width={503.75} height={454.41} rx={4.5} ry={4.5} fill="url(#Post_svg__b)" opacity={0.5} />
    <Rect x={326.03} y={253.47} width={489.04} height={440.14} rx={4.5} ry={4.5} fill="#fff" />
    <Rect x={374.05} y={348.03} width={105.07} height={94.57} rx={4.5} ry={4.5} fill={props.primarycolor} />
    <Rect x={510.64} y={348.03} width={283.7} height={10.51} rx={4.5} ry={4.5} fill="#e0e0e0" />
    <Rect x={510.64} y={379.55} width={283.7} height={10.51} rx={4.5} ry={4.5} fill="#e0e0e0" />
    <Rect x={363.54} y={493.97} width={430.8} height={10.51} rx={4.5} ry={4.5} fill="#e0e0e0" />
    <Rect x={363.54} y={525.49} width={430.8} height={10.51} rx={4.5} ry={4.5} fill="#e0e0e0" />
    <Rect x={363.54} y={567.52} width={430.8} height={10.51} rx={4.5} ry={4.5} fill="#e0e0e0" />
    <Rect x={363.54} y={599.04} width={325.73} height={10.51} rx={4.5} ry={4.5} fill="#e0e0e0" />
  </Svg>
);
SvgPost.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
