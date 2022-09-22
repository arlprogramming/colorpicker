import React, { Component } from "react";
import "./index.css";
const classNames = require("classnames");
//import { SketchPicker } from "react-color";

export default class ColorPicker extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     selectedColor: "",
  //   };
  // }

  state = {
    selectedColor: [],
  };

  AddColor = (e) => {
    // alert("warna color");
    this.setState({ selectedColor: e });
  };

  render() {
    const { selectedColor } = this.state;
    // console.log(this.props);

    return (
      <div>
        <div className="layout-row justify-content-center">
          <div className="card mt-75">
            <div
              className="canvas"
              data-testid="selectedColor"
              style={{ backgroundColor: selectedColor }}
            >
              <p className="text-center mx-auto px-5">{selectedColor}</p>
            </div>
            <div className="card-actions">
              {/* <SketchPicker /> */}
              <div
                className="layout-row justify-content-center align-items-center"
                data-testid="colorPickerOptions"
              >
                {this.props.colorPickerOptions.map((color, index) => {
                  return (
                    <div
                      className={classNames({
                        "color-box": true,
                        "mx-8": true,
                        "my-15": true,
                        selected: selectedColor === color,
                      })}
                      key={color}
                      style={{ backgroundColor: color }}
                      onClick={() => this.AddColor(color)}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
