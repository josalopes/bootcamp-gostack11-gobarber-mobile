import React from 'react';

import { AuthProvider } from './auth';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>

  </AuthProvider>
);

export default AppProvider;
