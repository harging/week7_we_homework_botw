const MonsterSelect = ({ monsters, onMonsterSelected }) => {

    // const handleChange = event => {
    //     onMonsterSelected(event.target.value)
    // }

    return (
        <ul>
            {monsters.map(monster => {
                return (
                    <li key={monster.id}>
                        <img src={monster.image} height="50px" width="50px" />{monster.name}<button onClick={() => onMonsterSelected(monster.id)}>View</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default MonsterSelect