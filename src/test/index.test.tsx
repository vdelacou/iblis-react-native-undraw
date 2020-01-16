import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
//
import renderer from 'react-test-renderer';
import { Svg3DModeling } from '../';

const BasicUsage: FC = () => {
  return (
    <View style={styles.container}>
      <Svg3DModeling />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

it('renders correctly', () => {
  renderer.create(<BasicUsage />);
});
