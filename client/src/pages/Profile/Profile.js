import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ItemsGrid from "../../components/ItemsGrid";
import Gravatar from "react-gravatar";
import PropTypes from "prop-types";

const Profile = ({ classes, user }) => {
  return (
    <div className={classes.profileContainer}>
      <div className={classes.marginTop} />
      <div className={classes.useBox}>
        <div className={classes.userNameContainer}>
          <Gravatar className={classes.userImage} email={user.email} />
          <p className={classes.userFullname}>{user.fullname}</p>
        </div>
        <div className={classes.itemsStatus}>
          <p className={classes.itemsShared}>
            {user.items ? user.items.length : 0} Items Shared
          </p>
          <p className={classes.itemsBorrowed}>
            {user.borrowed ? user.borrowed.length : 0} Items Borrowed
          </p>
        </div>
        <div className={classes.userBio}>{user.bio}</div>
      </div>
      <div className={classes.itemsBox}>
        <div className={classes.sharedContainer}>
          <h1 className={classes.sharedItemsTitle}>Shared Items</h1>
          <div className={classes.itemsGridContainer}>
            <ItemsGrid items={user.items} />
          </div>
        </div>
      </div>
    </div>
  );
};
Profile.propTypes = {
  fullname: PropTypes.string,
  bio: PropTypes.string,
  email: PropTypes.string,
  userimageurl: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  borrowed: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(styles)(Profile);
