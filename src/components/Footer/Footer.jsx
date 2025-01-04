import { useTranslation } from 'react-i18next';
import "./Footer.css"

export default function Footer({name, linkedinProfile}) {
  const { t } = useTranslation();

  return (
    <footer>
      <span className='footer-msg'>{t('footer-msg')} <a href={"https://www.linkedin.com/in/"+linkedinProfile} target="_blank">{name}</a></span>
    </footer>
  )
}