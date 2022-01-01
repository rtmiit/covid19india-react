import {AlertIcon} from '@primer/octicons-react';
import {useTranslation} from 'react-i18next';

function Banner(props) {
  const {t} = useTranslation();

  return (
    <div className="Banner fadeInDown" style={{animationDelay: '0.4s'}}>
      <div className="wrapper">
        <div className="alert-icon">
          <AlertIcon size={16} />
        </div>
        <div className="content">
          {t('This is a beta version')}
        </div>
      </div>
    </div>
  );
}

export default Banner;
