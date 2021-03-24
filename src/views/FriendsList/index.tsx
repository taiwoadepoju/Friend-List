/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import FriendCard from '../../components/FriendCard/index';
import useFriendList from '../../hooks/useFriendListHook';
import './styles.css';
import { FriendProps, Friend } from '../../interfaces';
import DetailModal from './DetailModal';

const FriendsList = ():JSX.Element => {
  const { data } = useFriendList();
  const [existingFollowers, setExistingFollowers] = useState<any>([]);
  const [selectedFriend, setSelectedFriend] = useState<Friend>({
    id: '', fullName: '', username: '', profileImageUrl: '', coverImageUrl: '', bio: '',
  });
  const [showDetailModal, setSHowDetailModal] = useState<boolean>(false);

  useEffect(() => {
    const followers = localStorage.getItem('FOLLOWERS');
    setExistingFollowers(followers ?? []);
  }, []);

  const handleAddFollower = (id:string) => {
    const newFollowers = existingFollowers.concat(id);
    if (existingFollowers?.includes(id)) {
      localStorage.setItem('FOLLOWERS', existingFollowers.split(id).join(''));
    } else {
      localStorage.setItem('FOLLOWERS', newFollowers);
    }
    window.location.reload();
  };

  const handleSelectFriend = (item:Friend) => {
    setSelectedFriend(item);
    setSHowDetailModal(true);
  };

  return (
    <div className="page ">
      <DetailModal
        following={false}
        showModal={showDetailModal}
        closeModal={() => setSHowDetailModal(false)}
        {...selectedFriend}
      />
      <div className="container w-75">
        <h4 className="pt-3 text-left">Friends List</h4>
        <div className="row justify-content-center">
          {data.map((item: FriendProps) => (
            <FriendCard
              key={item.id}
              showDetailModal={() => setSHowDetailModal(false)}
              profileImageUrl={item.profileImageUrl}
              coverImageUrl={item.coverImageUrl}
              fullName={item.fullName}
              username={item.username}
              bio={item.bio}
              handleAddFollower={handleAddFollower}
              handleSelectFriend={handleSelectFriend}
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
