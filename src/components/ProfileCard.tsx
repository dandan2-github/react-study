// src/components/ProfileCard.tsx

import React from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  name: string;
  image: string;
  bio: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, image, bio }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name}의 프로필`} className="profile-image" />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;
