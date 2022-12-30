import Cards from './components/cards';
import Cover from './components/cover';
import Create from './components/createPost';
function App() {
  return (
    <div className='flex items-center flex-col bg-black min-h-[100vh] space-y-10'>
      <Cover />
      <Create />
      <Cards />
    </div>
  );
}

export default App;
