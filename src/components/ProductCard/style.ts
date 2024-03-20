import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const styles = StyleSheet.create({
  card: {
    height: 150,
    backgroundColor: theme.colors.gray_100,
    borderRadius: 20,
    marginVertical: 10
  },
  image: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: 90,
  },
  description: {
    padding: 10,
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
  }
})