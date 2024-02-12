import { Link, Outlet } from 'react-router-dom'
import { getAllIdeasRoute, getNewIdeaRoute, getSignUpRoute } from '../../lib/routes'
import css from './index.module.scss'

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>Assistant</div>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={getSignUpRoute()}>
              Sign Up
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to={getAllIdeasRoute()}>
              All Ideas
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to={getNewIdeaRoute()}>
              Create Ideas
            </Link>
          </li>
        </ul>
      </div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  )
}