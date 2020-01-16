module.exports = {
  dimensions: false,
  svgProps: {
    style: '{ props.style }',
    width: '100%',
    height: '{ props.height }',
  },
  replaceAttrValues: {
    '#6c63ff': '{props.primarycolor}',
    '#3f3d56': '{props.accentcolor}',
    '#2f2e41': '{props.haircolor}',
    '#ffb9b9': '{props.skincolor}',
  },
  template({ template }, opts, { imports, componentName, props, jsx, exports }) {
    const typeScriptTpl = template.smart({ plugins: ['typescript'] });
    return typeScriptTpl.ast`
      import React from 'react';
      import { LinearGradient } from '../hack/linear_gradient';
      import { ClipPath } from '../hack/clip_path';
      import { IIblisReactNativeUndrawProps } from '../iblis_react_native_undraw_props';
      import Svg, { SvgProps } from 'react-native-svg';
      export const ${componentName} = (props: IIblisReactNativeUndrawProps & SvgProps) => ${jsx};
      ${componentName}.defaultProps = {
        primarycolor: '#6c63ff',
        accentcolor: '#3f3d56',
        haircolor: '#2f2e41',
        skincolor: '#ffb9b9',
        height: 200,
      };
    `;
  },
};
