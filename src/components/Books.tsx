import React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';
import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
export const SvgBooks = (props: IIblisReactNativeUndrawProps & SvgProps) => (
  <Svg data-name="Layer 1" viewBox="0 0 1036 569.971" style={props.style} width="100%" height={props.height} {...props}>
    <Path
      d="M193.036 295.837c0 105.976-85.918 191.894-191.894 191.894V103.943c105.976 0 191.894 85.918 191.894 191.894zM842.964 295.837c0 105.976 85.918 191.894 191.894 191.894V103.943c-105.976 0-191.894 85.918-191.894 191.894zM187.237 80.882a13.707 13.707 0 1113.706-13.706 13.722 13.722 0 01-13.706 13.706zm0-25.129a11.422 11.422 0 1011.422 11.423 11.435 11.435 0 00-11.422-11.423zM796.989 436.446H774.44v-22.549h22.549zm-20.814-1.735h19.08v-19.08h-19.08zM259.735 415.977l-15.38-16.49 16.49-15.38 15.38 16.49zm-12.928-16.404l13.014 13.953 13.952-13.014-13.014-13.953z"
      fill={props.accentcolor}
    />
    <Path d="M0 0v569.971h1036V0zm1033.716 567.687H2.284V2.284h1031.432z" fill={props.accentcolor} />
    <Path
      d="M774.898 569.4q-37.048-5.8-71.243-9.866l8.778-17.557c-3.047-1.016-16.25 9.14-16.25 9.14l11.172-50.783c-15.235 2.031-22.345 53.831-22.345 53.831l-17.267-17.267 8.5 19.55c-69.759-7.33-129.953-9.618-180.554-9.093l7.514-15.027c-3.047-1.016-16.251 9.141-16.251 9.141l11.172-50.784c-15.235 2.031-22.345 53.831-22.345 53.831l-17.266-17.267 9.002 20.706a1013.499 1013.499 0 00-103.623 8.345c7.498-23.357 33.68-45.81 33.68-45.81-20.132 6.264-30.605 16.467-36.026 25.926a407.859 407.859 0 0121.806-141.205s-40.627 91.411-34.533 152.352l.773 10.825c-35.345 5.514-53.08 11.012-53.08 11.012z"
      fill={props.accentcolor}
    />
    <Circle cx={524.425} cy={287.859} r={158.77} fill={props.primarycolor} opacity={0.3} />
    <Path fill={props.primarycolor} d="M459.223 85.873L353.51 214.137l156.455 184.645 104.303-122.626L459.223 85.873z" />
    <Path opacity={0.1} d="M459.223 85.873L353.51 214.137l156.455 184.645 104.303-122.626L459.223 85.873z" />
    <Path d="M357.739 215.547a53.131 53.131 0 018.619-11.508l97.093-98.433s33.828-5.638 40.876 11.276L380.291 218.366z" fill="#f2f2f2" />
    <Path d="M352.805 213.433l143.77 219.882s14.095 9.867 28.19 4.229l147.293-99.37-156.455-236.797-140.95 109.941z" fill={props.primarycolor} />
    <Path
      fill={props.accentcolor}
      d="M407.81 200.519l90.216-64.827 1.333 1.855-90.216 64.827zM404.71 226.043l1.904-1.26L525.012 403.79l-1.905 1.26zM537.49 409.152l95.824-70.503 1.354 1.84-95.825 70.504zM513.257 140.086l1.875-1.304L637.76 314.969l-1.875 1.305zM365.72 206.572l111.533-102.363.952 1.038L366.672 207.61zM369.977 207.993l116.567-102.907.933 1.057L370.91 209.05zM372.828 208.002l121.008-100.865.902 1.083-121.007 100.865z"
    />
    <Path
      d="M998.306 295.837c-6.487-2.405-14.536-6.512-19.526-10.862l3.517 9.72h-62.804v2.284h62.804l-3.517 9.722c4.99-4.35 13.04-8.457 19.526-10.864zM117.65 294.695H54.844l3.517-9.723c-4.99 4.35-13.039 8.458-19.526 10.865 6.487 2.405 14.536 6.512 19.526 10.862l-3.517-9.72h62.804z"
      fill="#fff"
    />
  </Svg>
);
SvgBooks.defaultProps = {
  primarycolor: '#6c63ff',
  accentcolor: '#3f3d56',
  haircolor: '#2f2e41',
  skincolor: '#ffb9b9',
  height: 200,
};
