import { setRequestLocale } from 'next-intl/server';
import { AuthenticatedSidebar } from '@/components/AuthenticatedSidebar';

export default async function DashboardLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <AuthenticatedSidebar locale={locale}>
      {props.children}
    </AuthenticatedSidebar>
  );
}
