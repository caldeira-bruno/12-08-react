import List from "./components/list.mjs";
import Table from "./components/table.mjs"

const cores = ['Azul', 'Branco', 'Verde'];
const titles = ['Id', 'Nome', 'Idade']
const clients = [
    {id: 1, nome: "Lucas", idade: 22},
    {id: 2, nome: "Ruan", idade: 28},
    {id: 3, nome: "Matt", idade: 24},
    {id: 4, nome: "Raul", idade: 23},
];

const App = () => {
    return (
        <div>
            <h2>Hello</h2>
            <h3>Cores:</h3>
            <List data={cores}/>
            <h3>Felinos</h3>
            <List data={['Onça', 'Gato', 'Leao']}/>
            <h3>Tabela</h3>
            <Table titles={titles} data={clients}/>
        </div>
    );
};

export default App;