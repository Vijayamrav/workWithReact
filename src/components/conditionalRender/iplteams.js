const iplTeams=[
    {
        teamName:"SRH",
        titles:2,
        Captain:"cummins",
        seniors:['bhuvi']
    },
    {
        teamName:"MI",
        titles:5,
        Captain:"rohit",
        seniors:['rohit','bumrah','surya']  
    },
    {
        teamName:"CSK",
        titles:5,
        Captain:"Dhoni",
        seniors:['Dhoni','Jadeja']   
    },
    {
        teamName:"KKR",
        titles:3,
        Captain:"Shreyas Iyer",
        seniors:['narine','russel']   
    }
]

export const IplTeams=()=>{
    return(
        <>
        {
            iplTeams.map((eachTeam)=>{
                return(
                    <>
                    <h1>{eachTeam.teamName}</h1>
                    
                    </>
                )
            })
        }
        </>
    )
}

