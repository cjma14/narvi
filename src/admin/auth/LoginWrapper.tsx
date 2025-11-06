import React from 'react';
import AuthProvider from './AuthProvider';
import SignIn from './sign-in';

export default function LoginWrapper() {
  return (
    <AuthProvider>
      <SignIn />
    </AuthProvider>
  );
}
