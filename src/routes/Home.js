import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
    // console.log(props);
    const [text, setText] = useState("");
    
    function onChange(e) {
        setText(e.target.value);
    }
    
    function onSubmit(e) {
        e.preventDefault();
        console.log(text);
        setText("");
        addToDo(text);
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => 
                    <ToDo {...toDo} key={toDo.id} />
                )}
            </ul>
        </>
    )
}

function mapStateToProps(state) {
    // console.log(state);
    return { toDos: state };
}

function mapDispatchToProps(dispatch) {
    // console.log(dispatch);
    return {
        addToDo: text => dispatch(actionCreators.addToDo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);