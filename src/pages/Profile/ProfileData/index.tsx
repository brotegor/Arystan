import s from './styles.module.scss';

interface Props {
  image: string;
  name: string;
}

export function ProfileData({ name, image }: Props) {
  return (
    <>
      <div className={s.wrapper}>
        <img className={s.profileImage} src={image} alt="" />
        <h1 className={s.name}> {name} </h1>
      </div>
    </>
  )
}