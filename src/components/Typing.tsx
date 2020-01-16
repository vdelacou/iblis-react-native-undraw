import React from 'react';
import Svg, { Circle, Defs, Path, Stop, SvgProps } from 'react-native-svg';
import { LinearGradient } from '../hack/linear_gradient';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgTyping = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 885 657" style={props.style} width="100%" height={props.height} {...props}>
    <Defs>
      <LinearGradient id="Typing_svg__a" x1={2330.5} y1={628} x2={2330.5} y2={120} gradientTransform="matrix(-1 0 0 1 2630 -120)" gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <Stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </LinearGradient>
      <LinearGradient id="Typing_svg__b" x1={589} y1={657} x2={589} y2={150} xlinkHref="#Typing_svg__a" />
      <LinearGradient id="Typing_svg__c" x1={483.99} y1={408.82} x2={483.99} y2={324.2} xlinkHref="#Typing_svg__a" />
      <LinearGradient id="Typing_svg__d" x1={589.48} y1={408.82} x2={589.48} y2={324.2} xlinkHref="#Typing_svg__a" />
      <LinearGradient id="Typing_svg__e" x1={694.96} y1={408.82} x2={694.96} y2={324.2} xlinkHref="#Typing_svg__a" />
    </Defs>
    <Path fill="url(#Typing_svg__a)" d="M0 0h599v434.06H218.15L177 508l-43.23-73.94H0V0z" />
    <Path fill="#f5f5f5" d="M7.57 8.33h581.91v419.62H211.79l-34.98 75.35-39.29-75.35H7.57V8.33z" />
    <Path
      fill={props.primarycolor}
      opacity={0.3}
      d="M514.71 152.65H81.18V134.1h433.53zM514.71 193.22H81.18v-18.55h433.53zM514.71 233.79H81.18v-18.55h433.53zM514.71 274.36H81.18v-18.55h433.53z"
    />
    <Path fill="url(#Typing_svg__b)" d="M885 150H293v433.21l382-.21 36 74 41.79-73.79H885V150z" />
    <Path fill="#fff" d="M880.43 156.7H298.52v419.62h377.69l34.98 75.35 39.29-75.35h129.95V156.7z" />
    <Circle cx={483.99} cy={366.51} r={42.31} fill="url(#Typing_svg__c)" />
    <Circle cx={589.48} cy={366.51} r={42.31} fill="url(#Typing_svg__d)" />
    <Circle cx={694.96} cy={366.51} r={42.31} fill="url(#Typing_svg__e)" />
    <Circle cx={483.99} cy={366.51} r={38.25} fill={props.primarycolor} />
    <Circle cx={589.48} cy={366.51} r={38.25} fill={props.primarycolor} opacity={0.6} />
    <Circle cx={694.96} cy={366.51} r={38.25} fill={props.primarycolor} opacity={0.3} />
  </Svg>
);
SvgTyping.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
