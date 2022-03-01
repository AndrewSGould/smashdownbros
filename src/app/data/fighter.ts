export interface IFighter {
  fighterNo: number,
  name: string,
  smallPortrait: string,
  aliases?: Array<string>
  //TODO: use aliases to tag characters?
  //  eg. 'shoto', 'spacey', 'swordie'?
  //  maybe a new property?
}

export interface IRoster {
  fighters: Array<IFighter>;
}

export const fighters: Array<IFighter> = [
  {
    fighterNo: 1,
    name: 'Mario',
    smallPortrait: 'chara_0_mario_00.png'
  },
  {
    fighterNo: 2,
    name: 'Donkey Kong',
    smallPortrait: 'chara_0_donkey_00.png',
    aliases: ['dk', 'donkeykong']
  },
  {
    fighterNo: 3,
    name: 'Link',
    smallPortrait: 'chara_0_link_00.png'
  },
  {
    fighterNo: 4,
    name: 'Samus',
    smallPortrait: 'chara_0_samus_00.png'
  },
  {
    fighterNo: 5,
    name: 'Dark Samus',
    smallPortrait: 'chara_0_samusd_00.png',
    aliases: ['ds', 'darksamus']
  },
  {
    fighterNo: 6,
    name: 'Yoshi',
    smallPortrait: 'chara_0_yoshi_00.png'
  },
  {
    fighterNo: 7,
    name: 'Kirby',
    smallPortrait: 'chara_0_kirby_00.png'
  },
  {
    fighterNo: 8,
    name: 'Fox',
    smallPortrait: 'chara_0_fox_00.png'
  },
  {
    fighterNo: 9,
    name: 'Pikachu',
    smallPortrait: 'chara_0_pikachu_00.png'
  },
  {
    fighterNo: 10,
    name: 'Luigi',
    smallPortrait: 'chara_0_luigi_00.png'
  },
  {
    fighterNo: 11,
    name: 'Ness',
    smallPortrait: 'chara_0_ness_00.png'
  },
  {
    fighterNo: 12,
    name: 'Captain Falcon',
    smallPortrait: 'chara_0_captain_00.png',
    aliases: ['cf', 'captainfalcon']
  },
  {
    fighterNo: 13,
    name: 'Jigglypuff',
    smallPortrait: 'chara_0_purin_00.png'
  },
  {
    fighterNo: 14,
    name: 'Peach',
    smallPortrait: 'chara_0_peach_00.png'
  },
  {
    fighterNo: 15,
    name: 'Daisy',
    smallPortrait: 'chara_0_daisy_00.png'
  },
  {
    fighterNo: 16,
    name: 'Bowser',
    smallPortrait: 'chara_0_koopa_00.png'
  },
  {
    fighterNo: 17,
    name: 'Ice Climbers',
    smallPortrait: 'chara_0_ice_climber_00.png',
    aliases: ['ic', 'iceys', 'icys', 'iceclimbers']
  },
  {
    fighterNo: 18,
    name: 'Sheik',
    smallPortrait: 'chara_0_sheik_00.png',
    aliases: ['shiek']
  },
  {
    fighterNo: 19,
    name: 'Zelda',
    smallPortrait: 'chara_0_zelda_00.png'
  },
  {
    fighterNo: 20,
    name: 'Dr. Mario',
    smallPortrait: 'chara_0_mariod_00.png',
    aliases: ['dr mario', 'drmario', 'doctor mario', 'doctormario', 'dm']
  },
  {
    fighterNo: 21,
    name: 'Pichu',
    smallPortrait: 'chara_0_pichu_00.png'
  },
  {
    fighterNo: 22,
    name: 'Falco',
    smallPortrait: 'chara_0_falco_00.png'
  },
  {
    fighterNo: 23,
    name: 'Marth',
    smallPortrait: 'chara_0_marth_00.png'
  },
  {
    fighterNo: 24,
    name: 'Lucina',
    smallPortrait: 'chara_0_lucina_00.png'
  },
  {
    fighterNo: 25,
    name: 'Young Link',
    smallPortrait: 'chara_0_younglink_00.png',
    aliases: ['yink', 'younglink', 'yl']
  },
  {
    fighterNo: 26,
    name: 'Ganondorf',
    smallPortrait: 'chara_0_ganon_00.png'
  },
  {
    fighterNo: 27,
    name: 'Mewtwo',
    smallPortrait: 'chara_0_mewtwo_00.png',
    aliases: ['m2']
  },
  {
    fighterNo: 28,
    name: 'Roy',
    smallPortrait: 'chara_0_roy_00.png'
  },
  {
    fighterNo: 29,
    name: 'Chrom',
    smallPortrait: 'chara_0_chrom_00.png'
  },
  {
    fighterNo: 30,
    name: 'Mr. Game & Watch',
    smallPortrait: 'chara_0_gamewatch_00.png',
    aliases: ['mr game and watch', 'mrgameandwatch', 'game and watch', 'gameandwatch', 'gw', 'g&w', 'mgw']
  },
  {
    fighterNo: 31,
    name: 'Meta Knight',
    smallPortrait: 'chara_0_metaknight_00.png',
    aliases: ['mk', 'metaknight']
  },
  {
    fighterNo: 32,
    name: 'Pit',
    smallPortrait: 'chara_0_pit_00.png'
  },
  {
    fighterNo: 33,
    name: 'Dark Pit',
    smallPortrait: 'chara_0_pitb_00.png',
    aliases: ['dp', 'darkpit']
  },
  {
    fighterNo: 34,
    name: 'Zero Suit Samus',
    smallPortrait: 'chara_0_szerosuit_00.png',
    aliases: ['zss', 'zero suit', 'zerosuit']
  },
  {
    fighterNo: 35,
    name: 'Wario',
    smallPortrait: 'chara_0_wario_00.png'
  },
  {
    fighterNo: 36,
    name: 'Snake',
    smallPortrait: 'chara_0_snake_00.png'
  },
  {
    fighterNo: 37,
    name: 'Ike',
    smallPortrait: 'chara_0_ike_00.png'
  },
  {
    fighterNo: 38,
    name: 'Pokémon Trainer',
    smallPortrait: 'chara_0_ptrainer_00.png',
    aliases: ['pt', 'pokemontrainer', 'poketrainer', 'pokemon trainer']
  },
  {
    fighterNo: 39,
    name: 'Diddy Kong',
    smallPortrait: 'chara_0_diddy_00.png',
    aliases: ['dk', 'diddykong']
  },
  {
    fighterNo: 40,
    name: 'Lucas',
    smallPortrait: 'chara_0_lucas_00.png'
  },
  {
    fighterNo: 41,
    name: 'Sonic',
    smallPortrait: 'chara_0_sonic_00.png'
  },
  {
    fighterNo: 42,
    name: 'King Dedede',
    smallPortrait: 'chara_0_dedede_00.png',
    aliases: ['dedede', 'd3', 'kingdedede', 'kd']
  },
  {
    fighterNo: 43,
    name: 'Olimar',
    smallPortrait: 'chara_0_pikmin_00.png'
  },
  {
    fighterNo: 44,
    name: 'Lucario',
    smallPortrait: 'chara_0_lucario_00.png'
  },
  {
    fighterNo: 45,
    name: 'R.O.B.',
    smallPortrait: 'chara_0_robot_00.png',
    aliases: ['rob']
  },
  {
    fighterNo: 46,
    name: 'Toon Link',
    smallPortrait: 'chara_0_toonlink_00.png',
    aliases: ['tink', 'toonlink', 'tl']
  },
  {
    fighterNo: 47,
    name: 'Wolf',
    smallPortrait: 'chara_0_wolf_00.png'
  },
  {
    fighterNo: 48,
    name: 'Villager',
    smallPortrait: 'chara_0_murabito_00.png'
  },
  {
    fighterNo: 49,
    name: 'Mega Man',
    smallPortrait: 'chara_0_rockman_00.png',
    aliases: ['megaman', 'mm']
  },
  {
    fighterNo: 50,
    name: 'Wii Fit Trainer',
    smallPortrait: 'chara_0_wiifit_00.png',
    aliases: ['wiifit', 'wft']
  },
  {
    fighterNo: 51,
    name: 'Rosalina & Luma',
    smallPortrait: 'chara_0_rosetta_00.png',
    aliases: ['rosalina and luma', 'rl', 'randl']
  },
  {
    fighterNo: 52,
    name: 'Little Mac',
    smallPortrait: 'chara_0_littlemac_00.png',
    aliases: ['mac', 'lm', 'littlemac']
  },
  {
    fighterNo: 53,
    name: 'Greninja',
    smallPortrait: 'chara_0_gekkouga_00.png'
  },
  {
    fighterNo: 54,
    name: 'Palutena',
    smallPortrait: 'chara_0_palutena_00.png'
  },
  {
    fighterNo: 55,
    name: 'Pac-Man',
    smallPortrait: 'chara_0_pacman_00.png',
    aliases: ['pacman']
  },
  {
    fighterNo: 56,
    name: 'Robin',
    smallPortrait: 'chara_0_reflet_00.png'
  },
  {
    fighterNo: 57,
    name: 'Shulk',
    smallPortrait: 'chara_0_shulk_00.png'
  },
  {
    fighterNo: 58,
    name: 'Bowser Jr.',
    smallPortrait: 'chara_0_koopajr_00.png',
    aliases: ['bj', 'bowserjr']
  },
  {
    fighterNo: 59,
    name: 'Duck Hunt',
    smallPortrait: 'chara_0_duckhunt_00.png',
    aliases: ['dh', 'duckhunt']
  },
  {
    fighterNo: 60,
    name: 'Ryu',
    smallPortrait: 'chara_0_ryu_00.png'
  },
  {
    fighterNo: 61,
    name: 'Ken',
    smallPortrait: 'chara_0_ken_00.png'
  },
  {
    fighterNo: 62,
    name: 'Cloud',
    smallPortrait: 'chara_0_cloud_00.png'
  },
  {
    fighterNo: 63,
    name: 'Corrin',
    smallPortrait: 'chara_0_kamui_00.png'
  },
  {
    fighterNo: 64,
    name: 'Bayonetta',
    smallPortrait: 'chara_0_bayonetta_00.png'
  },
  {
    fighterNo: 65,
    name: 'Inkling',
    smallPortrait: 'chara_0_inkling_00.png'
  },
  {
    fighterNo: 66,
    name: 'Ridley',
    smallPortrait: 'chara_0_ridley_00.png'
  },
  {
    fighterNo: 67,
    name: 'Simon',
    smallPortrait: 'chara_0_simon_00.png'
  },
  {
    fighterNo: 68,
    name: 'Richter',
    smallPortrait: 'chara_0_richter_00.png'
  },
  {
    fighterNo: 69,
    name: 'King K. Rool',
    smallPortrait: 'chara_0_krool_00.png',
    aliases: ['krool', 'kkr', 'kr', 'king krool', 'kingk']
  },
  {
    fighterNo: 70,
    name: 'Isabelle',
    smallPortrait: 'chara_0_shizue_00.png'
  },
  {
    fighterNo: 71,
    name: 'Incineroar',
    smallPortrait: 'chara_0_gaogaen_00.png'
  },
  {
    fighterNo: 72,
    name: 'Piranha Plant',
    smallPortrait: 'chara_0_packun_00.png',
    aliases: ['pp', 'piranhaplant', 'pirahna']
  },
  {
    fighterNo: 73,
    name: 'Joker',
    smallPortrait: 'chara_0_jack_00.png'
  },
  {
    fighterNo: 74,
    name: 'Hero',
    smallPortrait: 'chara_0_brave_00.png'
  },
  {
    fighterNo: 75,
    name: 'Banjo & Kazooie',
    smallPortrait: 'chara_0_buddy_00.png',
    aliases: ['bk', 'bak', 'bandk', 'kazooie']
  },
  {
    fighterNo: 76,
    name: 'Terry',
    smallPortrait: 'chara_0_dolly_00.png'
  },
  {
    fighterNo: 77,
    name: 'Byleth',
    smallPortrait: 'chara_0_master_00.png'
  },
  {
    fighterNo: 78,
    name: 'Min Min',
    smallPortrait: 'chara_0_tantan_00.png',
    aliases: ['minmin']
  },
  {
    fighterNo: 79,
    name: 'Steve',
    smallPortrait: 'chara_0_pickel_00.png'
  },
  {
    fighterNo: 80,
    name: 'Sephiroth',
    smallPortrait: 'chara_0_edge_00.png'
  },
  {
    fighterNo: 81,
    name: 'Pyra/Mythra',
    smallPortrait: 'chara_0_eflame_first_00.png',
    aliases: ['mythra', 'aegis']
  },
  {
    fighterNo: 82,
    name: 'Kazuya',
    smallPortrait: 'chara_0_demon_00.png'
  },
  {
    fighterNo: 83,
    name: 'Sora',
    smallPortrait: 'chara_0_trail_00.png'
  },
  {
    fighterNo: 84,
    name: 'Mii Brawler',
    smallPortrait: 'chara_0_miifighter_00.png',
    aliases: ['mb', 'brawler']
  },
  {
    fighterNo: 85,
    name: 'Mii Swordfighter',
    smallPortrait: 'chara_0_miiswordsman_00.png',
    aliases: ['swordfighter']
  },
  {
    fighterNo: 86,
    name: 'Mii Gunner',
    smallPortrait: 'chara_0_miigunner_00.png',
    aliases: ['gunner']
  }
]