const Monster = ({ monster, onFavouriteToggle }) => {

    if (!monster) {
        return null
    }

    const handleClick = () => {
        onFavouriteToggle(monster.id)
    }

    const favouriteButtonText = monster.favourite ? "Killed" : "Add to kill list"

    return (
        <>
            <h3>{monster.name}</h3>
            <button onClick={handleClick}>{favouriteButtonText}</button>
        </>
    )
}

export default Monster