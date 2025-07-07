import Navbar from "../Components/Navbar";

function HomePage(){
    return(
        <div className="home-page bg-white container-fluid overflow-hidden">
            <Navbar/>
            <div className="container-fluid px-0">
                <div className="row flex col md row">
                    <div className="col-md-6 home-text-panel">
                        <div className="home content">
                            <h1>
                                <span className="tex-success">Register</span>
                            </h1>
                            <p style:color="blue">Wonderful class</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="position-relative h-100">
                    <div className="maps-title position-absolute stop-0 start-0 m-3 p-2 bg-white rounded shadow"
                    style={{ zIndex:10}}>
                        <div className="map-label absolute top-4 left-1/2 transform -translate-x-0 md:left-auto md:right-auto-x-0">
                        <span className="bg-white text-black px-4 py-2 rounded-lg shadow-md text-sm heavybold">Read more</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default HomePage;
