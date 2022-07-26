import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import GlobalNavigator from './navigation/GlobalNavigator';

import { ContextProvider } from './hooks/Context';

export default function App() {
  return (
    <NavigationContainer>
      <ContextProvider>

        <GlobalNavigator />

      </ContextProvider>
    </NavigationContainer>
  );
}

{
                                      (' July 18, 2022');
}

{
  (' please take on consideration  that some features are not implemented yet just for simplicity purpose,   submit buttons are not sumbmitting but are used to navigate between screens');
}
{
  (' You can navigate from: welcome screen => login/register screens => listing / post / account screens ');
}
{
  (' You can navigate from: listing  screen => details screen ');
}
{
  (' You will be redirected  from: Post  screen => listing screen after 3 seconds once the Post Button is pressed');
}
{
  (' You will be redirected  from: Account  screen => Welcome screen with the logOut button ');
}
{
  (' validation and forms handled using Formik && Yup ');
}
{
  (' images && permission handled using ImagePicker from @expo ');
}
{
  (' a small Context component used for switching betwwen some screens  ');
}
