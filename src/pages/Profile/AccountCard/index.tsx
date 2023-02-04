import s from './styles.module.scss';
import profile from '../../../images/profile.svg';
import settings from '../../../images/settings.svg';
import { LevelBar } from './LevelBar';

export function AccountCard() {
  return (
      <div className={s.wrapper}>
          <div className={s.accountInfo}>
              <div className={s.avatar}>
                  <img src={profile} alt="profile" />
              </div>
              <p className={s.username}>Bubilda</p>
              <button className={s.settings}>
                  <img src={settings} alt="settings"/>
              </button>
          </div>
          <LevelBar level={1} recieved={70} total={100} />
      </div>
  );
}
