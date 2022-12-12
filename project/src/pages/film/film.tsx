// Библиотеки
import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';

//Хуки
import { useAppSelector, useAppDispatch } from '../../hooks';

// Константы
import { ViewCardCount } from '../../const';
import { AuthorizationStatus } from '../../const';

// Компоненты
import Tabs from '../../components/tabs/tabs';
import CardList from '../../components/card-list/card-list';
import PageHeader from '../../components/page-header/page-header';
import LoadingScreen from '../loading-screen/loading-screen';

//Модули
import { setViewCardCount } from '../../store/film-data';
import { fetchFilmSimilarAction, fetchCommentAction, fetchFilmIdAction } from '../../store/api-actions';
import { getFilm, getComments, getAuthorizationStatus } from '../../store/selectors';

export default function Film(): JSX.Element {
  const { id } = useParams();
  const comments = useAppSelector(getComments);
  const film = useAppSelector(getFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(setViewCardCount(ViewCardCount.Similar));
  }, [id, dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmSimilarAction(id));
      dispatch(fetchCommentAction(id));
      dispatch(fetchFilmIdAction({ id, navigate }));
    }
  }, [id, dispatch, navigate]);

  if (!film || !id) {
    return <LoadingScreen />;
  }

  const addReviewButton = authorizationStatus === AuthorizationStatus.Auth
    ? (<Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>)
    : '';

  return (
    <React.StrictMode>
      <Helmet>
        <title>Подробнее о фильме</title>
      </Helmet>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {addReviewButton}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
            </div>

            <Tabs
              comments={comments}
            />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <CardList />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.StrictMode>
  );
}
