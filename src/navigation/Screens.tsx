import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Articles, Components, Home, Profile, Register, Pro,Creater,ButtonExample,CardExample,InputExample,Shopping} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}> 
     <Stack.Screen 
      name="Shopping"
      component={Shopping}
      options={{title: t('navigation.shopping')}}
    />
    <Stack.Screen 
      name="InputExample"
      component={InputExample}
      options={{title: t('navigation.inputExample')}}
    />
     <Stack.Screen 
        name="CardExample"
        component={CardExample}
        options={{title: t('navigation.cardExample')}}

      />
     <Stack.Screen
        name="ButtonExample"
        component={ButtonExample}
        options={{title: t('navigation.buttonExample')}}

      />
     <Stack.Screen
        name="Creater" 
        component={Creater}
        options={{title: t('navigation.creater')}}

      />
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Components"
        component={Components}
        options={screenOptions.components}
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{title: t('navigation.articles')}}
      />

      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
