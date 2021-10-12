declare namespace StackRoute {
  import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
  import { RootStackParamList } from '../routes/routes.private';
  import { PublicStackParamList } from '../routes/routes.public';

  export type Private<ScreenName extends keyof RootStackParamList> =
    NativeStackNavigationProp<RootStackParamList, ScreenName>;

  export type Public<ScreenName extends keyof PublicStackParamList> =
    NativeStackNavigationProp<RootStackParamList, ScreenName>;
}
