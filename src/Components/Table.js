import React, { Component } from "react";

let data = [1, 40, 60, 80, 120, 150, 210, 250, 280, 310, 340, 410, 480, 510, 530, 689, 484, 356, 481, 859, 416, 69, 132, 646, 813, 245, 632, 700, 750, 796].sort()



class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }
    saludar() {
        alert("hola")
    }
    render() {

        return (
            <React.Fragment>
                <p onClick={this.saludar}>{this.state.name}</p>

                <table>
                    <tr>
                        <td>X</td>
                        {[...Array(51)].map((e, i) => {
                            if (i > 0) {
                                return <td>{i}</td>
                            }
                        })}
                    </tr>
                    <tr>
                        <td><strong>0</strong></td>
                        {data.map((num) => {
                            if (num > 0 && num < 100) {
                                return <td>{num}</td>
                            }
                        })}
                    </tr>
                    <tr>
                        <td><strong>100</strong></td>
                        {data.map((num) => {
                            if (num > 100 && num < 200) {
                                return <td>{num}</td>
                            }
                        })}
                    </tr>
                    <tr>
                        <td><strong>200</strong></td>
                        {data.map((num) => {
                            if (num > 200 && num < 300) {
                                return <td>{num}</td>
                            }
                        })}
                    </tr>
                    <tr>
                        <td><strong>300</strong></td>
                        {data.map((num) => {
                            if (num > 300 && num < 400) {
                                return <td>{num}</td>
                            }
                        })}
                    </tr>
                    <tr>
                        <td><strong>400</strong></td>
                        {data.map((num) => {
                            if (num > 400 && num < 500) {
                                return <td>{num}</td>
                            }
                        })}
                    </tr>
                    <tr>
                        <td><strong>500</strong></td>
                        {data.map((num) => {
                            if (num > 500 && num < 600) {
                                return <td>{num}</td>
                            }
                        })}
                    </tr>
                    <tr>
                        <td><strong>600</strong></td>
                        {data.map((num) => {
                            if (num > 600 && num < 700) {
                                return <td>{num}</td>
                            }
                        })}
                    </tr>
                    <tr>
                        <td><strong>700</strong></td>
                        {data.map((num) => {
                            if (num > 700 && num < 800) {
                                return <td>{num}</td>
                            }
                        })}
                    </tr>
                    <tr>
                        <td><strong>800</strong></td>
                        {data.map((num) => {
                            if (num > 800 && num < 860) {
                                return <td>{num}</td>
                            }
                        })}
                    </tr>
                </table>
            </React.Fragment>
        )
    }
}

export default Table;