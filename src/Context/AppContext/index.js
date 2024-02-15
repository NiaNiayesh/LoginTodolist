// import {createContext, useContext, useReducer, useMemo} from "react";
// import PropTypes from "prop-types";

// const MaterialUI = createContext();

// MaterialUI.displayName = "AppContext";

// function reducer(state, action) {
//     switch (action.type) {
//         case "MINI_SIDENAV": {
//             return {...state, miniSidenav: action.value};
//         }
//         case "LOADING": {
//             return {...state, loading: action.value};
//         }
//         default: {
//             throw new Error(`Unhandled action type: ${action.type}`);
//         }
//     }
// }

// function AppControllerProvider({children}) {
//     const initialState = {
//         miniSidenav: false,
//         loading: false,
//     };
//     const [controller, dispatch] = useReducer(reducer, initialState);
//     const value = useMemo(() => [controller, dispatch], [controller, dispatch]);
//     return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
// }

// function useAppController() {
//     const context = useContext(MaterialUI);
//     if (!context) {
//         throw new Error(
//             "should be used inside the MaterialUIControllerProvider."
//         );
//     }

//     return context;
// }

// AppControllerProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// // Context module functions
// const setMiniSidenav = (dispatch, value) => dispatch({type: "MINI_SIDENAV", value});
// const setLoading = (dispatch, value) => dispatch({type: "LOADING", value});

// export {
//     setMiniSidenav,
//     setLoading
// };