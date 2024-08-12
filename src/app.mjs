import List from "./components/list.mjs";

const cores = ['Azul', 'Branco', 'Verde'];

const App = () => {
    return (
        <div>
            <h2>Hello</h2>;
            <List data={cores}/>
        </div>
    );
};

export default App;