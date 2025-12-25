export const EventHandling = () => {

    // function handleButtonClick(){
    //     alert("hey onClick Event is working ")
    // }
    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target)
        console.log(event.type)
        alert("hey onClick Event is working ")
    }
    return(
        <>
         <button className="p-5 bg-amber-500" onClick={handleButtonClick}>Click me!</button> <br />
         <button onClick={handleButtonClick}>Click me! 2</button> <br />
         <button className="p-10 bg-red-500">TEST</button>
        </>
    )
}