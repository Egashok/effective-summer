import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { characterMock } from '../../store/mockInit';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { comicsArray } from '../../store/mockInit';
import { useEffect } from 'react';
import './comics-details.scss';

type details = {
  title: string;
  description: string;
  Image: string;
};
export const ComicsDetails = () => {
  const { id } = useParams();

  const [comics, setComics] = useState<details | undefined>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setComics(comicsArray[Number(id)]);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="comics-details">
      <Header />
      <div className="comics-details__wrapper">
        <img src={comics?.Image} alt="" className="comics-details__image" />
        <div className="character-details__content">
          <div className="comics-details__info">
            <h3 className="comics-details__title">{comics?.title}</h3>
            <p className="comics-details__description">{comics?.description}</p>
          </div>
          <div className="comics-details__comics">
            <h5>Comics</h5>
            {characterMock.map((comics) => (
              <a target="blank" href={comics.link}>
                {comics.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
