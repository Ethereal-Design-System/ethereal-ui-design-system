import StorybookUIRoot from '../../.rnstorybook';
import { useLoadFonts } from '../hooks/useLoadFonts';

export default function App() {
  useLoadFonts();

  return <StorybookUIRoot />;
}
