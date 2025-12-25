// Parent
function ProfileCard(){
    return(
        <>
        <h1>Profile Card</h1>
            <Card 
                name ="Alice"
                age={30}
                greeting = {
                    <div>
                        <strong>Lorem ipsum dolor sit amet.</strong>
                    </div>
                }
            >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, cupiditate.</p>
                <button>Contact</button>
            </Card>
            <Card 
                name ="Bod"
                age={25}
                greeting = {
                    <div>
                        <strong>Second  : Lorem ipsum dolor sit amet.</strong>
                    </div>
                }
            >
                <p>Second  : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, cupiditate.</p>
                <button>Contact</button>
            </Card>
        </>
    )
}

// Child
function Card({name , age , greeting,children} ){
// const {name , age , greeting,children} = props;
    return(
        <>
         <h1>Name:{name}</h1>
         <p>Age:{age}</p>
         <p>{greeting}</p>
         <div>{children}</div>
        </>
    )
}

export default ProfileCard;