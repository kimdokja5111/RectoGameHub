/* RetroGameHub English catalog and application. Edit RGH_DATA.games to update titles; the rest of this file handles the shared single-page experience. */
const RGH_DATA = {
  games: [
  {id:'street-fighter-30th-anniversary',title:'Street Fighter 30th Anniversary Collection',year:2018,genre:['Action','Fighting','Retro'],platforms:['PC'],rating:4.4,popularity:90,developer:'Digital Eclipse',publisher:'Capcom U.S.A., Inc.',officialUrl:'https://store.steampowered.com/app/586200/',description:'A collection of classic arcade fighting games with a museum celebrating the series history.',tags:['2D fighter','arcade','collection'],featured:true,trending:true,recentlyAdded:false,editorsPick:true,screenshots:['arcade-stage','versus-screen']},
  {id:'dusk',title:'DUSK',year:2018,genre:['Action','Horror','Indie','Retro'],platforms:['PC'],rating:4.7,popularity:96,developer:'David Szymanski',publisher:'New Blood Interactive',officialUrl:'https://store.steampowered.com/app/519860/',description:'A relentless retro first-person shooter steeped in rural mystery and fast movement.',tags:['FPS','boomer shooter','90s'],featured:true,trending:true,recentlyAdded:false,editorsPick:true,screenshots:['woodland-night','stone-hall']},
  {id:'convenient',title:'Convenient',year:2022,genre:['Adventure','Horror','Indie'],platforms:['PC'],rating:4.0,popularity:67,developer:'Luna Apps',publisher:'Luna Apps',officialUrl:'https://store.steampowered.com/app/2143010/',description:'A short PS1-inspired survival horror story set around a lonely roadside stop.',tags:['PS1-style','survival horror','short'],featured:false,trending:false,recentlyAdded:true,editorsPick:false,screenshots:['roadside-stop','basement-door']},
  {id:'cave-story-plus',title:'Cave Story+',year:2011,genre:['Action','Adventure','Platformer','Indie','Retro'],platforms:['PC'],rating:4.7,popularity:95,developer:'Studio Pixel, Nicalis',publisher:'Nicalis, Inc.',officialUrl:'https://store.steampowered.com/app/200900/',description:'A beloved side-scrolling adventure with secrets, memorable characters, and crisp pixel art.',tags:['metroidvania','pixel art','classic'],featured:true,trending:true,recentlyAdded:false,editorsPick:true,screenshots:['cave-depths','village-lights']},
  {id:'crow-country',title:'Crow Country',year:2024,genre:['Action','Adventure','Horror','Indie'],platforms:['PC'],rating:4.8,popularity:94,developer:'SFB Games',publisher:'SFB Games',officialUrl:'https://store.steampowered.com/app/1996010/',description:'Explore an abandoned theme park in a modern survival horror homage to the 1990s.',tags:['survival horror','PS1-style','mystery'],featured:true,trending:true,recentlyAdded:true,editorsPick:true,screenshots:['closed-fairground','ticket-hall']},
  {id:'openttd',title:'OpenTTD',year:2004,genre:['Strategy','Retro','Indie'],platforms:['PC','Linux','macOS'],rating:4.6,popularity:89,developer:'OpenTTD community',publisher:'OpenTTD community',officialUrl:'https://www.openttd.org/downloads/openttd-releases/latest',description:'Build a transport network in this free, open-source expansion of a classic tycoon game.',tags:['free','open source','simulation'],featured:true,trending:false,recentlyAdded:false,editorsPick:true,screenshots:['railway-junction','harbor-network']},
  {id:'celeste',title:'Celeste',year:2018,genre:['Adventure','Platformer','Indie'],platforms:['PC'],rating:4.9,popularity:99,developer:'Maddy Makes Games, Extremely OK Games',publisher:'Maddy Makes Games',officialUrl:'https://store.steampowered.com/app/504230/',description:'Climb a mountain through precise platforming, hidden routes, and a personal story.',tags:['precision platformer','pixel art','story-rich'],featured:true,trending:true,recentlyAdded:false,editorsPick:true,screenshots:['mountain-ascent','crystal-cavern']},
  {id:'shovel-knight-treasure-trove',title:'Shovel Knight: Treasure Trove',year:2014,genre:['Action','Platformer','Indie','Retro'],platforms:['PC'],rating:4.8,popularity:96,developer:'Yacht Club Games',publisher:'Yacht Club Games',officialUrl:'https://store.steampowered.com/app/250760/',description:'A generous collection of bright, finely tuned adventures inspired by 8-bit classics.',tags:['platformer','pixel art','collection'],featured:true,trending:false,recentlyAdded:false,editorsPick:true,screenshots:['castle-bridge','moonlit-battle']},
  {id:'signalis',title:'SIGNALIS',year:2022,genre:['Action','Adventure','Horror','Indie'],platforms:['PC'],rating:4.9,popularity:98,developer:'rose-engine',publisher:'Humble Games',officialUrl:'https://store.steampowered.com/app/1262350/',description:'Search a stark retro-tech world for answers in a tense science-fiction survival horror.',tags:['survival horror','retro-tech','science fiction'],featured:true,trending:true,recentlyAdded:false,editorsPick:true,screenshots:['facility-corridor','red-signal']},
  {id:'alisa',title:'Alisa',year:2021,genre:['Action','Adventure','Horror','Indie','Retro'],platforms:['PC'],rating:4.3,popularity:78,developer:'Casper Croes',publisher:'Casper Croes',officialUrl:'https://store.steampowered.com/app/1335530/',description:'A handcrafted late-90s survival horror adventure inside a strange Victorian mansion.',tags:['PS1-style','survival horror','fixed camera'],featured:false,trending:false,recentlyAdded:false,editorsPick:true,screenshots:['victorian-hall','doll-gallery']},
  {id:'murder-house',title:'Murder House',year:2020,genre:['Adventure','Horror','Indie'],platforms:['PC'],rating:4.2,popularity:82,developer:'Puppet Combo',publisher:'Puppet Combo',officialUrl:'https://store.steampowered.com/app/1064460/',description:'A VHS-era slasher setup brought to life with crunchy, low-poly survival horror.',tags:['PS1-style','slasher','low-poly'],featured:false,trending:true,recentlyAdded:false,editorsPick:false,screenshots:['abandoned-house','news-van']},
  {id:'fatum-betula',title:'Fatum Betula',year:2020,genre:['Adventure','Horror','Indie','Retro'],platforms:['PC'],rating:4.2,popularity:69,developer:'Bryce Bucher',publisher:'Bryce Bucher',officialUrl:'https://store.steampowered.com/app/1281270/',description:'A surreal low-poly journey through a dreamlike world with a curious central mystery.',tags:['low-poly','surreal','exploration'],featured:false,trending:false,recentlyAdded:false,editorsPick:true,screenshots:['dream-shore','strange-grove']},
  {id:'paratopic',title:'Paratopic',year:2018,genre:['Adventure','Horror','Indie'],platforms:['PC'],rating:4.0,popularity:72,developer:'Arbitrary Metric',publisher:'Arbitrary Metric',officialUrl:'https://store.steampowered.com/app/897030/',description:'A short, fragmented nightmare told through uncanny low-resolution vignettes.',tags:['PS1-style','experimental','short'],featured:false,trending:false,recentlyAdded:false,editorsPick:true,screenshots:['desert-highway','greenhouse-static']},
  {id:'tormented-souls',title:'Tormented Souls',year:2021,genre:['Action','Adventure','Horror','Indie'],platforms:['PC'],rating:4.4,popularity:84,developer:'Dual Effect',publisher:'PQube',officialUrl:'https://store.steampowered.com/app/1367590/',description:'A modern survival horror adventure built around fixed viewpoints and deliberate puzzles.',tags:['survival horror','fixed camera','puzzles'],featured:true,trending:false,recentlyAdded:false,editorsPick:false,screenshots:['winter-mansion','chapel-shadow']},
  {id:'no-one-lives-under-the-lighthouse',title:'No One Lives Under the Lighthouse',year:2020,genre:['Adventure','Horror','Indie'],platforms:['PC'],rating:4.1,popularity:79,developer:'Sowoke Entertainment Bureau',publisher:'Sowoke Entertainment Bureau',officialUrl:'https://store.steampowered.com/app/1254370/',description:'Keep watch on an isolated lighthouse as a spare, low-poly maritime nightmare unfolds.',tags:['PS1-style','atmospheric','first-person'],featured:false,trending:true,recentlyAdded:false,editorsPick:false,screenshots:['lighthouse-cliff','fogbound-shore']},
  {id:'lunacid',title:'Lunacid',year:2023,genre:['Action','Adventure','RPG','Indie','Retro'],platforms:['PC'],rating:4.6,popularity:88,developer:'KIRA LLC',publisher:'KIRA LLC',officialUrl:'https://store.steampowered.com/app/1745510/',description:'Descend into a strange first-person fantasy world inspired by early dungeon crawlers.',tags:['dungeon crawler','PS1-style','dark fantasy'],featured:true,trending:false,recentlyAdded:true,editorsPick:true,screenshots:['moonlit-catacomb','violet-cavern']},
  {id:'northern-journey',title:'Northern Journey',year:2021,genre:['Action','Adventure','Indie','Retro'],platforms:['PC'],rating:4.3,popularity:75,developer:'Slid Studio',publisher:'Slid Studio',officialUrl:'https://store.steampowered.com/app/1639790/',description:'Wander through an unusual Nordic wilderness in an independent first-person adventure.',tags:['first-person','surreal','exploration'],featured:false,trending:false,recentlyAdded:false,editorsPick:true,screenshots:['pine-valley','wooden-hamlet']},
  {id:'amid-evil',title:'AMID EVIL',year:2019,genre:['Action','Indie','Retro'],platforms:['PC'],rating:4.6,popularity:88,developer:'Indefatigable',publisher:'New Blood Interactive',officialUrl:'https://store.steampowered.com/app/673130/',description:'A vivid fantasy shooter with fast combat, magical weapons, and old-school level design.',tags:['boomer shooter','fantasy','FPS'],featured:true,trending:false,recentlyAdded:false,editorsPick:false,screenshots:['emerald-temple','floating-ruins']},
  {id:'ultrakill',title:'ULTRAKILL',year:2020,genre:['Action','Indie','Retro'],platforms:['PC'],rating:4.9,popularity:99,developer:'Arsi Hakita Patala',publisher:'New Blood Interactive',officialUrl:'https://store.steampowered.com/app/1229490/',description:'A high-speed retro-inspired shooter that rewards bold movement and stylish combat.',tags:['boomer shooter','fast-paced','FPS'],featured:true,trending:true,recentlyAdded:false,editorsPick:true,screenshots:['crimson-arena','infernal-machinery']},
  {id:'prodeus',title:'Prodeus',year:2022,genre:['Action','Indie','Retro'],platforms:['PC'],rating:4.4,popularity:85,developer:'Bounding Box Software',publisher:'Humble Games',officialUrl:'https://store.steampowered.com/app/964800/',description:'A modern boomer shooter with handcrafted campaign levels and a bold pixelated look.',tags:['boomer shooter','FPS','level editor'],featured:false,trending:true,recentlyAdded:false,editorsPick:false,screenshots:['industrial-complex','rust-red-hall']},
  {id:'ion-fury',title:'Ion Fury',year:2019,genre:['Action','Indie','Retro'],platforms:['PC'],rating:4.3,popularity:82,developer:'Voidpoint',publisher:'3D Realms',officialUrl:'https://store.steampowered.com/app/562860/',description:'A sharp-edged first-person shooter built with a modernized classic game engine.',tags:['boomer shooter','FPS','90s'],featured:false,trending:false,recentlyAdded:false,editorsPick:false,screenshots:['neon-streets','toxic-plant']},
  {id:'hrot',title:'HROT',year:2023,genre:['Action','Horror','Indie','Retro'],platforms:['PC'],rating:4.5,popularity:81,developer:'Spytihněv',publisher:'Spytihněv',officialUrl:'https://store.steampowered.com/app/824600/',description:'A retro first-person shooter set amid an eerie, surreal take on 1980s Czechoslovakia.',tags:['boomer shooter','FPS','surreal'],featured:false,trending:false,recentlyAdded:true,editorsPick:true,screenshots:['concrete-station','mountain-radio']},
  {id:'devil-daggers',title:'Devil Daggers',year:2016,genre:['Action','Indie','Retro'],platforms:['PC'],rating:4.5,popularity:83,developer:'Sorath',publisher:'Sorath',officialUrl:'https://store.steampowered.com/app/422970/',description:'Survive an unforgiving arena of monsters in a minimalist retro first-person challenge.',tags:['arena shooter','survival','high score'],featured:false,trending:false,recentlyAdded:false,editorsPick:false,screenshots:['stone-arena','dagger-storm']},
  {id:'faith-the-unholy-trinity',title:'FAITH: The Unholy Trinity',year:2022,genre:['Adventure','Horror','Indie','Retro'],platforms:['PC'],rating:4.6,popularity:91,developer:'Airdorf Games',publisher:'New Blood Interactive',officialUrl:'https://store.steampowered.com/app/1179080/',description:'A pixelated occult horror trilogy built around unsettling animation and spare storytelling.',tags:['pixel art','occult','horror'],featured:true,trending:false,recentlyAdded:false,editorsPick:true,screenshots:['chapel-at-dusk','forest-ritual']},
  {id:'iron-lung',title:'Iron Lung',year:2022,genre:['Adventure','Horror','Indie'],platforms:['PC'],rating:4.4,popularity:90,developer:'David Szymanski',publisher:'David Szymanski',officialUrl:'https://store.steampowered.com/app/1846170/',description:'Pilot a tiny submarine through a blood ocean in a compact first-person horror story.',tags:['first-person','submarine','short'],featured:false,trending:true,recentlyAdded:false,editorsPick:true,screenshots:['submarine-console','blood-ocean']},
  {id:'world-of-horror',title:'WORLD OF HORROR',year:2023,genre:['Adventure','RPG','Horror','Indie','Retro'],platforms:['PC'],rating:4.3,popularity:89,developer:'panstasz',publisher:'Ysbryd Games',officialUrl:'https://store.steampowered.com/app/913740/',description:'Investigate a coastal town overtaken by cosmic terrors in a stark monochrome RPG.',tags:['cosmic horror','roguelite','monochrome'],featured:true,trending:false,recentlyAdded:true,editorsPick:false,screenshots:['coastal-town','black-sun']},
  {id:'dread-delusion',title:'Dread Delusion',year:2024,genre:['Adventure','RPG','Indie','Retro'],platforms:['PC'],rating:4.4,popularity:86,developer:'Lovely Hellplace',publisher:'DreadXP',officialUrl:'https://store.steampowered.com/app/1574240/',description:'Explore a fractured fantasy world in an open-ended RPG with deliberately nostalgic 3D.',tags:['PS1-style','open world','first-person'],featured:true,trending:true,recentlyAdded:false,editorsPick:true,screenshots:['floating-isles','fungal-forest']},
  {id:'gloomwood',title:'Gloomwood',year:2022,genre:['Action','Adventure','Horror','Indie','Retro'],platforms:['PC'],rating:4.5,popularity:87,developer:'Dillon Rogers, David Szymanski',publisher:'New Blood Interactive',officialUrl:'https://store.steampowered.com/app/1150760/',description:'Sneak through a fog-choked Victorian city in a stealth horror adventure with late-90s roots.',tags:['stealth','immersive sim','PS1-style'],featured:true,trending:false,recentlyAdded:true,editorsPick:true,screenshots:['foggy-rooftops','gaslit-alley']},
  {id:'eastward',title:'Eastward',year:2021,genre:['Action','Adventure','RPG','Indie'],platforms:['PC'],rating:4.4,popularity:91,developer:'Pixpil',publisher:'Chucklefish, XD',officialUrl:'https://store.steampowered.com/app/977880/',description:'Travel across a richly detailed pixel-art world with a miner and a mysterious girl.',tags:['pixel art','story-rich','adventure'],featured:true,trending:false,recentlyAdded:false,editorsPick:true,screenshots:['underground-market','train-journey']},
  {id:'crosscode',title:'CrossCode',year:2018,genre:['Action','Adventure','RPG','Indie'],platforms:['PC'],rating:4.7,popularity:91,developer:'Radical Fish Games',publisher:'Deck13',officialUrl:'https://store.steampowered.com/app/368340/',description:'A fast action RPG with intricate puzzles and a colorful 16-bit-inspired presentation.',tags:['action RPG','puzzles','pixel art'],featured:true,trending:false,recentlyAdded:false,editorsPick:true,screenshots:['desert-temple','virtual-plaza']},
  {id:'hyper-light-drifter',title:'Hyper Light Drifter',year:2016,genre:['Action','Adventure','RPG','Indie'],platforms:['PC'],rating:4.7,popularity:93,developer:'Heart Machine',publisher:'Heart Machine',officialUrl:'https://store.steampowered.com/app/257850/',description:'Cross a luminous, enigmatic world through brisk combat and environmental discovery.',tags:['action RPG','pixel art','exploration'],featured:true,trending:false,recentlyAdded:false,editorsPick:true,screenshots:['cyan-ruins','desert-machine']},
  {id:'axiom-verge',title:'Axiom Verge',year:2015,genre:['Action','Adventure','Platformer','Indie','Retro'],platforms:['PC'],rating:4.5,popularity:89,developer:'Thomas Happ Games LLC',publisher:'Thomas Happ Games LLC',officialUrl:'https://store.steampowered.com/app/332200/',description:'Explore a mysterious alien world in a classic-inspired science-fiction action adventure.',tags:['metroidvania','pixel art','science fiction'],featured:false,trending:false,recentlyAdded:false,editorsPick:false,screenshots:['alien-cavern','ancient-machine']},
  {id:'gato-roboto',title:'Gato Roboto',year:2019,genre:['Action','Adventure','Platformer','Indie'],platforms:['PC'],rating:4.3,popularity:82,developer:'doinksoft',publisher:'Devolver Digital',officialUrl:'https://store.steampowered.com/app/916730/',description:'Pilot a compact mech through a monochrome, cat-sized metroidvania adventure.',tags:['metroidvania','pixel art','cute'],featured:false,trending:false,recentlyAdded:false,editorsPick:false,screenshots:['mech-bay','moon-base']},
  {id:'owlboy',title:'Owlboy',year:2016,genre:['Adventure','Platformer','Indie'],platforms:['PC'],rating:4.5,popularity:86,developer:'D-Pad Studio',publisher:'D-Pad Studio',officialUrl:'https://store.steampowered.com/app/115800/',description:'Soar through a beautifully animated pixel-art world in a story-led sky adventure.',tags:['pixel art','flight','story-rich'],featured:false,trending:false,recentlyAdded:false,editorsPick:true,screenshots:['cloud-city','storm-front']},
  {id:'infernax',title:'Infernax',year:2022,genre:['Action','Adventure','Platformer','Indie','Retro'],platforms:['PC'],rating:4.4,popularity:80,developer:'Berzerk Studio',publisher:'The Arcade Crew',officialUrl:'https://store.steampowered.com/app/374190/',description:'A bloody castle-sieging action adventure with branching choices and classic 8-bit style.',tags:['action platformer','choices','pixel art'],featured:false,trending:false,recentlyAdded:false,editorsPick:false,screenshots:['castle-approach','cursed-village']},
  {id:'blasphemous',title:'Blasphemous',year:2019,genre:['Action','Adventure','Platformer','Indie'],platforms:['PC'],rating:4.5,popularity:92,developer:'The Game Kitchen',publisher:'Team17',officialUrl:'https://store.steampowered.com/app/774361/',description:'A challenging action platformer through a richly illustrated, dark-fantasy world.',tags:['metroidvania','dark fantasy','pixel art'],featured:true,trending:false,recentlyAdded:false,editorsPick:false,screenshots:['penitent-cathedral','ashen-plaza']},
  {id:'astalon',title:'Astalon: Tears of the Earth',year:2021,genre:['Action','Adventure','Platformer','Indie','Retro'],platforms:['PC'],rating:4.4,popularity:77,developer:'LABS Works',publisher:'DANGEN Entertainment',officialUrl:'https://store.steampowered.com/app/1046400/',description:'Climb a sprawling tower as a party of heroes in a thoughtfully crafted pixel adventure.',tags:['metroidvania','pixel art','exploration'],featured:false,trending:false,recentlyAdded:false,editorsPick:false,screenshots:['tower-gate','stone-chamber']},
  {id:'vvvvvv',title:'VVVVVV',year:2010,genre:['Action','Platformer','Indie','Retro'],platforms:['PC'],rating:4.5,popularity:87,developer:'Terry Cavanagh',publisher:'Terry Cavanagh',officialUrl:'https://store.steampowered.com/app/70300/',description:'Flip gravity through a sharp, minimalist platforming adventure with a chiptune pulse.',tags:['precision platformer','minimalist','chiptune'],featured:false,trending:false,recentlyAdded:false,editorsPick:false,screenshots:['gravity-room','space-station']},
  {id:'freedom-planet',title:'Freedom Planet',year:2014,genre:['Action','Platformer','Indie','Retro'],platforms:['PC'],rating:4.4,popularity:83,developer:'GalaxyTrail',publisher:'GalaxyTrail',officialUrl:'https://store.steampowered.com/app/248310/',description:'Race through colorful stages in a fast, character-driven platforming adventure.',tags:['speed','pixel art','platformer'],featured:false,trending:false,recentlyAdded:false,editorsPick:false,screenshots:['crystal-zone','forest-run']},
  {id:'hollow-knight',title:'Hollow Knight',year:2017,genre:['Action','Adventure','Platformer','Indie'],platforms:['PC'],rating:4.9,popularity:100,developer:'Team Cherry',publisher:'Team Cherry',officialUrl:'https://store.steampowered.com/app/367520/',description:'Delve into a vast, hand-drawn underground kingdom full of secrets and precise combat.',tags:['metroidvania','exploration','hand-drawn'],featured:true,trending:true,recentlyAdded:false,editorsPick:true,screenshots:['fungal-wastes','forgotten-crossroads']},
  {id:'dead-cells',title:'Dead Cells',year:2018,genre:['Action','Platformer','Indie','Retro'],platforms:['PC'],rating:4.8,popularity:98,developer:'Motion Twin',publisher:'Motion Twin',officialUrl:'https://store.steampowered.com/app/588650/',description:'Fight, adapt, and begin again in a brisk action platformer with evolving routes.',tags:['roguelite','metroidvania','pixel art'],featured:true,trending:true,recentlyAdded:false,editorsPick:false,screenshots:['ramparts-at-night','clock-tower']},
  {id:'undertale',title:'Undertale',year:2015,genre:['Adventure','RPG','Indie','Retro'],platforms:['PC'],rating:4.8,popularity:97,developer:'Toby Fox',publisher:'Toby Fox',officialUrl:'https://store.steampowered.com/app/391540/',description:'A playful role-playing adventure where the way you treat its characters matters.',tags:['story-rich','bullet hell','pixel art'],featured:true,trending:false,recentlyAdded:false,editorsPick:true,screenshots:['snowdin-path','underground-lake']},
  {id:'terraria',title:'Terraria',year:2011,genre:['Action','Adventure','Indie','Retro'],platforms:['PC'],rating:4.8,popularity:99,developer:'Re-Logic',publisher:'Re-Logic',officialUrl:'https://store.steampowered.com/app/105600/',description:'Dig, build, craft, and explore a lively 2D sandbox filled with secrets and challenges.',tags:['sandbox','crafting','exploration'],featured:true,trending:true,recentlyAdded:false,editorsPick:false,screenshots:['underground-biome','forest-base']},
  {id:'pizza-tower',title:'Pizza Tower',year:2023,genre:['Action','Platformer','Indie'],platforms:['PC'],rating:4.7,popularity:94,developer:'Tour De Pizza',publisher:'Tour De Pizza',officialUrl:'https://store.steampowered.com/app/2231450/',description:'A wild, expressive platformer built around speed, momentum, and explosive cartoon energy.',tags:['speed','cartoon','platformer'],featured:true,trending:true,recentlyAdded:true,editorsPick:false,screenshots:['pepperman-stage','tower-sprint']},
  {id:'hotshot-racing',title:'Hotshot Racing',year:2020,genre:['Racing','Sports','Indie','Retro'],platforms:['PC'],rating:4.1,popularity:72,developer:'Lucky Mountain Games',publisher:'Curve Digital',officialUrl:'https://store.steampowered.com/app/609920/',description:'Drift through bright, angular tracks in an arcade racer inspired by the 1990s.',tags:['arcade racing','drift','low-poly'],featured:false,trending:false,recentlyAdded:false,editorsPick:false,screenshots:['coastal-circuit','neon-night-race']},
  {id:'slipstream',title:'Slipstream',year:2018,genre:['Racing','Sports','Indie','Retro'],platforms:['PC'],rating:4.3,popularity:74,developer:'ansdor',publisher:'ansdor',officialUrl:'https://store.steampowered.com/app/732810/',description:'A handmade arcade racer with pixel-art landscapes and a strong 1990s soundtrack feel.',tags:['arcade racing','pixel art','drift'],featured:false,trending:false,recentlyAdded:false,editorsPick:true,screenshots:['sunset-highway','coastal-pass']},
  {id:'horizon-chase-turbo',title:'Horizon Chase Turbo',year:2018,genre:['Racing','Sports','Indie','Retro'],platforms:['PC'],rating:4.2,popularity:78,developer:'Aquiris Game Studio',publisher:'Aquiris Game Studio',officialUrl:'https://store.steampowered.com/app/389140/',description:'Race across colorful global routes in a modern tribute to classic arcade driving.',tags:['arcade racing','retro','split screen'],featured:false,trending:false,recentlyAdded:false,editorsPick:false,screenshots:['desert-highway','tropical-coast']},
  {id:'art-of-rally',title:'art of rally',year:2020,genre:['Racing','Sports','Indie'],platforms:['PC'],rating:4.5,popularity:83,developer:'Funselektor Labs Inc.',publisher:'Funselektor Labs Inc.',officialUrl:'https://store.steampowered.com/app/550320/',description:'Drive classic rally-inspired cars through stylized landscapes in a relaxed racing tour.',tags:['rally','low-poly','time trial'],featured:true,trending:false,recentlyAdded:false,editorsPick:true,screenshots:['autumn-rally','mountain-switchbacks']},
  {id:'bomb-rush-cyberfunk',title:'Bomb Rush Cyberfunk',year:2023,genre:['Action','Adventure','Sports','Indie'],platforms:['PC'],rating:4.6,popularity:92,developer:'Team Reptile',publisher:'Team Reptile',officialUrl:'https://store.steampowered.com/app/1353230/',description:'Skate, paint, and chain tricks through a vibrant future-city with its own street-culture style.',tags:['skating','3D','funk'],featured:true,trending:true,recentlyAdded:false,editorsPick:true,screenshots:['city-rooftops','graffiti-plaza']},
  {id:'frogun',title:'Frogun',year:2022,genre:['Action','Adventure','Platformer','Indie','Retro'],platforms:['PC'],rating:4.1,popularity:70,developer:'Molegato',publisher:'Top Hat Studios',officialUrl:'https://store.steampowered.com/app/1575470/',description:'A bright old-school 3D platformer with chunky low-poly scenery and a frog-shaped grappler.',tags:['PS1-style','3D platformer','adventure'],featured:false,trending:false,recentlyAdded:true,editorsPick:false,screenshots:['mystic-ruins','jungle-bridge']}
],
  collections: [
  {title:'PS1-style adventures',genre:'Adventure',tag:'PS1-style',color:'violet'},
  {title:'PS2-era vibes',genre:'Action',tag:'3D',color:'blue'},
  {title:'Retro horror',genre:'Horror',tag:'survival horror',color:'red'},
  {title:'Classic racing',genre:'Racing',tag:'arcade racing',color:'orange'},
  {title:'Pixel adventures',genre:'Adventure',tag:'pixel art',color:'green'},
  {title:'Retro RPGs',genre:'RPG',tag:'RPG',color:'gold'},
  {title:'Indie retro gems',genre:'Indie',tag:'Indie',color:'pink'}
]
};
(() => {
  'use strict';

  const games = RGH_DATA.games;
  games.forEach((game) => {
    // "generated" means original, lightweight geometric art made in-browser.
    if (!game.cover) game.cover = 'generated';
  });
  const genres = ['Action', 'Adventure', 'Racing', 'RPG', 'Horror', 'Fighting', 'Platformer', 'Sports', 'Indie', 'Retro', 'Strategy'];
  const views = new Set(['home','games','categories','popular','details','about','contact','privacy','terms','legal']);
  const palettes = [
    ['#25344a','#101925','#c7f889','#ef8fb4'], ['#442c49','#171522','#f6a77b','#d4fa78'],
    ['#233d42','#111b23','#9ce9e5','#e89bc3'], ['#493431','#1a1821','#ffbd77','#dd7cff'],
    ['#343255','#14182a','#b5fc68','#86dced'], ['#284153','#131a27','#f78baa','#c0f68e'],
    ['#45503c','#161b1b','#f7ca79','#ff8eac'], ['#483a59','#171723','#a3e9ef','#ffb482'],
    ['#4a3340','#1d1720','#f3a47a','#9dff81'], ['#273f57','#141923','#e7ef91','#dd8ed5'],
    ['#3c4543','#151b20','#9df6cb','#f6aa89'], ['#4a334b','#191623','#ff9ab0','#c7f36d']
  ];

  const escapeHTML = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const escapeXML = (value = '') => escapeHTML(value);
  const hash = (value = '') => { let n = 2166136261; for (const ch of String(value)) n = Math.imul(n ^ ch.charCodeAt(0), 16777619); return n >>> 0; };
  const toSvgUrl = (svg) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  const wrapTitle = (title) => {
    const words = String(title).split(/\s+/);
    const rows = ['', ''];
    let row = 0;
    for (const word of words) {
      if (row === 0 && rows[0].length + word.length > 19) row = 1;
      if (row === 1 && rows[1].length + word.length > 22) break;
      rows[row] += `${rows[row] ? ' ' : ''}${word}`;
    }
    return rows.filter(Boolean).map((line, i) => `<text x="34" y="${314 + i * 30}" fill="#f5f4f0" font-family="Arial,sans-serif" font-size="${line.length > 20 ? 19 : 23}" font-weight="800" letter-spacing="-.6">${escapeXML(line)}</text>`).join('');
  };

  // The cover and scene illustrations below are original, generated geometry.
  // They are never presented as the games' real cover art or screenshots.
  const artwork = (game, type = 'cover', variant = 0) => {
    const seed = hash(`${game.id}-${type}-${variant}`);
    const colors = palettes[seed % palettes.length];
    const [sky, deep, light, accent] = colors;
    const sunX = 165 + (seed % 430);
    const sunY = 75 + ((seed >>> 7) % 85);
    const horizon = type === 'cover' ? 231 : 224;
    const base = type === 'cover'
      ? `<path d="M0 ${horizon + 50} 112 ${horizon - 34} 214 ${horizon + 29} 326 ${horizon - 78} 427 ${horizon + 18} 548 ${horizon - 52} 760 ${horizon + 25}V440H0Z" fill="#${deep.slice(1)}"/><path d="M0 ${horizon + 74} 120 ${horizon + 12} 224 ${horizon + 61} 367 ${horizon - 5} 477 ${horizon + 52} 600 ${horizon + 3} 760 ${horizon + 66}V440H0Z" fill="#111721"/>`
      : `<path d="M0 ${horizon + 37} 133 ${horizon - 38} 235 ${horizon + 30} 354 ${horizon - 61} 465 ${horizon + 40} 590 ${horizon - 30} 760 ${horizon + 31}V440H0Z" fill="#${deep.slice(1)}"/><path d="M0 ${horizon + 69} 164 ${horizon + 5} 293 ${horizon + 57} 426 ${horizon - 2} 558 ${horizon + 48} 675 ${horizon + 7} 760 ${horizon + 40}V440H0Z" fill="#111721"/>`;
    const grid = `<path d="M0 270H760M0 304H760M0 348H760M0 401H760M0 270 136 440M170 270 226 440M339 270 341 440M508 270 453 440M678 270 565 440" stroke="#d9fa9b" stroke-opacity=".16" stroke-width="1"/>`;
    const moon = seed % 3 === 0
      ? `<path d="M${sunX - 49} ${sunY - 53}a66 66 0 1 0 93 93 59 59 0 0 1-93-93Z" fill="${light}" opacity=".85"/>`
      : `<circle cx="${sunX}" cy="${sunY}" r="58" fill="${light}" opacity=".88"/><path d="M${sunX - 54} ${sunY + 2}h108m-103 13h98m-87 13h76" stroke="${sky}" stroke-width="5" opacity=".74"/>`;
    const signal = seed % 2 ? `<path d="M612 114v102m-20-67 20-32 20 32" stroke="${accent}" stroke-width="4" opacity=".8"/><circle cx="612" cy="110" r="5" fill="${accent}"/>` : `<path d="M610 113h77v50h-77z" fill="#101720" stroke="${accent}" stroke-opacity=".6"/><path d="M621 127h53m-53 12h36m-36 12h46" stroke="${light}" stroke-width="3" opacity=".8"/>`;
    const label = type === 'cover'
      ? `<rect x="0" y="282" width="760" height="158" fill="url(#shade)"/><text x="35" y="293" fill="${light}" fill-opacity=".9" font-family="Arial,sans-serif" font-size="10" font-weight="800" letter-spacing="2">RETROGAMEHUB  /  ORIGINAL GUIDE ART</text>${wrapTitle(game.title)}<text x="35" y="393" fill="#d1d6df" font-family="Arial,sans-serif" font-size="12" letter-spacing="1">${escapeXML((game.genre || []).slice(0, 2).join('  /  ').toUpperCase())}</text>`
      : `<rect x="0" y="382" width="760" height="58" fill="url(#shade)"/><text x="25" y="411" fill="#ecf2f5" font-family="Arial,sans-serif" font-size="12" font-weight="700" letter-spacing="1">${escapeXML(game.title.toUpperCase())} — ILLUSTRATIVE SCENE ${String(variant + 1).padStart(2,'0')}</text><text x="25" y="429" fill="${light}" fill-opacity=".83" font-family="Arial,sans-serif" font-size="9" letter-spacing="1.1">ORIGINAL GUIDE ART · NOT AN IN-GAME SCREENSHOT</text>`;
    const extras = Array.from({length: 17}, (_, i) => {
      const x = (seed + i * 89) % 750;
      const y = 21 + ((seed >>> (i % 13)) + i * 37) % 235;
      const size = 1 + ((seed >>> (i % 17)) % 3);
      return `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${i % 4 === 0 ? accent : '#eef5ec'}" opacity=".${4 + i % 5}"/>`;
    }).join('');
    return toSvgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440"><defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="${sky}"/><stop offset="1" stop-color="#201d36"/></linearGradient><linearGradient id="shade" x2="0" y2="1"><stop stop-color="#0b1018" stop-opacity=".05"/><stop offset="1" stop-color="#0b1018" stop-opacity=".97"/></linearGradient><radialGradient id="aura"><stop stop-color="${accent}" stop-opacity=".44"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient></defs><rect width="760" height="440" fill="url(#sky)"/><ellipse cx="${sunX}" cy="${sunY}" rx="170" ry="145" fill="url(#aura)"/>${moon}${extras}${base}<path d="M310 248 201 440h366L414 248Z" fill="${accent}" fill-opacity=".14"/>${grid}${signal}<path d="M307 285h143M279 321h195M243 365h269M204 411h352" stroke="${light}" stroke-opacity=".36" stroke-width="2"/>${label}</svg>`);
  };

  function imageSource(game, mode = 'cover', variant = 0) {
    if (mode === 'cover' && game.cover && game.cover !== 'generated') return game.cover;
    if (mode === 'scene' && Array.isArray(game.screenshots) && game.screenshots[variant] && /^assets\//.test(game.screenshots[variant])) return game.screenshots[variant];
    return artwork(game, mode, variant);
  }

  function routeName() {
    const route = window.location.hash.slice(1).split('?')[0];
    return views.has(route) ? route : 'home';
  }

  function routeParams() {
    const query = window.location.hash.slice(1).split('?').slice(1).join('?');
    return new URLSearchParams(query);
  }

  function routeHash(view, params = new URLSearchParams()) {
    const query = params.toString();
    return `#${view}${query ? `?${query}` : ''}`;
  }

  function navigateTo(view, params = new URLSearchParams(), replace = false) {
    const hash = routeHash(view, params);
    if (replace && window.location.protocol !== 'file:' && window.location.hash !== hash) {
      window.history.replaceState({}, '', `${window.location.pathname}${window.location.search}${hash}`);
      activateRoute();
      return;
    }
    if (window.location.hash !== hash) window.location.hash = hash;
    else activateRoute();
  }

  function renderShell() {
    const header = document.getElementById('site-header');
    const footer = document.getElementById('site-footer');
    if (header) {
      const nav = [
        ['home','Home'],['games','Games'],['categories','Categories'],['popular','Popular'],['about','About']
      ];
      header.className = 'site-header';
      header.innerHTML = `<div class="nav-shell"><a class="brand" href="#home" aria-label="RetroGameHub home"><img src="assets/icons/mark.svg" width="37" height="37" alt=""><span>Retro<b>Game</b>Hub</span></a><nav class="nav-links" id="primary-nav" aria-label="Main navigation">${nav.map(([key,label]) => `<a href="#${key}" data-nav-view="${key}">${label}</a>`).join('')}<form class="mobile-search" data-site-search role="search"><label class="visually-hidden" for="mobile-site-search">Search games</label><input id="mobile-site-search" name="q" type="search" placeholder="Search the archive"><button type="submit">Search ↗</button></form></nav><form class="nav-search" data-site-search role="search"><label class="visually-hidden" for="nav-site-search">Search games</label><span aria-hidden="true">⌕</span><input id="nav-site-search" name="q" type="search" placeholder="Quick search"><button type="submit" aria-label="Search games">↗</button></form><button class="nav-menu-button" id="nav-menu-button" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open navigation"><span></span><span></span></button></div>`;
      header.querySelectorAll('[data-site-search]').forEach((form) => form.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = new FormData(form).get('q') || '';
        const params = new URLSearchParams();
        if (query) params.set('q', query);
        navigateTo('games', params);
      }));
      const menuButton = document.getElementById('nav-menu-button');
      const navLinks = document.getElementById('primary-nav');
      menuButton.addEventListener('click', () => {
        const expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!expanded));
        menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
        navLinks.classList.toggle('open', !expanded);
      });
      navLinks.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
          menuButton.setAttribute('aria-expanded','false');
          menuButton.setAttribute('aria-label','Open navigation');
          navLinks.classList.remove('open');
        }
      });
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          menuButton.setAttribute('aria-expanded','false');
          menuButton.setAttribute('aria-label','Open navigation');
          navLinks.classList.remove('open');
        }
      });
    }
    if (footer) {
      footer.className = 'site-footer';
      footer.innerHTML = `<div class="wrap footer-main"><div class="footer-brand"><a class="brand" href="#home"><img src="assets/icons/mark.svg" width="37" height="37" alt=""><span>Retro<b>Game</b>Hub</span></a><p>A field guide to retro-inspired games, modern indie favorites, and the feeling of finding a world that sticks with you.</p></div><div class="footer-column"><strong>Explore the archive</strong><div class="footer-links"><a href="#games">All games</a><a href="#categories">Categories</a><a href="#popular">Popular guide</a><a href="#games?collection=editors">Editor’s picks</a><a href="#about">About the hub</a><a href="#contact">Contact</a></div></div><div class="footer-column"><strong>Site information</strong><div class="footer-links"><a href="#privacy">Privacy policy</a><a href="#terms">Terms of use</a><a href="#legal">Legal notice</a><a href="#contact">Contact details</a></div></div></div><div class="wrap legal-strip"><span>© ${new Date().getFullYear()} RetroGameHub. An independent discovery guide.</span><span>Game names and trademarks belong to their owners. We do not host or distribute unauthorized game files.</span></div>`;
    }
  }

  function safeOfficialUrl(game) {
    if (!game.officialUrl) return '';
    try {
      const url = new URL(game.officialUrl);
      const allowed = url.protocol === 'https:' && (url.hostname === 'store.steampowered.com' || url.hostname === 'openttd.org' || url.hostname.endsWith('.openttd.org'));
      return allowed ? url.href : '';
    } catch { return ''; }
  }

  function badge(game) {
    if (game.editorsPick) return '<span class="game-badge pick">Editor’s pick</span>';
    if (game.trending) return '<span class="game-badge">Trending</span>';
    if (game.recentlyAdded) return '<span class="game-badge">New in hub</span>';
    return '';
  }

  function gameCard(game, options = {}) {
    const compact = options.compact ? ' compact' : '';
    const genresText = (game.genre || []).slice(0, 2).join(' / ');
    const tags = (game.tags || []).slice(0, 2).map((tag) => `<span class="tag-chip">${escapeHTML(tag)}</span>`).join('');
    return `<article class="game-card${compact}"><a class="game-card-link" href="#details?id=${encodeURIComponent(game.id)}" aria-label="View details for ${escapeHTML(game.title)}"><div class="game-art"><img src="${imageSource(game)}" alt="Original geometric guide artwork for ${escapeHTML(game.title)}" loading="lazy" decoding="async">${badge(game)}</div><div class="game-card-body"><div class="game-topline"><h3 class="game-title">${escapeHTML(game.title)}</h3><span class="rating" title="RetroGameHub editorial guide score, not a user-review aggregate"><span aria-hidden="true">★</span> ${Number(game.rating).toFixed(1)}</span></div><div class="game-meta"><span>${escapeHTML(genresText || 'Indie')}</span><span>${escapeHTML(game.year)} · ${escapeHTML((game.platforms || []).join(', '))}</span></div><div class="tag-row">${tags}</div><div class="game-card-action"><span>Game details</span><span aria-hidden="true">↗</span></div></div></a></article>`;
  }

  function renderCards(target, list, options = {}) {
    if (!target) return;
    target.innerHTML = list.map((game) => gameCard(game, options)).join('');
  }

  function renderHome() {
    const count = document.querySelector('[data-game-count]');
    if (count) count.textContent = games.length;
    renderCards(document.getElementById('featured-grid'), games.filter((game) => game.featured).slice(0, 4));
    renderCards(document.getElementById('trending-grid'), games.filter((game) => game.trending).sort((a,b) => b.popularity - a.popularity).slice(0, 4), {compact:true});
    renderCards(document.getElementById('recent-grid'), games.filter((game) => game.recentlyAdded).sort((a,b) => b.year - a.year).slice(0, 4), {compact:true});
    renderCards(document.getElementById('editors-grid'), games.filter((game) => game.editorsPick).slice(0, 4), {compact:true});
    const collectionTarget = document.getElementById('collection-grid');
    if (collectionTarget) collectionTarget.innerHTML = RGH_DATA.collections.map((collection) => `<a class="collection-card" data-color="${escapeHTML(collection.color)}" href="#games?genre=${encodeURIComponent(collection.genre)}&amp;tag=${encodeURIComponent(collection.tag)}"><small>FIELD COLLECTION</small><strong>${escapeHTML(collection.title)}</strong><span class="collection-arrow" aria-hidden="true">↗</span></a>`).join('');
  }

  function normalized(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase();
  }

  function renderGamesPage() {
    const grid = document.getElementById('games-grid');
    if (!grid) return;
    const search = document.getElementById('game-search');
    const genreSelect = document.getElementById('genre-filter');
    const platformSelect = document.getElementById('platform-filter');
    const periodSelect = document.getElementById('period-filter');
    const sortSelect = document.getElementById('sort-filter');
    const genreSet = [...new Set(games.flatMap((game) => game.genre || []))].sort((a,b) => (genres.indexOf(a) < 0 ? 99 : genres.indexOf(a)) - (genres.indexOf(b) < 0 ? 99 : genres.indexOf(b)) || a.localeCompare(b));
    const platformSet = [...new Set(games.flatMap((game) => game.platforms || []))].sort((a,b) => ['PC','Linux','macOS','PlayStation','PS1','PS2','PS3','PS4','PS5','Xbox','Nintendo','Switch'].indexOf(a) - ['PC','Linux','macOS','PlayStation','PS1','PS2','PS3','PS4','PS5','Xbox','Nintendo','Switch'].indexOf(b));
    if (grid.dataset.initialized !== 'true') {
      genreSelect.innerHTML = '<option value="">All genres</option>' + genreSet.map((genre) => `<option value="${escapeHTML(genre)}">${escapeHTML(genre)}</option>`).join('');
      platformSelect.innerHTML = '<option value="">All platforms</option>' + platformSet.map((platform) => `<option value="${escapeHTML(platform)}">${escapeHTML(platform)}</option>`).join('');
      grid.dataset.initialized = 'true';
    }
    const params = routeParams();
    search.value = params.get('q') || '';
    const requestedGenre = params.get('genre') || '';
    genreSelect.value = genreSet.includes(requestedGenre) ? requestedGenre : '';
    const requestedPlatform = params.get('platform') || '';
    platformSelect.value = platformSet.includes(requestedPlatform) ? requestedPlatform : '';
    const requestedPeriod = params.get('period') || '';
    periodSelect.value = ['classic','2000s','2010s','2020s'].includes(requestedPeriod) ? requestedPeriod : '';
    const requestedSort = params.get('sort') || (params.get('collection') === 'editors' ? 'rating' : 'popular');
    sortSelect.value = ['rating','newest','oldest','alphabetical'].includes(requestedSort) ? requestedSort : 'popular';
    const emptyState = document.getElementById('empty-state');
    const count = document.getElementById('results-count');
    const clearSearch = document.getElementById('search-clear');
    const active = document.getElementById('active-filter');

    function update() {
      const currentParams = routeParams();
      const collectionEditors = currentParams.get('collection') === 'editors';
      const requestedTag = currentParams.get('tag') || '';
      const query = normalized(search.value.trim());
      clearSearch.classList.toggle('visible', Boolean(search.value));
      let result = games.filter((game) => {
        const searchable = normalized([game.title, (game.genre || []).join(' '), (game.platforms || []).join(' '), game.developer, game.publisher, (game.tags || []).join(' '), game.description].join(' '));
        const year = Number(game.year);
        const periodMatch = !periodSelect.value || (periodSelect.value === 'classic' && year < 2000) || (periodSelect.value === '2000s' && year >= 2000 && year < 2010) || (periodSelect.value === '2010s' && year >= 2010 && year < 2020) || (periodSelect.value === '2020s' && year >= 2020);
        const tagMatch = !requestedTag || (game.tags || []).some((tag) => normalized(tag) === normalized(requestedTag)) || (game.genre || []).some((tag) => normalized(tag) === normalized(requestedTag));
        return (!query || searchable.includes(query)) && (!genreSelect.value || (game.genre || []).includes(genreSelect.value)) && (!platformSelect.value || (game.platforms || []).includes(platformSelect.value)) && periodMatch && (!collectionEditors || game.editorsPick) && tagMatch;
      });
      switch (sortSelect.value) {
        case 'rating': result.sort((a,b) => b.rating - a.rating || b.popularity - a.popularity); break;
        case 'newest': result.sort((a,b) => b.year - a.year || a.title.localeCompare(b.title)); break;
        case 'oldest': result.sort((a,b) => a.year - b.year || a.title.localeCompare(b.title)); break;
        case 'alphabetical': result.sort((a,b) => a.title.localeCompare(b.title)); break;
        default: result.sort((a,b) => b.popularity - a.popularity || a.title.localeCompare(b.title));
      }
      renderCards(grid, result);
      const shown = result.length;
      count.textContent = `${shown} ${shown === 1 ? 'game' : 'games'} ${query || genreSelect.value || platformSelect.value || periodSelect.value || requestedTag || collectionEditors ? 'match your filters' : 'in the archive'}`;
      emptyState.hidden = shown !== 0;
      active.innerHTML = [query && `Search: ${search.value.trim()}`, genreSelect.value, platformSelect.value, periodSelect.value, requestedTag && `Collection: ${requestedTag}`, collectionEditors && 'Editor’s picks'].filter(Boolean).map((item) => `<span class="active-chip">${escapeHTML(item)}</span>`).join('');
    }

    if (grid.dataset.eventsBound !== 'true') {
      [genreSelect,platformSelect,periodSelect,sortSelect].forEach((control) => control.addEventListener('change', update));
      search.addEventListener('input', update);
      document.getElementById('game-search-form').addEventListener('submit', (event) => { event.preventDefault(); update(); });
      clearSearch.addEventListener('click', () => { search.value = ''; search.focus(); update(); });
      const reset = () => {
        search.value = ''; genreSelect.value = ''; platformSelect.value = ''; periodSelect.value = ''; sortSelect.value = 'popular';
        navigateTo('games', new URLSearchParams(), true);
        update(); search.focus();
      };
      document.getElementById('clear-filters').addEventListener('click', reset);
      document.getElementById('empty-clear').addEventListener('click', reset);
      grid.dataset.eventsBound = 'true';
    }
    update();
  }

  function renderCategoryPage() {
    const container = document.getElementById('category-grid');
    if (!container) return;
    const available = genres.filter((genre) => games.some((game) => (game.genre || []).includes(genre)));
    if (container.dataset.initialized !== 'true') {
      container.innerHTML = available.map((genre,index) => {
        const total = games.filter((game) => (game.genre || []).includes(genre)).length;
        return `<button class="category-tile" type="button" data-genre="${escapeHTML(genre)}" aria-pressed="false"><span>COLLECTION ${String(index+1).padStart(2,'0')}</span><strong>${escapeHTML(genre)}</strong><em>${total} ${total === 1 ? 'game' : 'games'} ↗</em></button>`;
      }).join('');
      container.dataset.initialized = 'true';
    }
    const preview = document.getElementById('category-preview');
    const showGenre = (genre, writeHistory = true) => {
      if (!available.includes(genre)) return;
      const matched = games.filter((game) => (game.genre || []).includes(genre)).sort((a,b) => b.popularity - a.popularity).slice(0,4);
      document.getElementById('category-preview-title').textContent = `${genre} games`;
      document.getElementById('category-all-link').href = `#games?genre=${encodeURIComponent(genre)}`;
      renderCards(document.getElementById('category-games-grid'), matched, {compact:true});
      preview.hidden = false;
      container.querySelectorAll('.category-tile').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.genre === genre)));
      if (writeHistory) {
        const params = new URLSearchParams();
        params.set('genre', genre);
        navigateTo('categories', params);
      }
    };
    if (container.dataset.eventsBound !== 'true') {
      container.addEventListener('click', (event) => {
        const button = event.target.closest('[data-genre]');
        if (button) showGenre(button.dataset.genre);
      });
      container.dataset.eventsBound = 'true';
    }
    const requested = routeParams().get('genre') || '';
    if (available.includes(requested)) showGenre(requested, false);
    else {
      preview.hidden = true;
      container.querySelectorAll('.category-tile').forEach((button) => button.setAttribute('aria-pressed', 'false'));
    }
  }

  function renderPopularPage() {
    const target = document.getElementById('popular-grid');
    if (target) renderCards(target, games.slice().sort((a,b) => b.popularity - a.popularity || a.title.localeCompare(b.title)));
  }

  function meta(name, content, property = false) {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    const tag = document.querySelector(selector);
    if (tag) tag.setAttribute('content', content);
  }

  function renderDetailsPage() {
    const root = document.getElementById('game-detail');
    if (!root) return;
    const id = routeParams().get('id');
    const game = games.find((item) => item.id === id);
    if (!game) {
      document.title = 'Game not found — RetroGameHub';
      meta('description','That game is not in the RetroGameHub catalog.');
      document.getElementById('breadcrumb-title').textContent = 'Not found';
      root.innerHTML = `<section class="empty-state"><span aria-hidden="true">⌁</span><h1>Game not found.</h1><p>It may have moved out of the archive. Try a fresh search instead.</p><a class="button button-primary" href="#games">Browse all games <span aria-hidden="true">↗</span></a></section>`;
      return;
    }
    const officialUrl = safeOfficialUrl(game);
    const genreList = (game.genre || []).map((genre) => `<span class="tag-chip">${escapeHTML(genre)}</span>`).join('');
    const pageDescription = `${game.description} Browse details and follow the official game page on RetroGameHub.`;
    document.title = `${game.title} — Game guide — RetroGameHub`;
    meta('description',pageDescription);
    meta('og:title',`${game.title} — RetroGameHub`,true);
    meta('og:description',pageDescription,true);
    meta('og:image','assets/images/social-card.png',true);
    document.getElementById('breadcrumb-title').textContent = game.title;
    root.innerHTML = `<section class="detail-hero"><div class="detail-cover"><img src="${imageSource(game)}" alt="Original geometric guide artwork for ${escapeHTML(game.title)}" decoding="async"></div><div class="detail-copy"><div class="detail-kicker"><span>${escapeHTML((game.genre || [])[0] || 'Indie')}</span><span>Added to the guide ${game.recentlyAdded ? 'recently' : ''}</span></div><h1>${escapeHTML(game.title)}</h1><p class="detail-description">${escapeHTML(game.description)}</p><div class="detail-stats"><div class="detail-stat"><span>Release year</span><strong>${escapeHTML(game.year)}</strong></div><div class="detail-stat"><span>Genre</span><strong>${escapeHTML((game.genre || []).join(', '))}</strong></div><div class="detail-stat"><span>Platform</span><strong>${escapeHTML((game.platforms || []).join(', '))}</strong></div><div class="detail-stat"><span>Developer</span><strong>${escapeHTML(game.developer || 'Not listed')}</strong></div><div class="detail-stat"><span>Publisher</span><strong>${escapeHTML(game.publisher || 'Not listed')}</strong></div><div class="detail-stat"><span>Guide score / 5</span><strong title="RetroGameHub editorial guide score">★ ${Number(game.rating).toFixed(1)} <span class="muted">· index ${Number(game.popularity)}/100</span></strong></div></div><div class="detail-genres">${genreList}</div><div class="detail-actions">${officialUrl ? `<a class="button button-primary" href="${escapeHTML(officialUrl)}" target="_blank" rel="noopener noreferrer">View official game page <span aria-hidden="true">↗</span></a>` : '<span class="official-coming">Official page coming soon</span>'}<span class="official-note">Opens the official store or project page. RetroGameHub does not host game files.</span></div></div></section><section class="detail-gallery" aria-label="Illustrative game artwork"><div class="gallery-title"><h2>World notes</h2><span>Original guide illustrations · not in-game screenshots</span></div><div class="gallery-grid">${(game.screenshots || ['wide','detail']).slice(0,2).map((scene,index) => `<figure class="gallery-item"><img src="${imageSource(game,'scene',index)}" alt="Original conceptual scene illustration for ${escapeHTML(game.title)}: ${escapeHTML(scene.replaceAll('-',' '))}" loading="lazy" decoding="async"><figcaption>Guide illustration 0${index+1} · ${escapeHTML(scene.replaceAll('-',' '))}</figcaption></figure>`).join('')}</div></section>`;
    const related = games.filter((candidate) => candidate.id !== game.id && (candidate.genre || []).some((genre) => (game.genre || []).includes(genre))).sort((a,b) => b.popularity - a.popularity).slice(0,4);
    renderCards(document.getElementById('related-grid'), related, {compact:true});
  }

  function activateRoute() {
    const current = routeName();
    document.body.dataset.page = current;
    document.querySelectorAll('[data-view]').forEach((view) => { view.hidden = view.dataset.view !== current; });
    document.querySelectorAll('[data-nav-view]').forEach((link) => {
      if (link.dataset.navView === current) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    const view = document.getElementById(`view-${current}`);
    if (view) {
      document.title = view.dataset.routeTitle || 'RetroGameHub — Find your next retro-inspired game';
      meta('description', view.dataset.routeDescription || 'Discover retro-inspired games and follow their official pages.');
      meta('og:title', view.dataset.routeOgTitle || document.title, true);
      meta('og:description', view.dataset.routeOgDescription || view.dataset.routeDescription || '', true);
      meta('og:image', 'assets/images/social-card.png', true);
    }
    if (current === 'games') renderGamesPage();
    if (current === 'categories') renderCategoryPage();
    if (current === 'details') renderDetailsPage();
    window.scrollTo(0, 0);
  }

  renderShell();
  renderHome();
  renderGamesPage();
  renderCategoryPage();
  renderPopularPage();
  renderDetailsPage();
  window.addEventListener('hashchange', activateRoute);
  activateRoute();
})();

