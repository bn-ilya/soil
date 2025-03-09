import {BrowserRouter, Route, Routes} from 'react-router';
import {Main} from './pages/Main';
import {Resources} from './pages/Resources';

// eslint-disable-next-line complexity
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/resources" element={<Resources />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
