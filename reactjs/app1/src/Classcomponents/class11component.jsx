import { Component } from "react";

class Btscomp extends Component {
  constructor() {
    super();
    this.state = {
      ShowImage: false,
      welcome: "WELCOME TO THE BTS WORLD",
      bts: {
        fname: "Kim",
        lname: "Taehyung",
        role: "singer",
      },
      persons: [
        "taehyung",
        "jungkook",
        "rm",
        "j-hope",
        "suga",
        "jin",
        "jimin",
        "suga",
      ],
      images: [
        "https://th.bing.com/th/id/OIP.5Gc9j7YF30amtP4h2uzwBAHaPO?pid=ImgDet&rs=1",
        "https://th.bing.com/th/id/OIP.rBnt5x7jwi4SB7iGnryUiwAAAA?pid=ImgDet&w=474&h=841&rs=1",
        "https://th.bing.com/th/id/OIP.2b6BtupsUGei4rQoGp6ASwHaLH?pid=ImgDet&rs=1",
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/V_for_Dispatch_White_Day_Special%2C_27_February_2019_03_(cropped).jpg",
      ],
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.welcome}</h2>
        <hr />
        <ul>
          {Object.values(this.state.bts).map((val, i) => {
            return <li key={i}>{val}</li>;
          })}
        </ul>

        <hr />
        <ul>
          {this.state.persons.map((val, i) => (
            <li key={i}>{val}</li>
          ))}
        </ul>
        <div>
          {this.state.ShowImage &&
            this.state.images.map((val, i) => (
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
export default Btscomp;
