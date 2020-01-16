import React from 'react';
import Svg, { Circle, Defs, Path, Stop, SvgProps } from 'react-native-svg';
import { LinearGradient } from '../hack/linear_gradient';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgCreate = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 930 796" style={props.style} width="100%" height={props.height} {...props}>
    <Defs>
      <LinearGradient id="Create_svg__a" x1={476.5} y1={796} x2={476.5} y2={356} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <Stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </LinearGradient>
      <LinearGradient id="Create_svg__b" x1={233} y1={468} x2={233} y2={390} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
        <Stop offset={0.54} stopColor="#b3b3b3" stopOpacity={0.1} />
        <Stop offset={1} stopColor="#b3b3b3" stopOpacity={0.05} />
      </LinearGradient>
    </Defs>
    <Path d="M692 362s28-104-28-211" fill="none" stroke="#e0e0e0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={10} strokeDasharray="0 23" />
    <Path fill="none" stroke="#e0e0e0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={10} d="M300.59 350.5h0" />
    <Path
      d="M308.1 328.14c9.88-40.36 12.83-124.5-117.66-160.22"
      fill="none"
      stroke="#e0e0e0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={10}
      strokeDasharray="0 23.61"
    />
    <Path fill="none" stroke="#e0e0e0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={10} d="M179 165h0" />
    <Path fill="url(#Create_svg__a)" d="M71 356h811v440H71z" />
    <Path fill="#fff" d="M78 362h798v422.5H78z" />
    <Circle cx={233} cy={429} r={39} fill="url(#Create_svg__b)" />
    <Circle cx={233} cy={429} r={35} fill={props.primarycolor} />
    <Path fill="#bdbdbd" d="M313 416h197v20H313z" />
    <Path
      fill="#e0e0e0"
      d="M232.5 545.5h492v20h-492zM232.5 501.5h492v20h-492zM232.5 589.5h492v20h-492zM232.5 633.5h492v20h-492zM232.5 677.5h492v20h-492zM232.5 721.5h492v20h-492z"
    />
    <Path fill="none" stroke="#bdbdbd" strokeLinecap="round" strokeLinejoin="round" strokeWidth={10} d="M153.33 355.5h0" />
    <Path
      d="M155.59 332.75c.76-21.62-1.88-53.94-20.78-75.41"
      fill="none"
      stroke="#bdbdbd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={10}
      strokeDasharray="0 22.87"
    />
    <Path fill="none" stroke="#bdbdbd" strokeLinecap="round" strokeLinejoin="round" strokeWidth={10} d="M126.5 249.5h0" />
    <Path fill="none" stroke="#e0e0e0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={10} d="M605.33 364.5h0" />
    <Path
      d="M607.59 341.75c.76-21.62-1.88-53.94-20.78-75.41"
      fill="none"
      stroke="#e0e0e0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={10}
      strokeDasharray="0 22.87"
    />
    <Path fill="none" stroke="#e0e0e0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={10} d="M578.5 258.5h0" />
    <Path fill="none" stroke="#bdbdbd" strokeLinecap="round" strokeLinejoin="round" strokeWidth={10} d="M797.67 355.5h0" />
    <Path
      d="M795.41 332.75c-.76-21.62 1.88-53.94 20.78-75.41"
      fill="none"
      stroke="#bdbdbd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={10}
      strokeDasharray="0 22.87"
    />
    <Path fill="none" stroke="#bdbdbd" strokeLinecap="round" strokeLinejoin="round" strokeWidth={10} d="M824.5 249.5h0" />
    <Path fill={props.primarycolor} opacity={0.7} d="M0 114.78h111v60.43H0zM608 73.78h111v60.43H608zM513 181.78h111v60.43H513z" />
    <Path fill={props.primarycolor} d="M83 127.58h180.78v98.41H83zM749.22 132.58H930v98.41H749.22zM339.71 0h180.78v98.41H339.71z" />
    <Path fill="none" stroke="#bdbdbd" strokeLinecap="round" strokeLinejoin="round" strokeWidth={10} d="M414 354.5h0" />
    <Path
      d="M422.82 332.21c6.13-21.36 10.12-55.49-9.32-90.72-24-43.51-2.42-85.9 9.85-104.36"
      fill="none"
      stroke="#bdbdbd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={10}
      strokeDasharray="0 24.01"
    />
    <Path fill="none" stroke="#bdbdbd" strokeLinecap="round" strokeLinejoin="round" strokeWidth={10} d="M430.5 127.5h0" />
  </Svg>
);
SvgCreate.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
