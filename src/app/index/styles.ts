import { fonts } from "@/theme"
import { makeStyles } from "@rneui/themed"
import Constants from 'expo-constants';

export const useStyles = makeStyles((theme) => ({
  container: { 
    flex: 1,
    zIndex: 1,
    overflow: "hidden",
    backgroundColor: theme.colors.black,
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: theme.colors.white,
  },
  linear: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: fonts.size.heading.xl,
    fontFamily: fonts.family.bold,
    color: theme.colors.white
  },
  body: {
    marginTop: -40,
    backgroundColor: "#fff",
    flex: 1
  },
  tab: {
    marginTop: 'auto', 
    marginBottom: 40, 
  },
  tabIndicatorStyle: {
    backgroundColor: '#FF7A00'
  },
  tabTitleStyle: {
    fontSize: 15,
    color: '#fff', 
    fontFamily: 'Poppins_400Regular'
  },
  tabItem: {
    width: '100%'
  }
}))