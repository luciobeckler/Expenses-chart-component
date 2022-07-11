import logo from './images/logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import rectangle from './images/rectangle.png';

function App() {
  return (
    <div className="App h-100  justify-content-center align-items-center d-flex ">
      <div className=" d-flex flex-column h-50 p-0  align-items-center width33">
            <div className="row bgHeader w-100 h-25 d-flex p-3">
                  <div className="col-12 d-flex w-100">
                        <div className="d-flex flex-row justify-content-between w-100 align-items-center">
                              <div className="d-flex flex-column justify-content-center myBalance">
                                    <p className="m-0"> My balance</p>
                                    <h3 className="m-0"> $921.48</h3>
                              </div>
                              <img src ={logo} alt="" height="" className='h-75 w-25'/>
                        </div>
                  </div>
            </div>

            <div className="row d-flex flex-column  h-75 w-100 ">
                  <div className="col-12 d-flex flex-column h-100 w-100 bg-white borderRadius">
                        <h4 className="h-25 pt-4 color-darkbrown align-self-start">
                              Spending - Last 7 days
                        </h4>

                        <div className="d-flex h-75 w-100 flex-row borderGraphic">
                              <div className="d-flex flex-column align-items-center weekDays">
                                    <img src= {rectangle} height="70%" width="60%" alt=""/>
                                    <p>mon</p>
                              </div>

                              <div className="d-flex flex-column align-items-center weekDays">
                                    <img src= {rectangle} height="70%" width="60%" alt=""/>
                                    <p>tue</p>
                              </div>

                              <div className="d-flex flex-column align-items-center weekDays">
                                    <img src= {rectangle} height="70%" width="60%" alt=""/>
                                    <p>wed</p>
                              </div>

                              <div className="d-flex flex-column align-items-center weekDays">
                                    <img src= {rectangle} height="70%" width="60%" alt=""/>
                                    <p>thu</p>
                              </div>

                              <div className="d-flex flex-column align-items-center weekDays">
                                    <img src= {rectangle} height="70%" width="60%" alt=""/>
                                    <p>fri</p>
                              </div>

                              <div className="d-flex flex-column align-items-center weekDays">
                                    <img src= {rectangle} height="70%" width="60%" alt=""/>
                                    <p>sat</p>
                              </div>

                              <div className="d-flex flex-column align-items-center weekDays">
                                    <img src= {rectangle} height="70%" width="60%" alt=""/>
                                    <p>sun</p>
                              </div>
                        </div>

                        <section className="h-50 d-flex flex-row justify-content-between">
                              <div className="d-flex flex-column justify-content-center pt-3 pb-3">
                                    <p className="m-0 finalBalance">Total this month</p>
                                    <h2 className="m-0 color-darkbrown">$478.33</h2>
                              </div>
                              <div className="d-flex flex-column justify-content-center ">
                                    <p className="m-0 color-darkbrown"> +2.4%</p>
                                    <p className="m-0 finalBalance"> from last month</p>
                              </div>
                        </section>
                  </div>
            </div>


            <footer className="attribution mt-1">
                  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend
                        Mentor</a>.
                  Coded by <a href="#">Your Name Here</a>.
            </footer>
      </div>
    </div>
  );
}

export default App;
