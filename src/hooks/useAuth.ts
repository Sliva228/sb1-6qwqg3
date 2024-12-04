import { useState, useEffect } from 'react';

interface AuthState {
  isAdmin: boolean;
  user: null | {
    id: string;
    username: string;
    role: 'admin' | 'user';
  };
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isAdmin: false,
    user: null,
  });

  useEffect(() => {
    // В реальном приложении здесь будет проверка токена и получение данных пользователя
    const checkAuth = async () => {
      try {
        // Имитация проверки авторизации
        const mockUser = {
          id: '1',
          username: 'admin',
          role: 'admin' as const,
        };
        setAuthState({
          isAdmin: true,
          user: mockUser,
        });
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    };

    checkAuth();
  }, []);

  return authState;
}