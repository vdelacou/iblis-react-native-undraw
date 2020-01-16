import React from 'react';
import Svg, { Defs, Path, Stop, SvgProps } from 'react-native-svg';
import { LinearGradient } from '../hack/linear_gradient';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgBlogPost = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 627.45 759" style={props.style} width="100%" height={props.height} {...props}>
    <Defs>
      <LinearGradient id="BlogPost_svg__a" x1={313.72} y1={759} x2={313.72} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <Stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </LinearGradient>
      <LinearGradient id="BlogPost_svg__b" x1={313.72} y1={455.23} x2={313.72} y2={213.09} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
        <Stop offset={0.54} stopColor="#b3b3b3" stopOpacity={0.1} />
        <Stop offset={1} stopColor="#b3b3b3" stopOpacity={0.05} />
      </LinearGradient>
    </Defs>
    <Path fill="url(#BlogPost_svg__a)" d="M0 0h627.45v759H0z" />
    <Path fill="#fff" d="M7.58 5.49h612.28v736.45H7.58z" />
    <Path fill="#64ffda" d="M50.71 52.74h240.74v19.72H50.71zM50.71 513.37h240.74v19.72H50.71z" />
    <Path fill="#e0e0e0" d="M50.71 92.18h526.03v19.72H50.71zM50.71 131.63h526.03v19.72H50.71z" />
    <Path fill="url(#BlogPost_svg__b)" d="M46.44 213.09H581v242.14H46.44z" />
    <Path fill={props.primarycolor} d="M51.18 216.78h526.03v231.2H51.18z" />
    <Path fill="#e0e0e0" d="M50.71 637.59h526.03v19.72H50.71zM50.71 678.34h526.03v19.72H50.71zM50.71 597.05h526.03v19.72H50.71zM50.71 556.51h526.03v19.72H50.71z" />
  </Svg>
);
SvgBlogPost.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
