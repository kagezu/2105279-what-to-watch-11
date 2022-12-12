// Библиотеки
import { SyntheticEvent } from 'react';

//Хуки
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getAuthorizationStatus } from '../../store/selectors';

// Константы
import { AuthorizationStatus } from '../../const';

//Модули
import { logoutAction } from '../../store/api-actions';

export default function PageHeader({ favorite }: { favorite: number | null }) {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleSignOut = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  const userBlock = authorizationStatus === AuthorizationStatus.Auth
    ? (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <a
            onClick={handleSignOut}
            href="/"
            className="user-block__link"
          >Sign out
          </a>
        </li>
      </ul>
    )
    : (
      <div className="user-block">
        <a href="login" className="user-block__link">Sign in</a>
      </div>
    );

  return (
    <header className="page-header">
      <div className="logo">
        <a href="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {
        favorite !== null
          ? (<h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favorite}</span></h1>)
          : (<div />)
      }

      {userBlock}

    </header>
  );
}
