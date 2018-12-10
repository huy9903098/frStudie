import React, { Component } from 'react';
import '../../../style/style.css';
import backbtn from "../../../png-elements/back-btn.png";
import thumb from "../../../png-elements/thumb-demo.png";

class Burnt extends Component {

    render() {
        return (
            <div>
                <div className="mini-nav">
                    <img
                        alt="back"
                        src={backbtn}
                        className="back-btn"
                    ></img>
                    <div className="title">calories burnt</div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 sport">
                            <img alt="thumb" src={thumb}></img>
                            <div className="sport-desc">
                                <p className="sport-name">running</p>
                                <div className="mins">
                                    <p className="min-text">Minutes</p>
                                    <form>
                                        <input className="square-input" type="number"/>
                                    </form>
                                    <div className="add-btn-short">
                                        <p>+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 sport">
                            <img alt="thumb" src={thumb}></img>
                            <div className="sport-desc">
                                <p className="sport-name">running</p>
                                <div className="mins">
                                    <p className="min-text">Minutes</p>
                                    <form>
                                        <input className="square-input" type="number"/>
                                    </form>
                                    <div className="add-btn-short">
                                        <p>+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 sport">
                            <img alt="thumb" src={thumb}></img>
                            <div className="sport-desc">
                                <p className="sport-name">running</p>
                                <div className="mins">
                                    <p className="min-text">Minutes</p>
                                    <form>
                                        <input className="square-input" type="number"/>
                                    </form>
                                    <div className="add-btn-short">
                                        <p>+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 sport">
                            <img alt="thumb" src={thumb}></img>
                            <div className="sport-desc">
                                <p className="sport-name">running</p>
                                <div className="mins">
                                    <p className="min-text">Minutes</p>
                                    <form>
                                        <input className="square-input" type="number"/>
                                    </form>
                                    <div className="add-btn-short">
                                        <p>+</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Burnt;
