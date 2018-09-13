import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionWheels } from "./action";
import currencyformat from "../currencyformat";
import Slider from "react-slick";
import style from "./style.scss";

class Wheels extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.choice.id
    };
  }

  changeOption(e) {
    let el = this.props.wheels.items.filter(item => item.id == e.target.id);

    this.setState({
      selected: e.target.id
    });

    return this.props.actionWheels(el[0]);
  }

  wheelsOptions({ id, label, image, price }) {
    let activeInput = this.state.selected == id ? "checked" : "";
    let activeClass = this.state.selected == id ? style.active : "";

    return (
      <div
        key={id}
        className={[activeClass, style.wheelsOptionsItem].join(" ")}
      >
        <label htmlFor={id}>
          <img src={image} alt={label} />

          <div className={style.description}>
            <p>{label}</p>

            <span>{price ? `+ $${currencyformat(price)}` : "included"}</span>
          </div>

          <input
            type="radio"
            name="wheels"
            id={id}
            onChange={e => this.changeOption(e)}
            checked={activeInput}
          />
        </label>
      </div>
    );
  }

  render() {
    var settings = {
      slidesToShow: 3,
      infinite: false,
      responsive: [
        {
          breakpoint: 599,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "25%",
            slidesToShow: 1
          }
        }
      ]
    };
    return (
      <section className={style.wheels}>
        <h1 className={style.title}>Wheels</h1>
        <div className={style.wheelsOptions}>
          <Slider {...settings}>
            {this.props.wheels.items.map(({ id, label, image, price }) =>
              this.wheelsOptions({ id, label, image, price })
            )}
          </Slider>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ general: { data }, choices: { steps } }) => ({
  wheels: data.wheels,
  choice: steps.wheels
});

const mapDispatchToProps = dispach => {
  return bindActionCreators({ actionWheels }, dispach);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wheels);
