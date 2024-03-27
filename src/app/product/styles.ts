import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const styles = StyleSheet.create({
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
    fontSize: theme.fonts.size.heading.lg,
    fontFamily: theme.fonts.family.bold,
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
    color: theme.colors.gray_400,
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.body.sm
  },
  sectionTitle: {
    marginTop: 15,
    color: theme.colors.gray_400,
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.body.md
  },
  sizeWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 5
  },
  listOptionTitle: {
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.body.md
  },
  listOptionSubtitle: {
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.gray_400,
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
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.heading.sm
  },
  btnAdd: {
    borderRadius: 5,
    fontFamily: theme.fonts.family.medium,
  },
  btnAddText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.body.md
  },
  btnAddContainer: {
    width: '100%', 
    display: 'flex', 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
})