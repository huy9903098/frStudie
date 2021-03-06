import React, { Component } from "react";
import "../../../style/style.css";
import backbtn from "../../../png-elements/back-btn.png";
import { Link } from "react-router-dom";
import { getCurrentFood } from "./../../../actions/foodActions";
import {
  createProgress,
  getCurrentProgress
} from "./../../../actions/progressActions";
import { connect } from "react-redux";
import Spinner from "../Spinner";

class Consumed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      number: 0
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getCurrentFood();
    this.props.getCurrentProgress();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.number);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  addConsumed(kcal) {
    let number = 0;
    if (this.props.progress.progress.consumed) {
      number = this.props.progress.progress.consumed;
    }
    const progressData = {
      consumed: number + kcal
    };

    this.props.createProgress(progressData, this.props.history);
  }

  render() {
    const { food, loading } = this.props.food;
    const { filterName } = this.state;
    let foodContent;

    if (food === null || loading) {
      foodContent = <Spinner />;
    } else {
      if (Object.keys(food).length > 0) {
        if (filterName) {
          foodContent = food.map(item => (
            <div key={item._id}>
              {item.name === filterName ? (
                <div>
                  <div className="food-search-result">
                    {/*food search result*/}
                    <div className="food-name">
                      <div className="food-name-case" />
                      <h2>{item.name}</h2>
                      <div className="food-name-case" />
                    </div>
                    <div className="quantity-serve-add">
                      <div className="quantity att-container">
                        <p className="food-att">Quantity</p>

                        <input type="number" name="number" className="square-input" value={this.state.number}
                          onChange={this.onChange} />
                      </div>
                      <div className="serve att-container">
                        <p className="food-att">Serving Size</p>
                        <select>
                          <option value="100 gr">100 gr</option>
                          <option value="1 cup">1 cup</option>
                          <option value="1 fl oz">1 fl oz</option>
                        </select>
                      </div>
                      <button
                        className="add-btn"
                        onClick={this.addConsumed.bind(this, item.kcal)}
                      >
                        add
                      </button>
                    </div>
                    <div className="att-line">
                      <div className="att-wrap">
                        <p className="food-att-light">Kcal</p>
                        <div className="att-num">
                          <p>{item.kcal}</p>
                        </div>
                      </div>
                      <div className="att-wrap">
                        <p className="food-att-light">Fat</p>
                        <div className="att-num">
                          <p>{item.fat}</p>
                        </div>
                      </div>
                      <div className="att-wrap">
                        <p className="food-att-light">Protein</p>
                        <div className="att-num">
                          <p>{item.protein}</p>
                        </div>
                      </div>
                    </div>
                    <div className="att-line">
                      <div className="att-wrap">
                        <p className="food-att-light">Carbs</p>
                        <div className="att-num">
                          <p>{item.carbs}</p>
                        </div>
                      </div>
                      <div className="att-wrap">
                        <p className="food-att-light">Fiber</p>
                        <div className="att-num">
                          <p>{item.fiber}</p>
                        </div>
                      </div>
                      <div className="att-wrap">
                        <p className="food-att-light">Sugar</p>
                        <div className="att-num">
                          <p>{item.sugar}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ));
        } else {
          foodContent = food.map(item => (
            <div key={item._id}>
              <div className="food-search-result">
                {/*food search result*/}
                <div className="food-name">
                  <div className="food-name-case" />
                  <h2>{item.name}</h2>
                  <div className="food-name-case" />
                </div>
                <div className="quantity-serve-add">
                  <div className="quantity att-container">
                    <p className="food-att">Quantity</p>

                    <input type="number" className="square-input" />
                  </div>
                  <div className="serve att-container">
                    <p className="food-att">Serving Size</p>
                    <select>
                      <option value="100 gr">100 gr</option>
                      <option value="1 cup">1 cup</option>
                      <option value="1 fl oz">1 fl oz</option>
                    </select>
                  </div>
                  <button
                    className="add-btn"
                    onClick={this.addConsumed.bind(this, item.kcal)}
                  >
                    add
                  </button>
                </div>
                <div className="att-line">
                  <div className="att-wrap">
                    <p className="food-att-light">Kcal</p>
                    <div className="att-num">
                      <p>{item.kcal}</p>
                    </div>
                  </div>
                  <div className="att-wrap">
                    <p className="food-att-light">Fat</p>
                    <div className="att-num">
                      <p>{item.fat}</p>
                    </div>
                  </div>
                  <div className="att-wrap">
                    <p className="food-att-light">Protein</p>
                    <div className="att-num">
                      <p>{item.protein}</p>
                    </div>
                  </div>
                </div>
                <div className="att-line">
                  <div className="att-wrap">
                    <p className="food-att-light">Carbs</p>
                    <div className="att-num">
                      <p>{item.carbs}</p>
                    </div>
                  </div>
                  <div className="att-wrap">
                    <p className="food-att-light">Fiber</p>
                    <div className="att-num">
                      <p>{item.fiber}</p>
                    </div>
                  </div>
                  <div className="att-wrap">
                    <p className="food-att-light">Sugar</p>
                    <div className="att-num">
                      <p>{item.sugar}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ));
        }
      }
    }
    return (
      <div>
        <div className="mini-nav">
          <Link to="/layout/tracking">
            <img alt="back" src={backbtn} className="back-btn" />
          </Link>
          <div className="title">calories consumed</div>
        </div>
        <div>
          <form className="food-search" onSubmit={this.onSubmit}>
            <input
              type="text"
              name="filterName"
              placeholder="SEARCH FOR FOOD"
              value={this.state.filterName}
              onChange={this.onChange}
            />
          </form>
          {foodContent}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  food: state.food,
  progress: state.progress
});

export default connect(
  mapStateToProps,
  { getCurrentFood, createProgress, getCurrentProgress }
)(Consumed);
