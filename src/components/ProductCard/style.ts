import { fonts } from "@/theme"
import { makeStyles } from "@rneui/themed"

export const useStyles = makeStyles((theme) => ({
  card: {
    flex: 1,
    backgroundColor: theme.colors.grey1,
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
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.body.sm
  },
  descriptionSubtitle: {
    color: theme.colors.primary,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.body.xs
  },
  descriptionText: {
    color: theme.colors.grey4,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.body.sm
  }
}))