import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { ListItem } from '../../components/list-item';
import { SearchButton } from '../../components/search-button';
import { SearchInput } from '../../components/search-input';
import ThreeD from '../../assets/3d.jpg'
import './characters.scss'
export const Caharacters = () => {
    return ( 
      <div className='characters'>
         <Header/>
        <h2 className="characters__title">Characters<span className='characters__count'>(1369)</span></h2>
<div className="characters__field">
  <SearchInput placeholder='Search Characters by name'/>
  <SearchButton/>
</div>
        <div className="characters__items">
          <ListItem Image={ThreeD } title='Трехмерный человек' description='Трехмерный человек был героем 1950-х, появившемся благодаря слиянию двух братьев - Хэла и Чака Чандлеров, и последующем слиянии с Делроем Гарреттом Младшим.'/>
          <ListItem Image={ThreeD } title='Трехмерный человек' description='Трехмерный человек был героем 1950-х, появившемся благодаря слиянию двух братьев - Хэла и Чака Чандлеров, и последующем слиянии с Делроем Гарреттом Младшим.'/>
          <ListItem Image={ThreeD } title='Трехмерный человек' description='Трехмерный человек был героем 1950-х, появившемся благодаря слиянию двух братьев - Хэла и Чака Чандлеров, и последующем слиянии с Делроем Гарреттом Младшим.'/>
          <ListItem Image={ThreeD } title='Трехмерный человек' description='Трехмерный человек был героем 1950-х, появившемся благодаря слиянию двух братьев - Хэла и Чака Чандлеров, и последующем слиянии с Делроем Гарреттом Младшим.'/>
          <ListItem Image={ThreeD } title='Трехмерный человек' description='Трехмерный человек был героем 1950-х, появившемся благодаря слиянию двух братьев - Хэла и Чака Чандлеров, и последующем слиянии с Делроем Гарреттом Младшим.'/>
          <ListItem Image={ThreeD } title='Трехмерный человек' description='Трехмерный человек был героем 1950-х, появившемся благодаря слиянию двух братьев - Хэла и Чака Чандлеров, и последующем слиянии с Делроем Гарреттом Младшим.'/>
          <ListItem Image={ThreeD } title='Трехмерный человек' description='Трехмерный человек был героем 1950-х, появившемся благодаря слиянию двух братьев - Хэла и Чака Чандлеров, и последующем слиянии с Делроем Гарреттом Младшим.'/>
          <ListItem Image={ThreeD } title='Трехмерный человек' description='Трехмерный человек был героем 1950-х, появившемся благодаря слиянию двух братьев - Хэла и Чака Чандлеров, и последующем слиянии с Делроем Гарреттом Младшим.'/>
         
          <ListItem Image={ThreeD } title='Трехмерный человек' description='Трехмерный человек был героем 1950-х, появившемся благодаря слиянию двух братьев - Хэла и Чака Чандлеров, и последующем слиянии с Делроем Гарреттом Младшим.'/>
          <ListItem Image={ThreeD } title='Трехмерный человек' description='Трехмерный человек был героем 1950-х, появившемся благодаря слиянию двух братьев - Хэла и Чака Чандлеров, и последующем слиянии с Делроем Гарреттом Младшим.'/>
   
          <ListItem Image={ThreeD } title='Трехмерный человек' description='Трехмерный человек был героем 1950-х, появившемся благодаря слиянию двух братьев - Хэла и Чака Чандлеров, и последующем слиянии с Делроем Гарреттом Младшим.'/>
          <ListItem Image={ThreeD } title='Трехмерный человек' description='Трехмерный человек был героем 1950-х, появившемся благодаря слиянию двух братьев - Хэла и Чака Чандлеров, и последующем слиянии с Делроем Гарреттом Младшим.'/>
   
       
        </div>
       <Footer/>
      </div>
     );
}
 
