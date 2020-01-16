import React from 'react';
import Svg, { Circle, Defs, Path, Rect, Stop, SvgProps } from 'react-native-svg';
import { LinearGradient } from '../hack/linear_gradient';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgSpreadsheets = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 908.72 593.16" style={props.style} width="100%" height={props.height} {...props}>
    <Defs>
      <LinearGradient id="Spreadsheets_svg__a" x1={623.41} y1={835.81} x2={623.41} y2={62.24} gradientTransform="rotate(90 606.04 433.22)" gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopOpacity={0.12} />
        <Stop offset={0.55} stopOpacity={0.09} />
        <Stop offset={1} stopOpacity={0.02} />
      </LinearGradient>
      <LinearGradient id="Spreadsheets_svg__b" x1={600} y1={746.58} x2={600} y2={153.42} gradientTransform="rotate(.08 580.425 436.475)" gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="gray" stopOpacity={0.25} />
        <Stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
        <Stop offset={1} stopColor="gray" stopOpacity={0.1} />
      </LinearGradient>
    </Defs>
    <Path transform="rotate(-.08 -109386.293 104667.515)" fill="url(#Spreadsheets_svg__a)" d="M203.45 183.42h773.57v534.35H203.45z" />
    <Rect x={146} y={153.99} width={908} height={592.01} rx={28.33} ry={28.33} transform="rotate(-.08 -109371.969 104667.525)" fill="url(#Spreadsheets_svg__b)" opacity={0.7} />
    <Rect x={154.11} y={158.92} width={893.37} height={581.1} rx={28.33} ry={28.33} transform="rotate(-.08 -109371.964 104660.363)" fill="#535461" />
    <Circle cx={192.71} cy={452.44} r={20.68} transform="rotate(-.08 -109765.877 104667.25)" fill="#535461" />
    <Circle cx={192.71} cy={452.44} r={20.68} transform="rotate(-.08 -109765.877 104667.25)" opacity={0.1} />
    <Circle cx={1011.51} cy={363.1} r={6.89} transform="rotate(-.08 -108978 104581.856)" fill="#535461" />
    <Rect x={1008.86} y={397.57} width={6.89} height={89.61} rx={1.43} ry={1.43} transform="rotate(-.08 -108978.055 104660.638)" fill="#535461" />
    <Rect x={1008.86} y={397.57} width={6.89} height={89.61} rx={1.43} ry={1.43} transform="rotate(-.08 -108978.055 104660.638)" opacity={0.1} />
    <Circle cx={1011.51} cy={363.1} r={6.89} transform="rotate(-.08 -108978 104581.856)" opacity={0.1} />
    <Path fill="#fff" d="M725 547.58H84.37v-498h747.69v430.16l-.43 67.12-106.63.72z" />
    <Path
      fill="#e0e0e0"
      d="M84.37 221.97h747.69v6.86H84.37zM84.37 184.97h747.69v6.86H84.37zM84.37 147.97h747.69v6.86H84.37zM84.37 110.97h747.69v6.86H84.37zM84.37 73.97h747.69v6.86H84.37zM84.37 258.98h747.69v6.86H84.37zM84.37 296h747.69v6.86H84.37zM84.37 333.02h747.69v6.86H84.37zM84.37 370.04h747.69v6.86H84.37zM84.37 407.05h747.69v6.86H84.37zM84.37 444.07h747.69v6.86H84.37zM84.36 481.09h747.57v6.86H84.36zM84.37 518.11h746.99v6.86H84.37z"
      opacity={0.7}
    />
    <Path
      fill="#e0e0e0"
      d="M174.16 80.8h5.18v466.78h-5.18zM288.56 80.8h5.18v466.78h-5.18zM402.96 80.8h5.18v466.78h-5.18zM517.36 80.8h5.18v466.78h-5.18zM631.76 80.8h5.18v466.78h-5.18zM751.34 547.58h-5.18V80.8l5.18-.22v467z"
    />
    <Circle cx={101.09} cy={61.08} r={6.73} fill="#ff5252" />
    <Circle cx={120.36} cy={61.08} r={6.73} fill="#ff0" />
    <Circle cx={139.63} cy={61.08} r={6.73} fill="#69f0ae" />
    <Path
      fill={props.primarycolor}
      d="M293.36 339.58h110v30h-110zM408.36 487.58h110v30h-110zM522.36 447.58h110v30h-110zM522.36 228.58h110v30h-110zM637.36 376.58h110v30h-110zM178.36 117.58h110v30h-110zM408.36 192.58h110v30h-110zM178.36 265.58h110v30h-110z"
    />
  </Svg>
);
SvgSpreadsheets.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
