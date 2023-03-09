import s from './styles.module.scss';

export function Month(){
  return(
    <>
    <div className={s.wrapper}>
      <h2>Март</h2>
      <div className={s.infoWrapper}>
        <div className={s.week}>
          <div className={s.day}>1</div>
          <div className={s.day}>2</div>
          <div className={s.day}>3</div>
          <div className={s.day}>4</div>
          <div className={s.day}>5</div>
          <div className={s.day}>6</div>
          <div className={s.day}>7</div>
        </div>
        <div className={s.week}>
          <div className={s.day}>1</div>
          <div className={s.day}>2</div>
          <div className={s.day}>3</div>
          <div className={s.day}>4</div>
          <div className={s.day}>5</div>
          <div className={s.day}>6</div>
          <div className={s.day}>7</div>
        </div>
        <div className={s.week}>
          <div className={s.day}>1</div>
          <div className={s.day}>2</div>
          <div className={s.day}>3</div>
          <div className={s.day}>4</div>
          <div className={s.day}>5</div>
          <div className={s.day}>6</div>
          <div className={s.day}>7</div>
        </div>
        <div className={s.week}>
          <div className={s.day}>1</div>
          <div className={s.day}>2</div>
          <div className={s.day}>3</div>
          <div className={s.day}>4</div>
          <div className={s.day}>5</div>
          <div className={s.day}>6</div>
          <div className={s.day}>7</div>
        </div>
        <div className={s.week}>
          <div className={s.day}>1</div>
          <div className={s.day}>2</div>
          <div className={s.day}>3</div>
        </div>
      </div>
    </div>
    </>
  )
}