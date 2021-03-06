/* eslint-disable no-unused-vars */
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.css';
import { FriendProps } from '../../interfaces';

const FriendCard = (props: FriendProps):JSX.Element => {
  const {
    id,
    coverImageUrl,
    profileImageUrl,
    fullName,
    username,
    bio,
    following,
    handleAddFollower,
    handleSelectFriend,
  } = props;

  return (
    <div className="col-md-6 col-sm-12 mt-4">
      <Card className="friend-card">
        <Card.Img className="cover-image" variant="top" src={coverImageUrl} />
        <div className="row profile-image-section">
          <img className="profile-image img-fluid" src={profileImageUrl} alt="profile" />
        </div>
        <Card.Body>
          <div className="row">
            <div className="col-sm-7 offset-sm-2 col-xs-12">
              <h4 className="full-name text-sm-left">
                <Button
                  className="fullname-btn"
                  variant="light"
                  onClick={() => handleSelectFriend({
                    coverImageUrl,
                    profileImageUrl,
                    fullName,
                    username,
                    id,
                    bio,
                  })}
                >
                  {fullName}
                </Button>
              </h4>
              <p className="user-name text-sm-left">
                @
                {username}
              </p>
            </div>
            <div className="col-sm-3 col-xs-12">
              <Button
                className="btn-sm follow-btn"
                variant={following ? 'primary' : 'outline-primary'}
                onClick={() => handleAddFollower(id)}
              >
                {following ? 'Following' : 'Follow'}
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10 offset-sm-2">
              <p className="text-left">{bio}</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

FriendCard.propTypes = {
  coverImageUrl: PropTypes.string.isRequired,
  profileImageUrl: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  following: PropTypes.bool.isRequired,
  handleAddFollower: PropTypes.func.isRequired,
  id: PropTypes.oneOf(['String', 'Number']).isRequired,
};

export default FriendCard;
