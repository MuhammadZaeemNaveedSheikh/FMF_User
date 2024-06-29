import Avatar from "@mui/material/Avatar";

import NotificationIcon from "/Icons/notifications-icon.svg";
import NewUserIcon from "/Images/new-user-icon.png";
import FavoriteIcon from "/Images/favorite-icon.png";
import CommentIcon from "/Images/comment-icon.png"; // Fixed typo here
import LikeIcon from "/Images/like-icon.png";
import CustomerIcon from "/Icons/customer-icon.svg";
import InviteIcon from "/Icons/invite-icon.svg";

const RightPanel = () => {
  return (
    <div className="bg-[#151322] text-white min-h-screen p-5 xl:p-6 rounded-2xl">
      {/* Header */}
      <div className="flex items-center space-x-2 cursor-pointer mb-10">
        <img src={NotificationIcon} alt="Notifications" className="h-6 w-6" />
        <span className="font-[Inter] text-[19.5px]">Notifications &gt;</span>
      </div>

      {/* Notification Items */}
      <div className="space-y-4 font-[Inter] text-[13.5px] flex flex-row items-center flex-wrap gap-6 lg:flex-col lg:gap-0 lg:flex-nowrap">
        <div className="flex items-start space-x-2 cursor-pointer justify-center lg:items-center lg:justify-start ">
          <img src={NewUserIcon} alt="New User" className="h-12 w-12" />
          <div className="flex flex-col">
            <span>New User</span>
            <span className="text-[#606573]">people Purchased the package</span>
            <span className="text-[#606573]">March 6, 2020</span>
          </div>
        </div>
        <div className="flex items-start space-x-2 cursor-pointer justify-center lg:items-center lg:justify-start ">
          <img src={FavoriteIcon} alt="Favorited" className="h-12 w-12" />
          <div className="flex flex-col">
            <span>Favorited</span>
            <span className="text-[#606573]">people have Liked the trade</span>
            <span className="text-[#606573]">March 16, 2021</span>
          </div>
        </div>
        <div className="flex items-start space-x-2 cursor-pointer justify-center lg:items-center lg:justify-start ">
          <img src={CommentIcon} alt="Comment" className="h-12 w-12" />
          <div className="flex flex-col">
            <span>Comment</span>
            <span className="text-[#606573]">
              You have a comment on the trade
            </span>
            <span className="text-[#606573]">April 12, 2021</span>
          </div>
        </div>
        <div className="flex items-start space-x-2 cursor-pointer justify-center lg:items-center lg:justify-start ">
          <img src={LikeIcon} alt="Likes" className="h-12 w-12" />
          <div className="flex flex-col">
            <span>Likes</span>
            <span className="text-[#606573]">people have Liked the trade</span>
            <span className="text-[#606573]">April 14, 2021</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-gray-700"></div>

      {/* Customer List */}
      <div className="mb-10">
        <div className="mb-10 flex items-center space-x-2 cursor-pointer justify-center lg:justify-start ">
          <img src={CustomerIcon} alt="Customer List" className="h-6 w-6" />
          <span className="font-[Inter] text-[19.5px]">Customer List &gt;</span>
        </div>
        <div className="space-y-4 font-[Inter] text-[13.5px]">
          <div className="flex items-center space-x-2 cursor-pointer justify-center lg:justify-start ">
            <Avatar
              //   src="/path/to/avatar.png"
              alt="avatar"
              sx={{
                width: 40,
                height: 40,
                borderRadius: 4,
                marginRight: 1,
              }}
            />
            <div className="flex flex-col">
              <span>Marta Adams</span>
              <span className="text-[#606573]">MartaAaa224@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer justify-center lg:justify-start ">
            <Avatar
              //   src="/path/to/avatar.png"
              alt="avatar"
              sx={{
                width: 40,
                height: 40,
                borderRadius: 4,
                marginRight: 1,
              }}
            />
            <div className="flex flex-col">
              <span>Abdula Ibn Hatab</span>
              <span className="text-[#606573]">Abdulakrasava@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Invite Section */}
      <div className="flex gap-2 flex-col items-start justify-center  bg-[#0B0919] p-4 rounded-lg">
        <img src={InviteIcon} alt="Invite" className="h-12 w-12" />
        <span className="font-[Inter] text-[19.5px]">Invite New Member</span>
        <span className="font-[Inter] text-[#7EA8FB] text-[13.5px]">
          Refer a newseller to usandearn $100
        </span>
        <button className="bg-[#5B1CD4] px-3 py-4 rounded-[15.5px] w-full text-sm font-[Inter] text-[13.5px]">
          Invite Now
        </button>
      </div>
    </div>
  );
};

export default RightPanel;
