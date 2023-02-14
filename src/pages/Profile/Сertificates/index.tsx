import { CertificateCard } from './CertificateCard';
import s from './styles.module.scss';

interface Certificate {
  id: number;
  name: string;
};

const fakeMyCertificates: Certificate[] = [
  { id: 1, name: "Базовый казахский" },
  { id: 2, name: "Казахский для дедов" },
];

export function Certificates(){
  return(
    <>
      <div className={s.subInfoWrapper}>
          <h1 className={s.infoHeading}>Сертификаты</h1>
          <div className={s.cardWrapper}>
            {fakeMyCertificates.map(Certificate => (
                <CertificateCard
                key={Certificate.id}
                name={Certificate.name}
                />
            ))}
          </div>
      </div>
    </>
  )
}