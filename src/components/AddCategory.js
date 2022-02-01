import React from 'react';
import { useState } from 'react/cjs/react.development';
import PropTypes from "prop-types";

const AddCategory = ({setCategories}) => {
    const [InputValue, setInputValue] = useState("");
    const handleInputChange = (e) => { 
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (InputValue.trim().length > 2) {
            setCategories(cats => [InputValue, ...cats])
            setInputValue("")
        }
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={InputValue}
                onChange={handleInputChange}
            ></input>
            <button>  agregar </button>
        </form>
    </div>;
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;