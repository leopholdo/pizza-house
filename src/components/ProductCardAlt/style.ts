import { fonts } from "@/theme"
import { makeStyles } from "@rneui/themed"

export const useStyles = makeStyles((theme) => ({
  card: {
    height: 150,
    backgroundColor: theme.colors.grey1,
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
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.body.sm
  },
  descriptionSubtitle: {
    color: theme.colors.primary,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.body.xs
  }
}))