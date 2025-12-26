import "./EV.css";
export const EventPropgation = () => {

    const handleGrandParent = () => {
        console.log("GrandParent clicked");
        event.stopePropagatoin()
    };
    const handleParentClick = () => {
        console.log("Parent clicked")
        event.stopePropagatoin()
    }
    const handleChildClick = (event) => {
        console.log("Child clicked");
        event.stopePropagatoin()
    }

    return(
         <section className="main-div">
            <div className="giv-div" onClick={handleGrandParent}>
                <div className="p-div" onClick={handleParentClick}>
                    <button className="c-div"onClick={handleChildClick}>Child Div</button>
                </div>
            </div>
         </section>
    );
}