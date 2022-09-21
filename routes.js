import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Header from './src/components/Header';
import MoreContent from './src/pages/MoreContent';
import { Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
function Routes() {
  return (
    <Tab.Navigator
    screenOptions={{
       headerStyle:{
        backgroundColor: '#1B1D2E',
       },
       headerTitleStyle: {
        color: '#fff', 
      },
    
        tabBarActiveTintColor: '#1B66F9',
        tabBarInactiveTintColor: '#9C9090',
        tabBarActiveBackgroundColor: '#1B1D2E',
        tabBarInactiveBackgroundColor: '#1B1D2E',
        // tabBarIcon:, 
            tabBarStyle: [{
                  backgroundColor: '#1B1D2E',
                  paddingBottom: 3,
                  display: 'flex',
                  justifyContent: 'space-between'
            },
            null
        ]
     }}
    >
      <Tab.Screen name="StormApp" component={Home} 
      options={{
        headerTitle: ()=> <Header />,
        tabBarIcon: ({size, focused})=>{
            if (focused) {
                return <Ionicons name="home" size={size} color="#1B66F9"/>
            }else{
                return <Ionicons name="home" size={size} color="#9C9090"/>
            }
        }
      }}/>
      <Tab.Screen name="See More" component={MoreContent} 
      options={{
        headerTitle: ()=> <Header />,
        tabBarIcon: ({size, focused})=>{
            if (focused) {
                return <Ionicons name="ellipsis-horizontal-circle-outline" size={size} color="#1B66F9"/>
            }else{
                return <Ionicons name="ellipsis-horizontal-circle-outline" size={size} color="#9C9090"/>
            }
        }
      }}/>
    </Tab.Navigator>
  );
}

export default Routes;