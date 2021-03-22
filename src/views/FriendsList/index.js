import { useEffect, useState } from 'react';
import FriendCard from '../../components/FriendCard.js';
import useFriendList from '../../hooks/useFriendListHook';
import './styles.css';

const FriendsList = () => {
  const { data } = useFriendList();
  const [existingFollowers, setExistingFollowers] = useState([]);

  useEffect(() => {
    const followers = localStorage.getItem('FOLLOWERS');
    setExistingFollowers(followers ?? []);
  }, []);

  const handleAddFollower = (id) => {
    const newFollowers = existingFollowers.concat(id);
    localStorage.setItem('FOLLOWERS', newFollowers);
    window.location.reload();
  };

  return (
    <div className="page ">
      <div className="container w-75">
        <h4 className="pt-3 text-left">Friends List</h4>
        <div className="row justify-content-center">
          {data.map((item) => (
            <FriendCard
              profileImageUrl={item.profileImageUrl}
              coverImageUrl={item.coverImageUrl}
              fullName={item.fullName}
              username={item.username}
              bio={item.bio}
              handleAddFollower={handleAddFollower}
              id={item.id}
              following={existingFollowers?.includes(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
