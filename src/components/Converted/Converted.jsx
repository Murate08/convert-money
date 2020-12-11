import React, { Component } from "react";
import './styles.css'





class Converter extends Component {
  state = {
    currencies: ["RUB", "EUR", "USD", "JPY"],
    base: "USD",
    amount: "",
    convertTo: "RUB",
    result: "",
    date: ""
  };

  handleCalculate = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null
      },
      this.calculate
    );
  };

  handleInput = (e) => {
    this.setState(
      {
        amount: e.target.value,
        result: null,
        date: null
      },
      this.calculate,
     
    );

    
  };
  submitHandler = (e) =>{
    e.preventDefault()
    console.log(this.state)
  }


  


  calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
      fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then((res) => res.json())
        .then((data) => {
          const date = data.date;
          const result = (data.rates[this.state.convertTo] * amount).toFixed(2);
          this.setState({
            result,
            date
          });
        });
    }
  };

  handleSwap = (e) => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    e.preventDefault();
    this.setState(
      {
        convertTo: base,
        base: convertTo,
        result: null
      },
      this.calculate
    );
  };

 
 
  
  render() {
 
    const { currencies, base, amount, convertTo, result, date } = this.state;
    return (
      <div className="container my-5">
        <div className="row ">
          <div className="col-lg-12 col-md-6 mx-auto" >
            <div className="card card-body"  id="converContent">
            <p><span>Cегодня</span> {amount === "" ? "" : date === null ? "" : date}</p>
              <h5>
                {amount} {base} эквивалентно
              </h5>
              <h2>
                {amount === ""
                  ? "0"
                  : result === null
                  ? "Calculating..."
                  : result}{" "}
                {convertTo}
              </h2>
              
              <div className="row">
                <div className="col-lg-10">
                  <form className="form-inline mb-4" onSubmit={this.submitHandler}>
                    <input
                      name="amount"
                      type="number"
                      value={amount}
                      defaultValue={amount}                  
                      onChange={this.handleInput}
                      className="form-control form-control-lg mx-3"
                    />
                   <select
                      name="base"
                      value={base}
                      onChange={this.handleCalculate}
                      className="form-control form-control-lg select"
                    >
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                      </select>
                  </form>

                  <form className="form-inline mb-4" onSubmit={this.submitHandler}>
                    <input
                      name="result"
                      disabled={true}
                      onChange={this.handleInput}
                      defaultValue={result}     
                      value={
                        amount === ""
                          ? "0"
                          : result === null
                          ? "Calculating..."
                          : result
                      }
                      className="form-control form-control-lg mx-3"
                    />
                    <select
                      name="convertTo"
                      value={convertTo}
                      onChange={this.handleSelect}
                      className="form-control form-control-lg  select"
                    >
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>
                  
                </div>
                
                

                <div className="col-lg-2 align-self-center tex-center btn">
                  <h1 onClick={this.handleSwap} className="">
                    &#8595;&#8593;
                  </h1>
                  
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Converter;
