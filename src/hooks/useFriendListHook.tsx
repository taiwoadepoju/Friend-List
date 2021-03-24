/* eslint-disable @typescript-eslint/no-explicit-any */
import data from './data.json';

// interface Friend {
//   id: string
//   fullName: string
//   username: string
//   coverImageUrl: string
//   profileImageUrl: string
//   bio: string
// }

const useFriendListHook = ():any => ({
  data,
});

export default useFriendListHook;
