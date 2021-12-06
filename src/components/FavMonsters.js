const FavMonsters = ({ monsters, onMonsterSelected }) => {

    const FavMonsters = monsters.filter(monster => monster.favourite)

    return (
        <>
            <h3>Monsters I want to kill</h3>
            <ul>
                {FavMonsters.map(monster => {
                    return (
                        <li key={monster.id}>
                            <img src={monster.image} height="50px" width="50px" />
                            {monster.name}
                            <button onClick={() => onMonsterSelected(monster.id)}>View</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default FavMonsters