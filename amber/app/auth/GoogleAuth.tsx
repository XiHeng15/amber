
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as SecureStore from 'expo-secure-store';
import { EXPO_CLIENT_ID } from '@/config';
WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth(onLogin: (user: { email: string; name: string }) => void) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: EXPO_CLIENT_ID
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: { Authorization: `Bearer ${authentication?.accessToken}` },
      })
        .then((res) => res.json())
        .then((user) => {
          onLogin({ name: user.name, email: user.email });
          SecureStore.setItemAsync('user', JSON.stringify(user)); // for persistence
        });
    }
  }, [response]);

  return { promptAsync, request };
}
