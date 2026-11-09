import { useEffect } from 'react'

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title === 'ESG Learning Hub' ? title : `${title} · ESG Learning Hub`
  }, [title])
}
