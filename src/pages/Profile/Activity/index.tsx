import s from './styles.module.scss';
import { Month } from './Month';

export function Activity(){
  return(
    <>
      <div className={s.subInfoWrapper}>
        <h1 className={s.infoHeading}>Активность</h1>
        <div className={s.activityWrapper}>
        <div className={s.week}>
          <div className={s.day}>Пн</div>
          <div className={s.day}>Вт</div>
          <div className={s.day}>Ср</div>
          <div className={s.day}>Чт</div>
          <div className={s.day}>Пт</div>
          <div className={s.day}>Сб</div>
          <div className={s.day}>Вс</div>
        </div>
          <Month/>
          <Month/>
          <Month/>
        </div>
      </div>
    </>
  )
}