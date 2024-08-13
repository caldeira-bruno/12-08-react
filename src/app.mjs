import List from "./components/list.mjs";
import Table from "./components/table.mjs"
import { useRef, useState } from 'react';
import Select from "./components/select.mjs";

const cores = ['Azul', 'Branco', 'Verde'];
const titles = ['Id', 'Nome', 'Idade']
const clients = [
    {id: 1, nome: "Lucas", idade: 22},
    {id: 2, nome: "Ruan", idade: 28},
    {id: 3, nome: "Matt", idade: 24},
    {id: 4, nome: "Raul", idade: 23},
];

const App = () => {
    const [nome, setNome] = useState('');
    const [felinos, setFelinos] = useState(['Onça', 'Gato', 'Leao']);

    const iptFelino = useRef(null);

    function clique(e) {
        setNome("Novo nome");
    }
    function change(e) {
        setNome(e.target.value);
    }
    function manipulaFormFelinos(e) {
        e.preventDefault();
        setFelinos([...felinos, iptFelino.current.value]);
    }
    return (
        <div>
            <div>
            <h2>Hello {nome}</h2>
            <input onChange={change}/>
            <button onClick={clique}>Cliques</button>
            <div>
            <h3>Cores:</h3>
            <List data={cores}/>
            </div>
            </div>
            <div>
            <h3>Felinos</h3>
            <form onSubmit={manipulaFormFelinos}>
                <label>Novo</label>
                <input ref={iptFelino}/>
                <button>+</button>
            </form>
            <List data={felinos}/>
            </div>
            <div>
            <h3>Tabela</h3>
            <Table titles={titles} data={clients}/>
            </div>
            <div>
                <h3>Municipios</h3>
                <Select/>
            </div>
        </div>
    );
};

export default App;