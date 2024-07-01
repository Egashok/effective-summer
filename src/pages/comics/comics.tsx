import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { ListItem } from '../../components/list-item';
import { SearchButton } from '../../components/search-button';
import { SearchInput } from '../../components/search-input';
import { comicsArray } from '../../store/mockInit';
import './comics.scss';
export const Comics = () => {
  return (
    <div className="comics">
      <Header />
      <h2 className="comics__title">
        Comics<span className="comics__count">(13000)</span>
      </h2>
      <div className="comics__field">
        <SearchInput placeholder="Search comics by name" />
        <SearchButton />
      </div>
      <div className="comics__items">
        {comicsArray.map((c) => (
          <ListItem
            id={c.id}
            Image={c.Image}
            entity="comics"
            title={c.title}
            description={c.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
