import React from 'react';
import Svg, { Circle, Defs, Ellipse, Path, Stop, SvgProps } from 'react-native-svg';
import { LinearGradient } from '../hack/linear_gradient';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgMapLight = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 887.591 794.699" style={props.style} width="100%" height={props.height} {...props}>
    <Defs>
      <LinearGradient id="MapLight_svg__a" x1={148.905} y1={794.699} x2={148.905} y2={65.634} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <Stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
        <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </LinearGradient>
      <LinearGradient id="MapLight_svg__c" x1={446.716} y1={794.699} x2={446.716} y2={65.634} xlinkHref="#MapLight_svg__a" />
      <LinearGradient id="MapLight_svg__d" x1={741.606} y1={794.699} x2={741.606} y2={65.634} xlinkHref="#MapLight_svg__a" />
      <LinearGradient id="MapLight_svg__b" x1={889.9} y1={291.937} x2={889.9} y2={71.206} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
        <Stop offset={0.535} stopColor="#b3b3b3" stopOpacity={0.1} />
        <Stop offset={1} stopColor="#b3b3b3" stopOpacity={0.05} />
      </LinearGradient>
      <LinearGradient id="MapLight_svg__e" x1={733.695} y1={105.86} x2={733.695} y2={63.032} gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopOpacity={0.12} />
        <Stop offset={0.551} stopOpacity={0.09} />
        <Stop offset={1} stopOpacity={0.02} />
      </LinearGradient>
      <LinearGradient id="MapLight_svg__f" x1={311.146} y1={736.281} x2={311.146} y2={513.99} xlinkHref="#MapLight_svg__b" />
      <LinearGradient id="MapLight_svg__g" x1={154.941} y1={549.261} x2={154.941} y2={506.13} gradientUnits="userSpaceOnUse">
        <Stop offset={0.005} stopOpacity={0.12} />
        <Stop offset={0.551} stopOpacity={0.09} />
        <Stop offset={1} stopOpacity={0.05} />
      </LinearGradient>
    </Defs>
    <Path fill="url(#MapLight_svg__a)" d="M297.81 766.722L0 794.699V93.611l297.81-27.977v701.088z" />
    <Path fill="url(#MapLight_svg__c)" d="M297.81 766.722l297.811 27.977V93.611L297.81 65.634v701.088z" />
    <Path fill="url(#MapLight_svg__d)" d="M887.591 766.722l-291.97 27.977V93.611l291.97-27.977v701.088z" />
    <Path fill="#f5f5f5" d="M298.865 747.261L9.488 774.143V100.511l289.377-26.882v673.632z" />
    <Path fill="#fff" d="M298.865 747.261l289.377 26.882V100.511L298.865 73.629v673.632z" />
    <Path fill="#f5f5f5" d="M877.618 747.261l-289.376 26.882V100.511l289.376-26.882v673.632z" />
    <Path
      fill={props.primarycolor}
      opacity={0.3}
      d="M298.865 135.494l-219.8 7.712v101.203h186.592v-36.592l33.208-1.165 50.601 15.619v-71.158l-50.601-15.619zM298.865 701.403l-246.682 23.72v-90.134l246.682-23.72v90.134zM271.865 422.403l-246.682 23.72v-90.134l246.682-23.72v90.134zM444.344 631.826h107.528v82.227H444.344zM409.344 438.826h107.528v82.227H409.344zM453.344 181.826h107.528v82.227H453.344zM836.505 676.102l-167.617 14.232V581.225l167.617-14.232v109.109zM816.505 292.102l-167.617 14.232V197.225l167.617-14.232v109.109z"
    />
    <Path
      d="M958.282 142.038c0 39.12-68.382 149.9-68.382 149.9s-68.382-110.78-68.382-149.9 30.616-70.832 68.382-70.832 68.382 31.713 68.382 70.832z"
      transform="translate(-156.205 -52.65)"
      fill="url(#MapLight_svg__b)"
    />
    <Ellipse cx={733.695} cy={84.446} rx={20.674} ry={21.414} fill="url(#MapLight_svg__e)" />
    <Path d="M796.972 89.515c0 34.947-63.277 133.912-63.277 133.912s-63.277-98.965-63.277-133.912a63.277 63.277 0 11126.554 0z" fill={props.primarycolor} />
    <Circle cx={733.695} cy={85.1} r={19.13} fill="#fff" />
    <Path
      d="M381.558 585.322c0 39.396-70.412 150.959-70.412 150.959s-70.411-111.563-70.411-150.959 31.524-71.332 70.411-71.332 70.412 31.936 70.412 71.332z"
      transform="translate(-156.205 -52.65)"
      fill="url(#MapLight_svg__f)"
    />
    <Ellipse cx={154.941} cy={527.695} rx={21.287} ry={21.566} fill="url(#MapLight_svg__g)" />
    <Path d="M218.219 532.277c0 34.947-63.278 133.912-63.278 133.912s-63.277-98.965-63.277-133.912a63.277 63.277 0 11126.555 0z" fill={props.primarycolor} />
    <Circle cx={154.941} cy={527.862} r={19.13} fill="#fff" />
    <Path d="M561.219 537.277c0 34.947-63.278 133.912-63.278 133.912s-63.277-98.965-63.277-133.912a63.277 63.277 0 11126.555 0z" fill={props.primarycolor} />
    <Circle cx={497.941} cy={532.862} r={19.13} fill="#fff" />
    <Path d="M809.219 497.277c0 34.947-63.278 133.912-63.278 133.912s-63.277-98.965-63.277-133.912a63.277 63.277 0 11126.555 0z" fill={props.primarycolor} />
    <Circle cx={745.941} cy={492.862} r={19.13} fill="#fff" />
    <Path d="M250.219 63.277c0 34.947-63.278 133.912-63.278 133.912s-63.277-98.965-63.277-133.912a63.277 63.277 0 11126.555 0z" fill={props.primarycolor} />
    <Circle cx={186.941} cy={58.862} r={19.13} fill="#fff" />
  </Svg>
);
SvgMapLight.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
