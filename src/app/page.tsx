import appCSS from '@/styles/app.module.css'
import styleCSS from '@/styles/style.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <ul>
        <li className={styleCSS['color']}><Link href='admin'>Admin</Link></li>
        <li className={appCSS['color']}><Link href='dashboard'>Dashboard</Link></li>
        <li className={styleCSS['color']}><Link href='users'>Users</Link></li>
      </ul>
    </>
  )
}
