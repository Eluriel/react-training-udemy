import Header from './components/Header';
import Meals from './components/Meals';
import { useFetch } from './hooks/useFetch';
import { fetchAvailableMeals } from './http';

function App() {
  const {
    isFetching,
    error,
    fetchedData: availableMeals,
    setFetchedData: setAvailableMeals,
  } = useFetch(fetchAvailableMeals, []);

  return (
    <>
      <Header />
      <main>
        <Meals meals={availableMeals} />
      </main>
    </>
  );
}

export default App;
