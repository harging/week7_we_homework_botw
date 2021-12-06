import { useState, useEffect } from 'react'
import MonsterSelect from '../components/MonsterSelect'
import Monster from '../components/Monster'
import FavMonsters from '../components/FavMonsters'
import logo from '../images/botw-logo-2.jpeg'

const MonstersContainer = () => {

    const [monsters, setMonsters] = useState([])
    const [selectedMonsterId, setSelectedMonsterId] = useState('')

    useEffect(() => {
        getMonsters()
    }, [])

    const getMonsters = () => {
        fetch("https://botw-compendium.herokuapp.com/api/v2")
            .then(response => response.json())
            .then(responseData => setMonsters(responseData.data.monsters))
    }

    const handleMonsterSelected = id => {
        setSelectedMonsterId(id)
    }

    const handleFavouriteToggle = (id) => {
        const updatedMonsters = monsters.map((monster) => {
            if (monster.id === id) {
                monster.favourite = !monster.favourite
            }
            return monster
        })
        setMonsters(updatedMonsters)
    }

    const selectedMonster = monsters.find(monster => monster.id === selectedMonsterId)

    function titleCase(str) {
        return str
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

    return (
        <>
            <img src={logo} height="300px"/>
            <h2>Monsters of Legend of Zelda: Breath of the Wild</h2>
            <MonsterSelect monsters={monsters} onMonsterSelected={handleMonsterSelected} />
            <Monster monster={selectedMonster} onFavouriteToggle={handleFavouriteToggle} />
            <FavMonsters monsters={monsters} onMonsterSelected={handleMonsterSelected} />
        </>
    )
}

export default MonstersContainer