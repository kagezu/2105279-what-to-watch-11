// Библиотеки
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';

// Типы
import { MainProps } from '../../types/film';

// Компоненты
import FormReview from '../../components/form-review/form-review';


export default function AddReview(props: MainProps): JSX.Element {
  const { id } = useParams();
  const filmId = Number(id);
  const film = props.films.find((value) => (value.id === filmId));
  if (!film) {
    window.location.pathname = 'not found';
  }
  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>Добавление в просмотр</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="film-page.html" className="breadcrumbs__link">{film?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="#" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to="#" className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <FormReview />
      </div>

    </section>
  );
}
