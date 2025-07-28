import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import cls from './kinopoiskSearch.module.scss'

interface Movie {
  id: number;
  name: string;
  year: string;
  rating: {[key: string]: number};
}

const KinopoiskSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const API_KEY = import.meta.env.VITE_KINOPOISK_X_API_KEY;

  // Закрытие dropdown при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Запрос к API при изменении query
  useEffect(() => {
    const searchFilms = async () => {
      if (query.length < 3) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.kinopoisk.dev/v1.4/movie/search?query=${query}`,
          {
            headers: {
              'X-API-KEY': API_KEY,
              accept: 'application/json',
            },
          }
        );

        setResults(response.data.docs.slice(0, 5)); // Первые 5 результатов
        
      } catch (err) {
        setError('Ошибка при загрузке данных');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchFilms, 500);
    return () => clearTimeout(debounceTimer);
  }, [query, API_KEY]);

  return (
    <div className={cls.searchModule}  ref={dropdownRef}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск фильмов..."
        className={cls.searchInput}
       
      />

      {/* Выпадающий список */}
      {results.length > 0 && (
        <div className={cls.dropdownList}>
          {isLoading ? (
            <div className={cls.isLoading}>Загрузка...</div>
          ) : error ? (
            <div className={cls.error}>{error}</div>
          ) : (
            <ul>
              {results.map((movie) => (
                <li
                  key={movie.id}
                  className={cls.filmList}
                  onClick={() => {
                    setQuery(movie.name);
                    setResults([]);
                  }}
                >
                  <div className={cls.filmName}>{movie.name}</div>
                  <div className={cls.yearRating}>
                    {movie.year}, Рейтинг: {movie.rating.kp}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default KinopoiskSearch;