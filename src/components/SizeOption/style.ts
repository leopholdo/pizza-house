import { fonts } from "@/theme"
import { makeStyles } from "@rneui/themed"

export const useStyles = makeStyles((theme) => ({
  sizeOption: {
    width: 90,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: theme.colors.grey1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sizeTitle: {
    fontSize: fonts.size.body.sm,
    fontFamily: fonts.family.regular,
    color: theme.colors.grey3,
  },
  sizeSubtitle: {
    color: theme.colors.grey4,
    fontSize: fonts.size.body.xs,
  }
}))

export const useActiveStyles = makeStyles((theme) => ({
  sizeOption: {
    width: 90,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: theme.colors.grey1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary
  },
  sizeTitle: {
    color: theme.colors.white,
    fontSize: fonts.size.body.sm,
    fontFamily: fonts.family.regular,
  },
  sizeSubtitle: {
    color: theme.colors.white,
    fontSize: fonts.size.body.xs,
  }
}))