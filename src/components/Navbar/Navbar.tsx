import { useState, useEffect } from 'react';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import en from '@/locales/en.json';
import th from '@/locales/th.json';
import { IconLanguage } from "@tabler/icons-react";


// Initialize i18next
i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      th: { translation: th },
    },
    lng: 'th', // Default language
  });


export default function Navbar() {
    const [language, setLanguage] = useState("th");
    const { t, i18n } = useTranslation()
    useEffect(() => {
        setLanguage("th");
    }, []);
    
    const handleLanguageChange = (newLanguage:string) => {
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
      };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">{t('name_web')}</a>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <IconLanguage />
            </button>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52" about={language}
          >
            <li onClick={() => handleLanguageChange('th')}>
              <a>ภาษาไทย</a>
            </li>
            <li onClick={() => handleLanguageChange('en')}>
              <a>English</a>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
