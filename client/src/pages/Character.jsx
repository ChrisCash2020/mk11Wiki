export default function CharacterPage() {
  const data = {
    name: 'Scorpion',
    about: `Hanzo Hasashi, (波佐志 半蔵) better known as Scorpion (全蠍人 Zenkatsujin, "Full Scorpion Man"), is a resurrected ninja in the Mortal Kombat fighting game series as well as the mascot of the games. He is one of the very few original characters debuting in the first Mortal Kombat arcade game. He holds the distinction, along with Raiden and Sub-Zero (in one form or another), of appearing in every generation of Mortal Kombat games as a playable character.

Throughout the series, Scorpion has been a misguided antagonist after his resurrection, following those on the side of evil out of revenge and anger over the death of his family and clan. After being restored to his Human form and learning the truth about their demise, he has been a recurring supporting character for the series.`,
    overview: {
      name: 'Hanzo Hasashi',
      gender: 'Male',
      first_game: 'Mortal Kombat',
      last_game: 'Mortal Kombat XI 2019',
      birth_place: 'Earthream (Japan)',
    },
    appearance: `Scorpion appeared with the traditional palette swap look he and the other ninjas had. He kept this appearance from the first MK to MK4 after which he bore two swords on his back and his kunai attached to a rope tied to his belt. He has white eyes with his mask on. Without his mask, his head is a (sometimes flaming) skull. In MK4, he is further distinguished by his skeletal motif, mostly in the mask, with bone-like structures lacing his uniform. As of MKX, he has regained his humanity and human identity, depicted with a goatee and mustache and can switch between his human and familiar spectre-like appearance at will.

Scorpion unmasked is known as Inferno Scorpion. This design was first featured in MK: Shaolin Monks and reappears in the Challenge Tower, fighting Kano in the Netherrealm. His costumes incorporate his namesake more and more with each game, particularly in one of his latest redesigns. The hilts of his swords now resemble the stingers of scorpions, while his shoulder pads and masks are also molded after scorpions.

Scorpion's yellow costume is said to have mocked not only Sub-Zero, but also the Lin Kuei, as Takeda (who was a member of the Lin Kuei) developed Ninjitsu, which he considered a superior fighting style to what the Lin Kuei had. He quickly left the Lin Kuei and formed the Shirai Ryu clan, the Lin Kuei's main enemies.

In Mortal Kombat X, Scorpion’s appearance is more like an assassin rather than a ninja. It has a very detailed mask and chest piece, sometimes his eyes can be seen orange rather than white.

In Injustice: Gods Among Us, in which Scorpion made his appearance as a playable guest character, his appearance is completely original to the game. He now gains an armor with a gem in the middle of its chest looking more like a legendary champion than a ninja, while retaining the scorpion like swords on his back just like the ones from his appearance in Mortal Kombat (2011).`,
    trivia: [
      `This is the first game in which Scorpion's teleport, called Hell Port in the game, can be avoided simply by ducking. The attack can strike ducking opponents if it is amplified, however.`,
      `Scorpion is one of the two playable characters to be playable in two chapters of the Story Mode alongside Liu Kang, with the respective first chapters they appeared with their partners (Sub-Zero to Scorpion and Liu Kang to Kung Lao), before went solo in the respective next chapters with special cases (Scorpion has both iterations of himself playable in two halves, while Liu Kang is playable under his new story-only Thunder-Fire God form).`,
      `Scorpion is one of three characters with more than two Brutality Victory Poses besides the default versions. The first was Sub-Zero and the second being Shang Tsung.`,
      `Scorpion is one of three characters with more than two Brutality Victory Poses besides the default versions. The first was Sub-Zero and the second being Shang Tsung.`,
      `Many of the Brutalities in MK11 reference older Fatalities, in this case, Scorpion's Brutality Crispy is a clear reference to his Toasty! Fatality.`,
      `Scorpion, on two occasions, shouts his "COME HERE" and "GET OVER HERE" lines in the Story Mode. He speaks the former if Sub-Zero in chosen during their shared Chapter where Hanzo fights the Cyber Lin Kuei and speaking the latter when saving Kharon from D'Vorah.`,
      `When interacting with Spawn, both Hellspawns reference past games they have made guest appearances in, Scorpion referencing Injustice: Gods Amongst Us and Spawn referencing his guest appearance in Soulcalibur II, with Spawn saying his "soul still burns".`,
    ],
    image:
      'https://i.pinimg.com/originals/84/8d/69/848d69036a775d91ce9879dfda061410.jpg',
    reference: 'https://mortalkombat.fandom.com/wiki/Scorpion',
  };
  return (
    <main>
      <div id='document-container-navbar'>
        <img alt='Scorpion' src={data.image} />
        <section>
          <h2>General Information</h2>
          <div className='overview-container'>
            <div className='overview-key'>
              <div className='key'>Real Name</div>
              <div className='key-desc'>{data.overview.name}</div>
            </div>
            <div className='overview-key'>
              <div className='key'>Gender</div>
              <div className='key-desc'>{data.overview.gender}</div>
            </div>
            <div className='overview-key'>
              <div className='key'>Birthplace</div>
              <div className='key-desc'>{data.overview.birth_place}</div>
            </div>
            <div className='overview-key'>
              <div className='key'>First Game</div>
              <div className='key-desc'>{data.overview.first_game}</div>
            </div>
            <div className='overview-key'>
              <div className='key'>Last Game</div>
              <div className='key-desc'>{data.overview.last_game}</div>
            </div>
          </div>
        </section>
      </div>
      <div id='document-container-text'>
        <h1>About</h1>
        <p>{data.about}</p>

        <h1>Appearance</h1>
        <p>{data.appearance}</p>
        <h1 id='What you should already know'>Trivia</h1>
        {data.trivia.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
        <h1>Reference</h1>
        <a href={data.reference}>Mortal Kombat Fandom</a>
        <br />
        <br />
      </div>
    </main>
  );
}
