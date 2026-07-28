import { TextInput } from 'react-native';
import { useState } from 'react';
import { inputVariants } from './variants';
import { IInput } from './types';
import { inputStyles } from './styles';
import { FieldMessage } from '../Field/Message';

export const Input: React.FC<IInput> = ({
  style,
  hasError = false,
  editable,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const isDisabled = editable === false;
  const keyByFocusState = isFocused ? 'focused' : 'unfocused';
  const keyByFormState = hasError ? 'error' : 'default';
  const variantStyles = isDisabled
    ? inputVariants.disabled
    : inputVariants[keyByFocusState][keyByFormState];

  return (
    <>
      <TextInput
        testID="input"
        style={[inputStyles.input, variantStyles, style]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        editable={editable}
        accessibilityLiveRegion="assertive"
        aria-invalid={hasError}
        accessibilityState={{ disabled: isDisabled, selected: isFocused }}
        {...props}
      />
    </>
  );
};
