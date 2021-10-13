import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginRequest } from '../services/gql/mutations/login';
import { client } from '../services/gql';
import { getCurrentUserRequest } from '../services/gql/queries/useGetCurrentUser';

type AuthContextProps = {
  login(email: string, password: string): Promise<void>;
  user: {
    name: string;
    email: string;
  };
  isLogged: boolean;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await loginRequest({ email, password });

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

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet(['token', 'user']);

      if (token[1] && user[1]) {
        const parseUser = JSON.parse(user[1]);
        const parseToken = JSON.parse(token[1]);

        setUser(parseUser);
        client.setHeader('Authorization', `Bearer ${parseToken}`);

        console.log(client);
      }
    }
    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ login, user, isLogged: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
