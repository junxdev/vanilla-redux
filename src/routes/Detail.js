import React from "react";
import { connect } from "react-redux"
import { actionCreators } from "../store";
import { useHistory } from "react-router-dom";

function Detail({ toDo, onBtnClick }) {
    // const history = useHistory();
    // history.goBack();
    return (
        <>
            <h1>{toDo?.text}</h1>
            <h5>Created at {toDo?.id}</h5>
            <button onClick={onBtnClick}>DEL</button>
        </>
    )
}

function mapStateToProps(state, ownProps) {
    const {match: {params: {id}}} = ownProps;
    return { toDo: state.find(toDo => toDo.id === parseInt(id))};
}

function mapDispatchToProps(dispatch, ownProps) {
    const {match: {params: {id}}} = ownProps;
    return {
        onBtnClick: () => {
            dispatch(actionCreators.deleteToDo(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Detail);