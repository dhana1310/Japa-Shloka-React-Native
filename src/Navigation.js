import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import AddShloka from './AddShloka';
import AddShloka2 from './AddShloka2';
import JapaPage from './JapaPage';

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const Navigation = () => {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'add', title: 'Add Shloka', focusedIcon: 'album' },
    { key: 'japa', title: 'Japa', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    
    { key: 'view', title: 'View Shloka', focusedIcon: 'history' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    japa: JapaPage,
    add: AddShloka,
    view: AddShloka2
  });

  return (
    <BottomNavigation
      style={{marginTop:0}}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Navigation;