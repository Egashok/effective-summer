import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { comicsMock } from '../../store/mockInit';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { charactersArray } from '../../store/mockInit';
import { useEffect } from 'react';
import './character-details.scss';

type details = {
  title: string;
  description: string;
  Image: string;
};
export const CharacterDetails = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState<details | undefined>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setCharacter(charactersArray[Number(id)]);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="character-details">
      <Header />
      <div className="character-details__wrapper">
        <img src={character?.Image} alt="" className="character-details__image" />
        <div className="character-details__content">
          <div className="character-details__info">
            <h3 className="character-details__title">{character?.title}</h3>
            <p className="character-details__description">{character?.description}</p>
          </div>
          <div className="character-details__comics">
            <h5>Comics</h5>
            {comicsMock.map((comics) => (
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
