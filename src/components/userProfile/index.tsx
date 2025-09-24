import type { User } from "@/types/user";
import React from "react";

type UserProfileProps = {
  user: User;
};

function UserProfile({ user }: UserProfileProps) {
  const defaultAvatar = "https://dummyimage.com/100x100/ddd/000.png&text=KK";

  return (
    <div className="user-profile" style={{display: "flex", gap: "8px", alignItems: "center"}}>
      <img
        src={user.profileImage || defaultAvatar}
        alt={`${user.name}의 프로필`}
        className="profile-imgae"
        style={{ width: "60px", height: "60px", borderRadius: "50%" }}
      />
      <div>
        <h2 style={{margin: "0"}}>{user.name}</h2>
        <a href={`mailto:${user.email}`} className="email-link">
          {user.email}
        </a>
      </div>
    </div>
  );
}

export default React.memo(UserProfile);
