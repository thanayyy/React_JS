import Contact from "./assets/Contact";
import Counter from "./assets/Counter";
import Hello from "./assets/Hello";
function App() {
  console.log('App Malan')
  const helloData = [
    { name: 'Thanayut',message: 'morning'},
    {name: 'Thanayut',message: 'Afternoon'},
    {name: 'Thanayut',message: 'evening'}
  ]
  return (
    <div className='App'>
      <Counter/>
      {helloData.map((data,index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}
      <Contact email = "thanayyy@gmail.com" phone = "0990959009" />
      </div>
  );
      }


export default App;
