import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import Carousel from "react-slick";

// Images
import lifeEvents1 from "assets/img/lifeEvents1.jpg";
import lifeEvents2 from "assets/img/lifeEvents2.jpg";
import lifeEvents3 from "assets/img/lifeEvents3.jpg";
import profilePicture from "assets/img/profilePicture.jpg";

// Docs
import resume from "assets/docs/resume.pdf"

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid,
      classes.imgBigAvatar
    );
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div className={classes.section}>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={profilePicture} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Chris Willis
                  <br />
                  <small className={classes.smallTitle}>DevOps Engineer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Enthusiastic about platform, virtualization, and
                    network architecture and implementation. Lover
                    of coffee and video games. I love food and I'm
                    always seeking new food to try or places to eat.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    color="danger"
                    size="lg"
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={6} sm={6} md={6} className={classes.marginAuto}>
              <Card carousel>
                <h4 className={classes.cardTitle}>
                  Life Events
                </h4>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={lifeEvents1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Diamond Head, HI
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={lifeEvents2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Portland, ME
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={lifeEvents3}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Red Rock Canyon, NV
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
            <GridItem xs={6} sm={6} md={6} className={classes.marginAuto}>
              <Card carousel>
                <h4 className={classes.cardTitle}>
                  Food
                </h4>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={lifeEvents1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Diamond Head, HI
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={lifeEvents2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Portland, ME
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
