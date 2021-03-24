/* eslint-disable no-unused-vars */
export interface Friend {
  id: string
  fullName: string
  username: string
  coverImageUrl: string
  profileImageUrl: string
  bio: string
}

export interface FriendProps {
  coverImageUrl: string;
  profileImageUrl: string;
  fullName: string;
  username: string;
  bio: string;
  id: string;
  following: boolean;
  handleAddFollower: (id: string) => void
  showDetailModal: () => void
  handleSelectFriend: (item:Friend) => void
}

export interface FriendDetailProps {
  coverImageUrl: string;
  profileImageUrl: string;
  fullName: string;
  username: string;
  bio: string;
  id: string;
  following: boolean;
  showModal: boolean;
  closeModal: () => void
}
