import './App.css';
import Routing from './route/Routing';
import { Layout } from 'antd';
import NavBar from './components/NavBar/NavBar';

const { Header, Content } = Layout;

function App() {
    return (
        <div className="App">
            <Layout>
                <Header className="header">
                    <NavBar />
                </Header>
                <Content className="content">
                    <Routing />
                </Content>
            </Layout>
        </div>
    );
}

export default App;
