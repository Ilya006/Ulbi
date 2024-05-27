import { Trans, useTranslation } from 'react-i18next';
import i18n from '~/shared/config/i18n';

const MainPage = () => {
  const { t, i18n } = useTranslation('translation', {keyPrefix: 'description', lng: 'en'});

  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang)
  }

  console.log(i18n.languages)

  return (
    <div>
      <button type="button" onClick={() => changeLanguage('ru')}>
          ru
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          en
        </button>

        <div>
          {t('part2')}
        </div>

      <Trans i18nKey="description.part1">
        hello
      </Trans>
    </div>
  )
}

export default MainPage;
