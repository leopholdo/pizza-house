import { fonts } from "@/theme"
import { makeStyles } from "@rneui/themed"

export const useStyles = makeStyles((theme) => ({
  container: { 
    flex: 1,
    overflow: "hidden",
    backgroundColor: theme.colors.black,
  },
  image: {
    width: "100%",
    height: 180,
    backgroundColor: theme.colors.white,
  },
  linear: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 20,
    marginTop: 30,
  },
  title: {
    fontSize: fonts.size.heading.lg,
    fontFamily: fonts.family.bold,
    color: theme.colors.primary
  },
  body: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 20,
    marginTop: -20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  productTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
    marginLeft: -10
  },
  descriptionText: {
    marginTop: 10,
    color: theme.colors.grey4,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.body.sm
  },
  sectionTitle: {
    marginTop: 15,
    color: theme.colors.grey4,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.body.md
  },
  sizeWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 5
  },
  listOptionTitle: {
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.body.md
  },
  listOptionSubtitle: {
    fontFamily: fonts.family.regular,
    color: theme.colors.grey4,
  },
  bottomContainer: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
  },
  quantityContainer: {
    flexDirection: 'row',
    gap: 10
  },
  quantity: {
    width: 25,
    textAlign: 'center',
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.heading.sm
  },
  btnAdd: {
    borderRadius: 5,
    fontFamily: fonts.family.medium,
  },
  btnAddText: {
    color: theme.colors.white,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.body.md
  },
  btnAddContainer: {
    width: '100%', 
    display: 'flex', 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  hasError: {
    color: theme.colors.error
  }
}))