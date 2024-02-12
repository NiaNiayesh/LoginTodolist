import Header from "../Header";

export function PageLayout(props){
    return <>
    <Header/>
    {props.children}
    </>
}