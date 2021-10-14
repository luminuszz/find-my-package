import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLogin } from '../services/gql/mutations/login';
import { client } from '../services/gql';
import { getCurrentUserRequest } from '../services/gql/queries/useGetCurrentUser';

type AuthContextProps = {
  login(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
  user: {
    name: string;
    email: string;
  };
  isLogged: boolean;
};

type Props = {
  expoToken: any;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC<Props> = ({ children, expoToken }) => {
  const [user, setUser] = useState(null);
  const { mutateAsync } = useLogin();

  const login = async (email: string, password: string) => {
    try {
      console.log({ expoToken });

      const response = await mutateAsync({
        email,
        password,
        appToken: expoToken,
      });

      client.setHeader('Authorization', `Bearer ${response.login.token}`);

      const { me } = await getCurrentUserRequest();

      setUser(me);

      await AsyncStorage.multiSet([
        ['token', JSON.stringify(response.login.token)],
        ['user', JSON.stringify(me)],
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  const logout = async () => {
    await AsyncStorage.multiRemove(['token', 'user']);
    setUser(null);
  };

  useEffect(() => {
    (async () => {
      const [token, user] = await AsyncStorage.multiGet(['token', 'user']);

      if (token[1] && user[1]) {
        const parseUser = JSON.parse(user[1]);
        const parseToken = JSON.parse(token[1]);

        setUser(parseUser);
        client.setHeader('Authorization', `Bearer ${parseToken}`);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, user, isLogged: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
