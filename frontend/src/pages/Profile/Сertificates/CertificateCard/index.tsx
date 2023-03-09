import s from './styles.module.scss';

interface Props {
  name: string;
}

export function CertificateCard({ name }: Props) {
  return (
    <div className={s.certificate}>
      {name}
    </div>
  )
}