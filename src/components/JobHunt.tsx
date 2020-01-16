import React from 'react';
import Svg, { Circle, Defs, Path, Stop, SvgProps } from 'react-native-svg';
import { LinearGradient } from '../hack/linear_gradient';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgJobHunt = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 480.07 572.254" style={props.style} width="100%" height={props.height} {...props}>
    <Defs>
      <LinearGradient id="JobHunt_svg__a" x1={404.641} y1={550.423} x2={404.641} y2={454.423} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <Stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
        <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </LinearGradient>
    </Defs>
    <Path fill={props.accentcolor} d="M0 0h480.07v572.254H0z" />
    <Path fill="#e0e0e0" d="M71.831 155.07h337.606v14.366H71.831zM71.831 249.648h337.606v14.366H71.831zM71.831 274.789h337.606v14.366H71.831z" />
    <Path fill="#3ad29f" opacity={0.6} d="M302.887 224.507h106.549v14.366H302.887z" />
    <Path fill={props.primarycolor} d="M190.352 333.451h106.549v14.366H190.352z" />
    <Circle cx={404.641} cy={502.423} r={48} fill="url(#JobHunt_svg__a)" opacity={0.5} />
    <Circle cx={404.641} cy={502.423} r={45.176} fill="#69f0ae" />
    <Path fill="#fff" d="M385.7 495.599l16.941 15.529 24-35.294 8.47 7.059-32.47 42.353-24-26.823 7.059-2.824z" />
  </Svg>
);
SvgJobHunt.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
