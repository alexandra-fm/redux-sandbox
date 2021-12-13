import React from "react"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as actions from "../actions"

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div
      id="root"
      className="
        text-center
        p-5
        mt-4
        bg-light
        rounded-3
        bg-light
        d-grid
        gap-3
        col-md-5
        mx-auto
      "
    >
      <h2 id="counter">{counter}</h2>
      <button className="btn btn-outline-secondary btn-lg" onClick={inc}>
        INC
      </button>
      <button className="btn btn-outline-secondary btn-lg" onClick={dec}>
        DEC
      </button>
      <button className="btn btn-outline-secondary btn-lg" onClick={rnd}>
        RND
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state,
  }
}

/* const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)

} */
/* const mapDispatchToProps = dispatch => {
  const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

  return {
    inc,
    dec,
    rnd,
  }
} */

export default connect(mapStateToProps, actions)(Counter)
