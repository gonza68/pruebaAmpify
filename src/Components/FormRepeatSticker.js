import React, { Component } from "react";

class FormRepeatSticker extends Component {
    render() {
        return (
            <React.Fragment>
                <form>
                    <label for="newSticker">Ingresa Figurita Repetida </label>
                    <input type="number" max="500" min="0" className="newSticker" id="newSticker"/>
                </form>
            </React.Fragment>
        )
    }
}

export default FormRepeatSticker