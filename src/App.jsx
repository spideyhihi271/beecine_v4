import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { register } from 'swiper/element/bundle';
import { DefaultLayout } from './layouts';
import { publicRoutes } from './routes';
import './App.scss';

function App() {
    // Register Swiper
    register();
    
    return (
        <>
            <Router>
                <>
                    <Routes>
                        {publicRoutes.map((route, idx) => {
                            // Check Page
                            const Page = route.component;
                            // Check layout
                            let Layout = DefaultLayout;
                            if (route.layout) Layout = route.layout;
                            // Logic here
                            return (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </>
            </Router>
        </>
    );
}

export default App;
