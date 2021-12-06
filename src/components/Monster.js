const Monster = ({ monster, onFavouriteToggle }) => {

    if (!monster) {
        return null
    }

    const handleClick = () => {
        onFavouriteToggle(monster.id)
    }

    const favouriteButtonText = monster.favourite ? "Killed" : "Add to kill list"

    return (
        <div class="monster">
            <h3>{monster.name}</h3>
            <p><button onClick={handleClick}>{favouriteButtonText}</button></p>
            <img src={monster.image} />
            <p>{monster.description}</p>
        </div>
    )
}

export default Monster