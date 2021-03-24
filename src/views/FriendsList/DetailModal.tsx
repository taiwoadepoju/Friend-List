import { Modal } from 'react-bootstrap';
import { FriendDetailProps } from '../../interfaces';

const DetailModal = (props: FriendDetailProps):JSX.Element => {
  const {
    showModal, closeModal, coverImageUrl, profileImageUrl, fullName, username, bio,
  } = props;
  return (
    <Modal
      onHide={closeModal}
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <div className="row">
          <img className="detail-cover-image img-fluid" src={coverImageUrl} alt="cover" />
        </div>
        <div className="row profile-image-section">
          <img className="profile-image img-fluid" src={profileImageUrl} alt="profile" />
        </div>
        <p className="pt-5">
          {`${fullName} `}
          <small>
            @
            {username}
          </small>
        </p>
        <div>
          <p>{bio}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DetailModal;
