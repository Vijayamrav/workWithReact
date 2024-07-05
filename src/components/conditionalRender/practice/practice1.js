export const checkUser=()=>{
    let isUserLogged=true;

    return(
        <>
        {isUserLogged?(
            <h3>Hello User</h3>
        ):(
            <h3>Please Log in </h3>
        )}
        </>
    )

} 