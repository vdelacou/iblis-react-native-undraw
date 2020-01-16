import React from 'react';
import Svg, { Circle, Defs, Path, Stop, SvgProps } from 'react-native-svg';
import { LinearGradient } from '../hack/linear_gradient';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgUpvote = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 884.93 613.66" style={props.style} width="100%" height={props.height} {...props}>
    <Defs>
      <LinearGradient id="Upvote_svg__a" x1={442.47} y1={613.66} x2={442.47} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <Stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </LinearGradient>
    </Defs>
    <Path fill="url(#Upvote_svg__a)" d="M0 0V613.66h884.93V0H0z" opacity={0.5} />
    <Path fill="#fff" d="M13.13 38.18h862.43v564.57H13.13z" />
    <Path fill="#f5f5f5" d="M13.13 11.33h862.43v41.54H13.13z" />
    <Circle cx={45.95} cy={31.47} r={10.07} fill="#ff5252" />
    <Circle cx={73.64} cy={31.47} r={10.07} fill="#ff0" />
    <Circle cx={101.33} cy={31.47} r={10.07} fill="#69f0ae" />
    <Path fill={props.primarycolor} d="M180.54 158.51h289.13v28.28H180.54z" />
    <Path fill="#e0e0e0" d="M179.49 219.26h645.3v28.28h-645.3zM179.49 280.02h645.3v28.28h-645.3z" />
    <Path fill={props.primarycolor} opacity={0.5} d="M180.54 338.91h289.13v28.28H180.54zM179.49 399.67h645.3v28.28h-645.3z" />
    <Path fill="#e0e0e0" d="M179.49 460.42h645.3v28.28h-645.3z" />
    <Path fill="none" stroke="#3ad29f" strokeMiterlimit={10} strokeWidth={6} d="M131.11 158.33v25.66" />
    <Path fill="#3ad29f" d="M120.94 170.28l10.17-10.17 10.17 10.17v-8.63l-10.17-10.18-10.17 10.18v8.63z" />
    <Path fill="none" stroke="#e0e0e0" strokeMiterlimit={10} strokeWidth={6} d="M131.11 223.37v25.65" />
    <Path fill="#e0e0e0" d="M120.94 235.32l10.17-10.18 10.17 10.18v-8.64l-10.17-10.17-10.17 10.17v8.64z" />
    <Path fill="none" stroke="#e0e0e0" strokeMiterlimit={10} strokeWidth={6} d="M131.11 288.4v25.66" />
    <Path fill="#e0e0e0" d="M120.94 300.35l10.17-10.18 10.17 10.18v-8.64l-10.17-10.17-10.17 10.17v8.64z" />
    <Path fill="none" stroke="#e0e0e0" strokeMiterlimit={10} strokeWidth={6} d="M131.11 342.59v25.66" />
    <Path fill="#e0e0e0" d="M120.94 354.54l10.17-10.17 10.17 10.17v-8.63l-10.17-10.17-10.17 10.17v8.63z" />
    <Path fill="none" stroke="#e0e0e0" strokeMiterlimit={10} strokeWidth={6} d="M131.11 407.62v25.66" />
    <Path fill="#e0e0e0" d="M120.94 419.58l10.17-10.18 10.17 10.18v-8.64l-10.17-10.17-10.17 10.17v8.64z" />
    <Path fill="none" stroke="#e0e0e0" strokeMiterlimit={10} strokeWidth={6} d="M131.11 472.66v25.66" />
    <Path fill="#e0e0e0" d="M120.94 484.61l10.17-10.18 10.17 10.18v-8.64l-10.17-10.17-10.17 10.17v8.64z" />
  </Svg>
);
SvgUpvote.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
