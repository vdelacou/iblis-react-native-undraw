import React from 'react';
import Svg, { Circle, Defs, Path, Stop, SvgProps } from 'react-native-svg';
import { LinearGradient } from '../hack/linear_gradient';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgContrast = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 912.5 703.5" style={props.style} width="100%" height={props.height} {...props}>
    <Defs>
      <LinearGradient id="Contrast_svg__a" x1={424.5} y1={675} x2={424.5} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <Stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </LinearGradient>
      <LinearGradient id="Contrast_svg__c" x1={191.5} y1={281} x2={191.5} y2={256} xlinkHref="#Contrast_svg__a" />
      <LinearGradient id="Contrast_svg__b" x1={627.5} y1={281} x2={627.5} y2={256} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopOpacity={0.12} />
        <Stop offset={0.55} stopOpacity={0.09} />
        <Stop offset={1} stopOpacity={0.02} />
      </LinearGradient>
      <LinearGradient id="Contrast_svg__d" x1={198} y1={328} x2={198} y2={312} xlinkHref="#Contrast_svg__a" />
      <LinearGradient id="Contrast_svg__e" x1={634} y1={328} x2={634} y2={312} xlinkHref="#Contrast_svg__b" />
      <LinearGradient id="Contrast_svg__f" x1={634} y1={353} x2={634} y2={337} xlinkHref="#Contrast_svg__b" />
      <LinearGradient id="Contrast_svg__g" x1={634} y1={378} x2={634} y2={362} xlinkHref="#Contrast_svg__b" />
      <LinearGradient id="Contrast_svg__h" x1={634} y1={403} x2={634} y2={387} xlinkHref="#Contrast_svg__b" />
      <LinearGradient id="Contrast_svg__i" x1={634} y1={428} x2={634} y2={412} xlinkHref="#Contrast_svg__b" />
      <LinearGradient id="Contrast_svg__j" x1={198} y1={353} x2={198} y2={337} xlinkHref="#Contrast_svg__a" />
      <LinearGradient id="Contrast_svg__k" x1={198} y1={378} x2={198} y2={362} xlinkHref="#Contrast_svg__a" />
      <LinearGradient id="Contrast_svg__l" x1={198} y1={403} x2={198} y2={387} xlinkHref="#Contrast_svg__a" />
      <LinearGradient id="Contrast_svg__m" x1={198} y1={428} x2={198} y2={412} xlinkHref="#Contrast_svg__a" />
    </Defs>
    <Path fill={props.primarycolor} opacity={0.2} d="M66.5 79.5h846v624h-846z" />
    <Path fill="url(#Contrast_svg__a)" d="M0 0v675h849V0H0z" />
    <Path fill="#fff" d="M12 42h828v621H12z" />
    <Path fill="#f5f5f5" d="M12 9h828v33H12z" />
    <Circle cx={36} cy={25} r={8} fill="#ff5252" />
    <Circle cx={58} cy={25} r={8} fill="#ff0" />
    <Circle cx={80} cy={25} r={8} fill="#69f0ae" />
    <Path fill={props.primarycolor} d="M426 42h414v621H426z" />
    <Path fill="url(#Contrast_svg__c)" d="M78 256h227v25H78z" />
    <Path fill="url(#Contrast_svg__b)" d="M514 256h227v25H514z" />
    <Path fill={props.primarycolor} d="M82 259h220v18H82z" />
    <Path fill="url(#Contrast_svg__d)" d="M47 312h302v16H47z" />
    <Path fill="url(#Contrast_svg__e)" d="M483 312h302v16H483z" />
    <Path fill="url(#Contrast_svg__f)" d="M483 337h302v16H483z" />
    <Path fill="url(#Contrast_svg__g)" d="M483 362h302v16H483z" />
    <Path fill="url(#Contrast_svg__h)" d="M483 387h302v16H483z" />
    <Path fill="url(#Contrast_svg__i)" d="M483 412h302v16H483z" />
    <Path fill="url(#Contrast_svg__j)" d="M47 337h302v16H47z" />
    <Path fill="url(#Contrast_svg__k)" d="M47 362h302v16H47z" />
    <Path fill="url(#Contrast_svg__l)" d="M47 387h302v16H47z" />
    <Path fill="url(#Contrast_svg__m)" d="M47 412h302v16H47z" />
    <Path fill={props.primarycolor} d="M50 314h297v11H50zM50 339h297v11H50zM50 364h297v11H50zM50 389h297v11H50zM50 414h297v11H50z" />
    <Path fill="#fff" d="M517 259h220v18H517zM485 314h297v11H485zM485 339h297v11H485zM485 364h297v11H485zM485 389h297v11H485zM485 414h297v11H485z" />
  </Svg>
);
SvgContrast.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
