import './Routes.css'
import mapButton from './MapButton.png'
import { Link } from 'react-router-dom';
import thorIsland from './RoutesImages/thorIsland.avif'
import oro from './RoutesImages/oro.png'
import monks from './RoutesImages/monks.png'
import monk2 from './RoutesImages/monk2.png'
import lighthousemar from './RoutesImages/lighthousemar.png'
import sirens from './RoutesImages/sirens.png'
import volcano from './RoutesImages/volcano.png'
import mud from './RoutesImages/mud.png'
import lighthousemonks from './RoutesImages/lighthousemonk.png'
import redisland from './RoutesImages/redisland.png'
import port from './RoutesImages/port.png'
import port2 from './RoutesImages/port2.png'


//import { CartaNautica } from './cartaNautica.tsx'

export const RoutesBoats = () => {
    return (
        <div className="Container-Rouetes">
                <div className='Titles'><h1>NORTHERN ROUTES</h1></div>

                <div className="right">
                    <div className="images">
                        <img src={thorIsland} alt="imagen 1 norte" />
                    </div>
                    <div className="text">
                        <h1>Cape of Tempests</h1>
                        <p>
                            A massive, jagged promontory that acts as a lightning rod for the region. Sailors claim the thunder here sounds like a giant hammer striking an anvil. It is the most feared passage due to the sudden "Gale Squalls" that can capsize a merchant brig in seconds.
                        </p>
                    </div>
                </div>

                <div className="left">
                    <div className="images">
                        <img src={oro} alt="imagen 2 norte" />
                    </div>
                    <div className="text">
                        <h1>Glimmering Cove</h1>
                        <p>
                            A crescent-shaped bay hidden behind two "Twin Fang" rocks. The sand is composed of crushed pyrite and quartz, making the beach sparkle so intensely at noon that it can blind lookouts. Rumors persist that a vein of true gold runs beneath the seabed.
                        </p>
                    </div>
                </div>

                <div className="right">
                    <div className="images">
                        <img src={monks} alt="imagen 3 norte" />
                    </div>
                    <div className="text">
                        <h1>St. Peter of the Precipice</h1>
                        <p>
                            A fortified stone monastery perched dangerously on a 200-meter vertical drop. The monks here ring massive bronze bells during heavy fog to guide ships, though they demand a "tithe" of supplies from anyone who uses their light to navigate.
                        </p>
                    </div>
                </div>

                <div className="left">
                    <div className="images">
                        <img src={monk2} alt="imagen 4 norte" />
                    </div>
                    <div className="text">
                        <h1>Hermit's Islet</h1>
                        <p>
                            A lonely pillar of rock topped with a crumbling watchtower. It is said a disgraced navigator lives there alone, keeping a record of every ship that passes. No one knows how he gets his water, but his signals are always eerily accurate.
                        </p>
                    </div>
                </div>

                <div className="right">
                    <div className="images">
                        <img src={lighthousemar} alt="imagen 5 norte" />
                    </div>
                    <div className="text">
                        <h1>Starpoint Light</h1>
                        <p>
                            An ancient, slender lighthouse built of white marble. Unlike modern lighthouses, its magical lens rotates slowly, casting a beam that shifts from sapphire blue to blood red depending on the strength of the incoming tide.
                        </p>
                    </div>
                </div>

                <div className="left">
                    <div className="images">
                        <img src={sirens} alt="imagen 6 norte" />
                    </div>
                    <div className="text">
                        <h1>White Siren Bay</h1>
                        <p>
                            Famous for its milky-white, opaque waters caused by underwater chalk deposits. Ships seem to float on a cloud here. Folklore warns of "Sirens" who mimic the voices of lost crew members to lure ships into the shallow reefs.
                        </p>
                    </div>
                </div>

                <div className='Title'><h1>SOUTHERN ROUTES</h1></div>

                <div className="right">
                    <div className="images">
                        <img src={volcano} alt="imagen 1 sur" />
                    </div>
                    <div className="text">
                        <h1>Fire-Gull Reef</h1>
                        <p>These volcanic rocks are bright crimson and orange. They host thousands of "Fire-Gulls"—birds with plumage so bright they look like embers flying through the sky. The guano here is a valuable, albeit smelly, resource for alchemists.</p>
                    </div>
                </div>

                <div className="left">
                    <div className="images">
                        <img src={mud} alt="imagen 2 sur" />
                    </div>
                    <div className="text">
                        <h1>Old Silver Inlet</h1>
                        <p>A wide, muddy bay where the legendary "Silver Fleet" was rumored to have dumped its cargo during a historic siege. Treasure hunters frequently dive here, though most find nothing but mud and stinging jellyfish.</p>
                    </div>
                </div>

                <div className="right">
                    <div className="images">
                        <img src={lighthousemonks} alt="imagen 3 sur" />
                    </div>
                    <div className="text">
                        <h1>Eternal Sentry Light</h1>
                        <p>A squat, iron-clad lighthouse built on a lone rock. It is maintained by the "Silent Order," a group of monks who have taken a vow of silence and only communicate via complex flag signals during the day</p>
                    </div>
                </div>

                <div className="left">
                    <div className="images">
                        <img src={redisland} alt="imagen 4 sur" />
                    </div>
                    <div className="text">
                        <h1>Oxblood Bluffs</h1>
                        <p>Towering cliffs of deep red sandstone that bleed iron-rich water into the sea after it rains. The contrast between the blood-red rock and the turquoise Mediterranean water is both stunning and intimidating to newcomers.</p>
                    </div>
                </div>

                <div className="right">
                    <div className="images">
                        <img src={port} alt="imagen 5 sur" />
                    </div>
                    <div className="text">
                        <h1>Daybreak Harbor</h1>
                        <p>The easternmost port of the south. It is built on a series of floating piers and bridges. It is the first place to see the sun, and tradition dictates that no trade can begin until the first ray hits the "Sun-Dial Tower" in the center of the harbor.</p>
                    </div>
                </div>

                <div className="left">
                    <div className="images">
                        <img src={port2} alt="imagen 6 sur" />
                    </div>
                    <div className="text">
                        <h1>Emerald Vale Bay</h1>
                        <p>A deep, calm inlet surrounded by dense forests of ancient Aleppo pines. The trees grow so close to the water that the entire bay looks like a giant emerald. It is the best place in the North to repair hulls and gather fresh timber.</p>
                    </div>
                </div>
            <Link to="/nautical-charter" className="map-button-link">
                <img src={mapButton} alt="map button" className="buttonImg" />
            </Link>
        </div>
    )
}