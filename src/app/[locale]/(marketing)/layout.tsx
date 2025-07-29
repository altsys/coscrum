import { setRequestLocale } from 'next-intl/server';
import { SidebarLayout } from '@/components/SidebarLayout';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <SidebarLayout locale={locale}>
      {props.children}
    </SidebarLayout>
  );
}
