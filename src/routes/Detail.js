import React, { useState } from "react";
import { connect } from "react-redux"
import { actionCreators } from "../store";
import { useHistory } from "react-router-dom";

function Detail({ toDo, deleteToDo }) {
    // What's been changed
    const history = useHistory();

    // What's been changed
    const onBtnClick = () => {
        deleteToDo(toDo?.id);
        history.goBack();
    }

    return (
        <>
            <h1>{toDo?.text}</h1>
            <h5>Created at {toDo?.id}</h5>
            {/* What's been changed */}
            <button onClick={onBtnClick}>DEL</button>
        </>
    )
}

function mapStateToProps(state, ownProps) {
    const {match: {params: {id}}} = ownProps;
    return { toDo: state.find(toDo => toDo.id === parseInt(id))};
}

// What's been changed
function mapDispatchToProps(dispatch, ownProps) {
    // const {match: {params: {id}}} = ownProps;
    return {
        deleteToDo: (id) => {
            dispatch(actionCreators.deleteToDo(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Detail);