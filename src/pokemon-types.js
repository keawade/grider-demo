module.exports = [{
    "name": "fighting",
    "damage_relations": {
        "half_damage_from": ["rock", "bug", "dark"],
        "no_damage_from": [],
        "half_damage_to": ["flying", "poison", "bug", "psychic", "fairy"],
        "double_damage_from": ["flying", "psychic", "fairy"],
        "no_damage_to": ["ghost"],
        "double_damage_to": ["normal", "rock", "steel", "ice", "dark"]
    }
}, {
    "name": "bug",
    "damage_relations": {
        "half_damage_from": ["fighting", "ground", "grass"],
        "no_damage_from": [],
        "half_damage_to": ["fighting", "flying", "poison", "ghost", "steel", "fire", "fairy"],
        "double_damage_from": ["flying", "rock", "fire"],
        "no_damage_to": [],
        "double_damage_to": ["grass", "psychic", "dark"]
    }
}, {
    "name": "normal",
    "damage_relations": {
        "half_damage_from": [],
        "no_damage_from": ["ghost"],
        "half_damage_to": ["rock", "steel"],
        "double_damage_from": ["fighting"],
        "no_damage_to": ["ghost"],
        "double_damage_to": []
    }
}, {
    "name": "ground",
    "damage_relations": {
        "half_damage_from": ["poison", "rock", "electric"],
        "half_damage_to": ["bug", "grass"],
        "double_damage_from": ["water", "grass", "ice"],
        "no_damage_to": ["flying"],
        "double_damage_to": ["poison", "rock", "steel", "fire", "electric"]
    }
}, {
    "name": "water",
    "damage_relations": {
        "half_damage_from": ["steel", "fire", "water", "ice"],
        "no_damage_from": [],
        "half_damage_to": ["water", "grass", "dragon"],
        "double_damage_from": ["grass", "electric"],
        "no_damage_to": [],
        "double_damage_to": ["ground", "rock", "fire"]
    }
}, {
    "name": "poison",
    "damage_relations": {
        "half_damage_from": ["fighting", "poison", "bug", "grass", "fairy"],
        "no_damage_from": [],
        "half_damage_to": ["poison", "ground", "rock", "ghost"],
        "double_damage_from": ["ground", "psychic"],
        "no_damage_to": ["steel"],
        "double_damage_to": ["grass", "fairy"]
    }
}, {
    "name": "psychic",
    "damage_relations": {
        "half_damage_from": ["fighting", "psychic"],
        "no_damage_from": [],
        "half_damage_to": ["steel", "psychic"],
        "double_damage_from": ["bug", "ghost", "dark"],
        "no_damage_to": ["dark"],
        "double_damage_to": ["fighting", "poison"]
    }
}, {
    "name": "fire",
    "damage_relations": {
        "half_damage_from": ["bug", "steel", "fire", "grass", "ice", "fairy"],
        "no_damage_from": [],
        "half_damage_to": ["rock", "fire", "water", "dragon"],
        "double_damage_from": ["ground", "rock", "water"],
        "no_damage_to": [],
        "double_damage_to": ["bug", "steel", "grass", "ice"]
    }
}, {
    "name": "grass",
    "damage_relations": {
        "half_damage_from": ["ground", "water", "grass", "electric"],
        "no_damage_from": [],
        "half_damage_to": ["flying", "poison", "bug", "steel", "fire", "grass", "dragon"],
        "double_damage_from": ["flying", "poison", "bug", "fire", "ice"],
        "no_damage_to": [],
        "double_damage_to": ["ground", "rock", "water"]
    }
}, {
    "name": "dragon",
    "damage_relations": {
        "half_damage_from": ["fire", "water", "grass", "electric"],
        "no_damage_from": [],
        "half_damage_to": ["steel"],
        "double_damage_from": ["ice", "dragon", "fairy"],
        "no_damage_to": ["fairy"],
        "double_damage_to": ["dragon"]
    }
}, {
    "name": "ghost",
    "damage_relations": {
        "half_damage_from": ["poison", "bug"],
        "no_damage_from": ["normal", "fighting"],
        "half_damage_to": ["dark"],
        "double_damage_from": ["ghost", "dark"],
        "no_damage_to": ["normal"],
        "double_damage_to": ["ghost", "psychic"]
    }
}, {
    "name": "dark",
    "damage_relations": {
        "half_damage_from": ["ghost", "dark"],
        "no_damage_from": ["psychic"],
        "half_damage_to": ["fighting", "dark", "fairy"],
        "double_damage_from": ["fighting", "bug", "fairy"],
        "no_damage_to": [],
        "double_damage_to": ["ghost", "psychic"]
    }
}, {
    "name": "flying",
    "damage_relations": {
        "half_damage_from": ["fighting", "bug", "grass"],
        "no_damage_from": ["ground"],
        "half_damage_to": ["rock", "steel", "electric"],
        "double_damage_from": ["rock", "electric", "ice"],
        "no_damage_to": [],
        "double_damage_to": ["fighting", "bug", "grass"]
    }
}, {
    "name": "electric",
    "damage_relations": {
        "half_damage_from": ["flying", "steel", "electric"],
        "no_damage_from": [],
        "half_damage_to": ["grass", "electric", "dragon"],
        "double_damage_from": ["ground"],
        "no_damage_to": ["ground"],
        "double_damage_to": ["flying", "water"]
    }
}, {
    "name": "steel",
    "damage_relations": {
        "half_damage_from": ["normal", "flying", "rock", "bug", "steel", "grass", "psychic", "ice", "dragon", "fairy"],
        "no_damage_from": ["poison"],
        "half_damage_to": ["steel", "fire", "water", "electric"],
        "double_damage_from": ["fighting", "ground", "fire"],
        "no_damage_to": [],
        "double_damage_to": ["rock", "ice", "fairy"]
    }
}, {
    "name": "ice",
    "damage_relations": {
        "half_damage_from": ["ice"],
        "no_damage_from": [],
        "half_damage_to": ["steel", "fire", "water", "ice"],
        "double_damage_from": ["fighting", "rock", "steel", "fire"],
        "no_damage_to": [],
        "double_damage_to": ["flying", "ground", "grass", "dragon"]
    }
}, {
    "name": "rock",
    "damage_relations": {
        "half_damage_from": ["normal", "flying", "poison", "fire"],
        "no_damage_from": [],
        "half_damage_to": ["fighting", "ground", "steel"],
        "double_damage_from": ["fighting", "ground", "steel", "water", "grass"],
        "no_damage_to": [],
        "double_damage_to": ["flying", "bug", "fire", "ice"]
    }
}]