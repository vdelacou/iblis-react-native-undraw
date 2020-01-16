import React from 'react';
import Svg, { Circle, Defs, Ellipse, Path, Stop, SvgProps } from 'react-native-svg';
import { LinearGradient } from '../hack/linear_gradient';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgProfilePic = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 698 698" style={props.style} width="100%" height={props.height} {...props}>
    <Defs>
      <LinearGradient id="ProfilePic_svg__a" x1={349} y1={698} x2={349} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <Stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </LinearGradient>
    </Defs>
    <Circle cx={349} cy={349} r={349} fill="url(#ProfilePic_svg__a)" opacity={0.5} />
    <Circle cx={349.68} cy={346.77} r={341.64} fill="#f5f5f5" />
    <Path d="M350 689.76a340 340 0 00187.79-56.2c-12.59-68.8-60.5-72.72-60.5-72.72h-264.2s-45.21 3.71-59.33 67A340.07 340.07 0 00350 689.76z" fill={props.primarycolor} />
    <Circle cx={346.37} cy={339.57} r={164.9} fill="#333" />
    <Path d="M293.15 476.92h105.66v84.53A52.83 52.83 0 01346 614.28a52.83 52.83 0 01-52.83-52.83v-84.53z" opacity={0.1} />
    <Path d="M296.5 473h99a3.35 3.35 0 013.35 3.35v81.18A52.83 52.83 0 01346 610.37a52.83 52.83 0 01-52.83-52.83v-81.19a3.35 3.35 0 013.33-3.35z" fill="#fdb797" />
    <Path d="M293.34 516.82a152.07 152.07 0 00105.66.29v-13H293.34z" opacity={0.1} />
    <Circle cx={346.37} cy={372.44} r={151.45} fill="#fdb797" />
    <Path d="M238.49 234.68S302.32 364.24 482.37 289l-41.92-65.73-74.31-26.67z" opacity={0.1} />
    <Path d="M238.49 232.78s63.83 129.56 243.88 54.3l-41.92-65.73-74.31-26.67z" fill="#333" />
    <Path
      d="M237.93 224a87.49 87.49 0 0121.69-35.27c29.79-29.45 78.63-35.66 103.68-69.24 6 9.32 1.36 23.65-9 27.65 24-.16 51.81-2.26 65.38-22a44.89 44.89 0 01-7.57 47.4c21.27 1 44 15.4 45.34 36.65.92 14.16-8 27.56-19.59 35.68s-25.71 11.85-39.56 14.9c-40.44 8.93-186.76 46.3-160.37-35.77z"
      fill="#333"
    />
    <Ellipse cx={194.86} cy={372.3} rx={14.09} ry={26.42} fill="#fdb797" />
    <Ellipse cx={497.8} cy={372.3} rx={14.09} ry={26.42} fill="#fdb797" />
  </Svg>
);
SvgProfilePic.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
