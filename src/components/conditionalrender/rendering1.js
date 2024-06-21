export const RenderTeams=()=>{
    const iplteams=[
        {
            teamName:"CSK",
            teamCaptain:"Dhoni",
            seniorPlayers:['dhoni','jadeja','rahane'],
            teamLogo:'https://shorturl.at/2n5ro'

        },
        {
            teamName:"MI",
            teamCaptain:'Rohit Sharma',
            seniorPlayers:['rohit','surya','bumrah'],
            teamLogo:'https://shorturl.at/DyFpj'
        },
        {
            teamName:"SRH",
            teamCaptain:'Cummins',
            seniorPlayers:['bhuvi'],
            teamLogo:'https://shorturl.at/YhLYv'

        }
    ]
    return(
        <>
        {
            iplteams.map((team)=>{
                return(
                <div>
                    <img src={team.teamLogo} alt='logo' heigth={100} width={100}/>
                    <h1>{team.teamName}</h1>
                    <h3>{team.teamCaptain}</h3>
                    <h3>senior players</h3>
                    
                    {
                        team.seniorPlayers.map(player=>{
                             return <h4>{player}</h4>
                        })
                    }
                    
                </div>
                )
            })
        }
        </>
    )
}