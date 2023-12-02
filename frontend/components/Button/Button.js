import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import gStyles from './styles';

const Button = ({ text, buttonStyle, color, onPress, isFocused, isDisabled }) => {
  const styles = gStyles(color, buttonStyle);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    if (!isDisabled) {
      onPress();
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.default,
        isHovered && !pressed && styles.hovered,
        pressed && styles.pressed,
        isFocused && styles.focused,
        isDisabled && styles.disabled,
      ]}
      onPress={handlePress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {
        text === 'F' ? (
          <MaterialIcons name="add-a-photo" size={25} color="#fff" />
        ) : text === 'A' ? (
          <MaterialIcons name="file-upload" size={25} color="#fff" />
        ) : (
          <Text style={[styles.text, isDisabled && styles.disabledText]}>{text}</Text>
        )
      }
    </Pressable>
  );
};

export default Button;