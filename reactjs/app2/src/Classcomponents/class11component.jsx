import { Component } from "react";

class Studentcomp extends Component {
  constructor() {
    super();
    this.state = {
      ShowImage:true,
      string: "HIIIIIIIIIIIIIIII",
      student: {
        fname: "naku",
        lname: "telidhu",
      },
      array: ["arry1", "arry2"],
      image: [
        "https://th.bing.com/th/id/OIP.SwNcpUFOE_c2_nIQeb_LLAHaNN?w=187&h=333&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.WGQ1Kb9sm6w7m14vnal-IQHaKo?w=201&h=289&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.iWC2JV5Lf8vwTV8d65OZrgHaOU?w=179&h=347&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.u6O3z-rUxi0MR0CYMhQgCwHaKL?w=201&h=276&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      ],
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.string}</h2>
        <hr />
        <ul>
          {Object.values(this.state.student).map((val, i) => {
            return <li key={i}>{val}</li>;
          })}
        </ul>
        <hr />
        <ul>
          {this.state.array.map((val, i) => (
            <li key={i}>{val}</li>
          ))}
        </ul>
        <div>
        {this.state.ShowImage &&
            this.state.image.map((val, i) => (
              <img
                key={i}
                src={val}
                alt=""
                style={{ width: 300, height: 300 }}
              />
            ))}
        </div>
      </div>
    );
  }
}
export default Studentcomp;
