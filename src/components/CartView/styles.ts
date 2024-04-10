import { fonts } from "@/theme"
import { makeStyles } from "@rneui/themed"

export const useStyles = makeStyles((theme) => ({
  container: { 
    flex: 1,
    overflow: "hidden",
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    marginVertical: 10,
    marginLeft: 15
  },
  headerTitle: {
    fontSize: fonts.size.heading.sm,
    fontFamily: fonts.family.medium,
    color: theme.colors.secondary,
    marginRight: 28
  },
  title: {
    fontSize: fonts.size.heading.lg,
    fontFamily: fonts.family.bold,
    color: theme.colors.primary
  },
  body: {
    height: '100%',
    flex: 1,
    marginHorizontal: 20,
    rowGap: 10,
    paddingBottom: 120
  },
  emptyCartWrapper: {
    height: '100%',
    paddingBottom: 120,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyCartText: {
    fontSize: fonts.size.heading.md,
    fontFamily: fonts.family.medium,
    color: theme.colors.grey4
  },
  orderWrapper: {
    flexDirection: 'row',
    gap: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15
  },
  bodyTitle: {
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.body.md
  },
  bodySubtitle: {
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.body.sm,
    color: theme.colors.grey4,
  },
  bodyText: {
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.body.xs,
    color: theme.colors.grey4,
  },
  productPrice: {
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.body.sm
  },
  bodySection: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: theme.colors.grey2,
    marginTop: 5,
    paddingTop: 5
  },
  footerWrapper: {
    position: 'absolute',
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: theme.colors.grey1,
    width: '100%',
    padding: 15,
    bottom: 0
  },
  totalPrice: {
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.body.sm,
    color: '#000'
  },
  modalView: {
    margin: 20,
    backgroundColor: theme.colors.background,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    textAlign: 'center',
  },
  quantityContainer: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 10
  },
  quantity: {
    width: 25,
    textAlign: 'center',
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.heading.sm
  },
}))