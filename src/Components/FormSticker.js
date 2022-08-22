import React, { Component } from "react";

class FormNewSticker extends Component {
    render() {
        return (
            <React.Fragment>
                <form>
                    <label for="newSticker">Ingresa Figurita nueva </label>
                    <input type="number" max="860" min="0" className="newSticker" id="newSticker"/>
                </form>
            </React.Fragment>
        )
    }
}

export default FormNewSticker