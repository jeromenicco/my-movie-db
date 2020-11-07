import React from 'react';

const Avatar = ({ image, firstName, lastName }) => {
  const placeHolder = 'https://www.drupal.org/files/issues/default-avatar.png';
  return (
    <div className="div-container">
      <img
        className="div-element"
        src={image ? image : placeHolder}
        alt={firstName}
      />
      <h3 className="div-element">{`${firstName} ${lastName}`}</h3>
    </div>
  );
};

export default Avatar;
