import { useTranslations } from 'next-intl';
import { AppConfig } from '@/utils/AppConfig';

export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="flex min-h-screen text-gray-700 antialiased">
      <aside className="w-60 border-r border-gray-300 p-6">
        <h1 className="text-3xl font-bold text-gray-900">{AppConfig.name}</h1>
        <h2 className="text-xl">{t('description')}</h2>

        <nav aria-label="Main navigation" className="mt-6">
          <ul className="space-y-4 text-xl">{props.leftNav}</ul>
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-8">{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          {`© Copyright ${new Date().getFullYear()} ${AppConfig.name}. `}
          {t.rich('made_with', {
            author: () => (
              <a
                href="https://creativedesignsguru.com"
                className="text-blue-700 hover:border-b-2 hover:border-blue-700"
              >
                CreativeDesignsGuru
              </a>
            ),
          })}
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </footer>
      </div>
    </div>
  );
};
