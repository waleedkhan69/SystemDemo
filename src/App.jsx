import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Home,
  Analytics,
  Profile,
  Contacts,
  Settings,
  ProfileOverview,
  ProfileEdit,
  ProfileAbout,
  ProfileSecurity,
  ProfileLead,
  Dashboard,
  Error404,
} from './index';
import { AppProvider } from './context/context';
import { ColorProvider } from './context/colorContext';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <AppProvider>
          <ColorProvider>
            <Home />
          </ColorProvider>
        </AppProvider>
      ),
      errorElement: <Error404 />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: 'profile/overview', element: <ProfileOverview /> },
        {
          path: 'profile',
          element: <Profile />,
          children: [
            { path: 'content/:id', element: <ProfileEdit /> },
            { path: 'about/:id', element: <ProfileAbout /> },
            { path: 'qrcode/:id', element: <ProfileSecurity /> },
            { path: 'lead/:id', element: <ProfileLead /> },
          ],
        },
        { path: 'analytics', element: <Analytics /> },
        { path: 'contact', element: <Contacts /> },
        { path: 'settings', element: <Settings /> },
        { path: 'about', element: <ProfileAbout /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
