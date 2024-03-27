import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const sizeStyles = StyleSheet.create({
  sizeOption: {
    width: 90,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: theme.colors.gray_100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sizeTitle: {
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.gray_300,
  },
  sizeSubtitle: {
    color: theme.colors.gray_400,
    fontSize: theme.fonts.size.body.xs,
  }
})

export const sizeActiveStyles = StyleSheet.create({
  sizeOption: {
    width: 90,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: theme.colors.gray_100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary_alt
  },
  sizeTitle: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.regular,
  },
  sizeSubtitle: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.body.xs,
  }
})