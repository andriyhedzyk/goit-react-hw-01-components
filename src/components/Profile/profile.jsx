import PropTypes from 'prop-types'
import s from './profile.module.css'

import defaultImage from './defaultImage.png'

export const Profile = ({
  username,
  tag,
  location,
  img = defaultImage,
  stats
}) => {
  // const { followers, views, likes } = stats;
    return (
      <div className={s.profile}>
        <div className={s.description}>
          <div className={s.avatar}><img
            src={img}
            alt={username}
            className={s.img}
          />
            </div>
          <p className={s.name}>{username}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
          <li>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
}
