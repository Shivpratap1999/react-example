import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import HomeScreen from './screens/Home'
import './index.css'
import UserInfos from './screens/UserInfo'
import ContactScreen from './screens/Contact'
import ProfileScreen from './screens/ProfilesScreen'
import PageNotFoundScreen from './screens/NotFount'
import Profile from './components/Profile'
import { IdLoader, ProfileInfoLoader } from './components/Loader'
import LoginSignup from './screens/LginSignup/LoginSIgnup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
    errorElement: <PageNotFoundScreen />
  },
  {
    path: '/entry-action/:actionName',
    element: <LoginSignup />,
  },
  {
    path: '/users',
    element: <UserInfos />,
  },
  {
    path: '/contact',
    element: <ContactScreen />,
  },
  {
    path: '/profiles',
    element: <ProfileScreen />,
    loader: IdLoader,
    children: [
      {
        path: '/profiles/:profileId',
        element: <Profile />,
        loader: ProfileInfoLoader,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
