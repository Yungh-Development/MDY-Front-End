import React from "react";
import { connect } from "react-redux";
import { filter } from "../Actions/TodoActions";

const Link = ({ active, children, ButtonsTaskHandler }) => {
  return (
    <a
      href="#_"
      onClick={ButtonsTaskHandler}
      disabled={active}
      className="relative z-30 inline-flex items-center justify-center w-auto px-2 py-1 overflow-hidden font-semibold text-gray-800 transition-all duration-500 border border-gray-200 rounded-md cursor-pointer group ease bg-gradient-to-b from-sky-300 to-gray-50 hover:from-sky-500"
    >
      <span className="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-sky-100"></span>
      <span className="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-sky-100"></span>
      {children}
    </a>
  );
};
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  ButtonsTaskHandler: () => {
    console.log("dispatch " + ownProps.filter);
    dispatch(filter(ownProps.filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
