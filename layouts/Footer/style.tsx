import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { fontSizes, fontWeights } from "../../style/fontStyle";
import { constColors } from "../../style/color";

export const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: "0",
    padding: "30px 0px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 300,
    lineHeight: "1.5em",
    background: "#6B547E",
    backgroundPosition: "center",
  },
  stayBox: {
    marginRight: "45px",
  },
  stay: {
    fontSize: fontSizes.font16,
    color: constColors.white,
    fontWeight: fontWeights.weight700,
    marginBottom: "14px",
  },
  subtitle: {
    fontSize: fontSizes.font12,
    fontWeight: fontWeights.weight500,
    color: constColors.white,
  },
  search: {
    borderRadius: "9px",
    backgroundColor: constColors.white,
    fontSize: fontSizes.font12,
    width: "100%",
    marginRight: "15px",
    height: "45px",
  },
  searchBox: {
    display: "flex",
    marginTop: "20px",
  },
  inputRoot: {
    color: "inherit",
    padding: "10px",
  },
  communityBox: {
    marginLeft: "40px",
  },
  socialicon: {
    marginRight: "17px",
  },
  socialBox: {
    display: "flex",
  },
  stayBottom: {
    paddingBottom: "40px",
    marginBottom: "20px",
    borderBottom: "1px solid rgba(229, 232, 235, 0.25)",
  },
  marketBox: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "70px",
  },
  fTitle: {
    fontSize: fontSizes.font14,
    fontWeight: fontWeights.weight700,
    color: constColors.white,
    marginBottom: "16px",
  },
  statTitle: {
    fontSize: fontSizes.font14,
    fontWeight: fontWeights.weight700,
    color: constColors.white,
    marginTop: "60px",
    marginBottom: "16px",
  },
  fSubTitle: {
    fontSize: fontSizes.font14,
    fontWeight: fontWeights.weight500,
    color: constColors.white,
    marginBottom: "10px",
    cursor: "pointer",
    textDecoration: "none",
  },
  bottomTxt: {
    fontSize: fontSizes.font10,
    fontWeight: fontWeights.weight500,
    color: constColors.white,
  },
  policyTxt: {
    fontSize: fontSizes.font10,
    fontWeight: fontWeights.weight500,
    color: constColors.white,
    textAlignLast: "end",
  },
}));

export const StyledContainer = withStyles((theme) => ({
  root: {
    padding: "0 40px 50px 40px",
  },
}))(Container);
