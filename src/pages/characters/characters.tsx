import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { ListItem } from '../../components/list-item';
import { SearchButton } from '../../components/search-button';
import { SearchInput } from '../../components/search-input';

import { charactersArray } from '../../store/mockInit';
import './characters.scss';
export const Caharacters = () => {
  return (
    <div className="characters">
      <Header />
      <h2 className="characters__title">
        Characters<span className="characters__count">(1369)</span>
      </h2>
      <div className="characters__field">
        <SearchInput placeholder="Search Characters by name" />
        <SearchButton />
      </div>
      <div className="characters__items">
        {charactersArray.map((c) => (
          <ListItem
            id={c.id}
            Image={c.Image}
            title={c.title}
            entity="characters"
            description={c.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
