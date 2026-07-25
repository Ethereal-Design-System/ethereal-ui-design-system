import { View, ViewProps } from 'react-native';
import { cardStyles } from './styles';

export const CardRoot: React.FC<ViewProps> = ({ style, ...props }) => {
  return (
    <View testID="card-root" style={[style, cardStyles.root]} {...props} />
  );
};
