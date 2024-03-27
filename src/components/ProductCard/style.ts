import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: theme.colors.gray_100,
    borderRadius: 20,
    marginVertical: 10,
    flexDirection: 'row'
  },
  image: {
    marginLeft: 'auto',
    alignSelf: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    height: "100%",
  },
  description: {
    padding: 15,
    flex: 3
  },
  descriptionTitle: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.body.sm
  },
  descriptionSubtitle: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.xs
  },
  descriptionText: {
    color: theme.colors.gray_400,
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.body.sm
  }
})