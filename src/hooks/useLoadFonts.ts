import {
  Jomhuria_400Regular,
  useFonts as useFontsJomhuria,
} from '@expo-google-fonts/jomhuria';

import {
  Jost_100Thin_Italic,
  Jost_400Regular,
  Jost_400Regular_Italic,
  Jost_500Medium,
  Jost_500Medium_Italic,
  Jost_600SemiBold_Italic,
  Jost_700Bold,
  Jost_800ExtraBold,
  Jost_800ExtraBold_Italic,
  Jost_900Black,
  Jost_900Black_Italic,
  useFonts as useFontsJost,
} from '@expo-google-fonts/jost';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';

export function useLoadFonts() {
  const [isJostLoaded] = useFontsJost({
    Jost_400Regular,
    Jost_400Regular_Italic,
    Jost_500Medium,
    Jost_500Medium_Italic,
    Jost_700Bold,
    Jost_600SemiBold_Italic,
    Jost_800ExtraBold,
    Jost_800ExtraBold_Italic,
    Jost_900Black,
    Jost_100Thin_Italic,
    Jost_900Black_Italic,
  });

  const [isJomhuriaLoaded] = useFontsJomhuria({
    Jomhuria_400Regular,
  });
  const isFontsLoaded = isJomhuriaLoaded && isJostLoaded;

  useEffect(() => {
    if (isFontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isFontsLoaded]);

  if (!isFontsLoaded) {
    return null;
  }
}
