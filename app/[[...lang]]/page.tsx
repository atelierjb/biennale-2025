import { notFound } from 'next/navigation'
import SitePage from '@/components/SitePage'
import { resolveLang } from '@/lib/i18n'

type Props = {
  params: Promise<{ lang?: string[] }>
}

export default async function Page({ params }: Props) {
  const lang = resolveLang((await params).lang)
  if (!lang) notFound()

  return <SitePage lang={lang} />
}
