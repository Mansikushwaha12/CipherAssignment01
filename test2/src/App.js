import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">

    <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-H5h9gCaPGNiFmI-Ff1IjXctOshgY9K8cvA&usqp=CAU"
    title="Simple Ristto" description="The Only Basic Risotto Recipe You’ll Ever Need
    basic risotto recipe
    TERESA SABGA
    Active Time
    25 Mins
    Yield
    Serves 4
    By Jennifer Kushnier
    There’s a reason so many restaurants put risotto on their menus: It’s not a dish most people attempt to cook at home. Risotto has an earned reputation for being fussy. This easy risotto recipe requires a attention and stirring, but at its core, it’s really just rice and broth. And when those two simple ingredients come together, they create a creamy, almost magical dish that’s well worth the effort."
    />

    <Card img="https://img.freepik.com/free-photo/bowl-fresh-salad-marble-background-high-quality-photo_114579-78675.jpg"
    title="Everyday Salad"  description="Salad recipes are my favorite way to showcase vibrant, in-season produce – fruits and veggies that are so good on their own that you don’t need to do much to make them into a delicious meal"
    />
    </div>
  );
}

export default App;
