import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Box, InputBase } from "@material-ui/core";
import { useStyles, StyledContainer } from "./style";
import SignBtn from "../../components/button/signUpBtn";
import SocialBtn from "../../components/button/communityBtn";
import {
  icons,
  marketplaces,
  accounts,
  stats,
  resources,
  companys,
} from "./communityIcons";
import kitchen from "../../components/atoms/light_logo.svg";

function Footer() {
  var classes = useStyles();

  return (
    <footer className={classes.footer}>
      <StyledContainer>
        <Box className={classes.stayBottom}>
          <Grid container>
            <Grid item lg={6} md={12}>
              <Box className={classes.stayBox}>
                <Typography className={classes.stay}>
                  Stay in the loop
                </Typography>
                <Typography className={classes.subtitle}>
                  Join our mailing list to stay in the loop with our newest
                  feature releases, NFT drops, and tips and tricks for
                  navigating KitchenNFT.
                </Typography>
                <form>
                  <Box className={classes.searchBox}>
                    <Box className={classes.search}>
                      <InputBase
                        placeholder="Your email address"
                        classes={{
                          root: classes.inputRoot,
                        }}
                        inputProps={{ "aria-label": "search" }}
                      />
                    </Box>
                    <SignBtn txt="Sign up" />
                  </Box>
                </form>
              </Box>
            </Grid>
            <Grid item lg={6} md={12}>
              <Box className={classes.communityBox}>
                <Typography className={classes.stay}>
                  Join the community
                </Typography>
                <Box className={classes.socialBox}>
                  {icons.map((icon, i) => {
                    return (
                      <Box key={i} className={classes.socialicon}>
                        <SocialBtn data={icon} />
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.stayBottom}>
          <Grid container style={{ paddingTop: "40px" }}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box>
                <img src={kitchen} alt="kitche" />
              </Box>
              <Typography className={classes.stay}>KitcheNFT</Typography>
              <Typography className={classes.subtitle}>
                The world’s first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and
                discover exclusive digital items.
              </Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box className={classes.marketBox}>
                <Box>
                  <Typography className={classes.fTitle}>
                    Marketplace
                  </Typography>
                  {marketplaces.map((data, i) => {
                    return (
                      <Typography key={i} className={classes.fSubTitle}>
                        {data.item}
                      </Typography>
                    );
                  })}
                </Box>
                <Box>
                  <Typography className={classes.fTitle}>My Account</Typography>
                  {accounts.map((data, i) => {
                    return (
                      <Typography key={i} className={classes.fSubTitle}>
                        {data.item}
                      </Typography>
                    );
                  })}
                  <Typography className={classes.statTitle}>Stats</Typography>
                  {stats.map((data, i) => {
                    return (
                      <Typography key={i} className={classes.fSubTitle}>
                        {data.item}
                      </Typography>
                    );
                  })}
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box className={classes.marketBox}>
                <Box>
                  <Typography className={classes.fTitle}>Resources</Typography>
                  {resources.map((data, i) => {
                    return (
                      <Typography key={i} className={classes.fSubTitle}>
                        {data.item}
                      </Typography>
                    );
                  })}
                </Box>
                <Box>
                  <Typography className={classes.fTitle}>Company</Typography>
                  {companys.map((data, i) => {
                    return (
                      <Typography key={i}>
                        <Link
                          to={"/" + data.item.toLocaleLowerCase()}
                          className={classes.fSubTitle}
                        >
                          {data.item}
                        </Link>
                      </Typography>
                    );
                  })}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container>
            <Grid item lg={9} md={6} sm={12} xs={12}>
              <Typography className={classes.bottomTxt}>
                2022 WagyuSwap, Inc
              </Typography>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <Typography className={classes.policyTxt}>
                <span>Privacy Policy</span> &nbsp; &nbsp;
                <span>Terms of Service</span>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </StyledContainer>
    </footer>
  );
}

export default Footer;
