import { Theme, makeStyles } from "@material-ui/core/styles";
import { constColors } from "../../style/color";

export const useStyles = makeStyles((theme: Theme) => ({
  basicBackground: {
    minHeight: "100vh",
    overflow: "hidden",
    position: "relative",
    backgroundColor: constColors.white,
  },
}));
