import React, { Component } from 'react'
import './Constel.scss'
import Navbar from '../../components/Navbar/Navbar'

import aries from '../../photos/aries.jpg'
import taurus from '../../photos/taurus.jpg'
import gemini from '../../photos/gemini.jpg'
import cancer from '../../photos/cancer.jpg'
import leo from '../../photos/leo.jpg'
import virgo from '../../photos/virgo.jpg'
import libra from '../../photos/libra.jpg'
import scorpio from '../../photos/scorpio.png'
import sagitarrius from '../../photos/sagitarrius.jpg'
import capricorn from '../../photos/capricorn.jpg'
import aquarius from '../../photos/aquarius.jpg'
import pisces from '../../photos/pisces.jpg'

import { Modal, Button } from 'react-bootstrap'
import axios from 'axios';
import Particles from 'react-particles-js'


export default class Constellations extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show1: false,
            faves: [],
            constellations: []
        };
    }
    componentDidMount() {
        axios.get(`/api/constellations`).then(
            res => {
                this.setState({ constellations: res.data })
            }
        )
        this.getConstellations()
    }



    getConstellations = () => {
        axios.get(`/api/constellations`).then(res => {
            console.log(res.data)
            this.setState({ constellations: res.data })
        }
        )
    }


    handleClose(show) {
        this.setState({ [show]: false });
        // window.scrollTo(50, 50)
    }

    handleShow(show) {
        this.setState({ [show]: true });
        window.scrollTo(0, 0)
    }

    addToFaves(faves) {
        this.setState(({ faves: faves }))
    }

    modalStyle = () => {

        return {
            position: 'fixed',
            width: 400,
            zIndex: 1040,

            border: '1px solid #e5e5e5',
            backgroundColor: 'white',
            boxShadow: '0 5px 15px rgba(0,0,0,.5)',
            padding: 20
        };
    };



    render() {
        let displayConstel = this.state.constellations.map((constel, index) => {
            return (
                <div key={index}>
                    <h1>
                        {constel.constel_name}
                    </h1>
                    <img className='constel_pic_img' src={constel.constel_pic} />
                </div>
            )
        })
        
        return (

            <div>
                <Navbar />
                {/* <div className='particles'> */}
                <figure id='constellation-container'>
                    <div id='displayConstel'>
                        {/* {displayConstel} */}

                        <div className='constel-left-row'>

                            <img className='constel-page-img' onClick={() => this.handleShow('show1')} src={aries} alt='' />
                            <Modal className='modalWindow' show={this.state.show1}>
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show1')}>
                                    </div>
                                    <figure className='constel-modal' >
                                        <Button className='close-modal' onClick={() => this.handleClose('show1')}>X</Button>
                                        <Button className='favorite-btn' onClick={() => this.addToFaves('faves')}> Favorite </Button>
                                        <img className='constel-modal-img' src={aries} alt=''></img>
                                        <h1 className='constel-name'> Aries
                                        <hr />
                                        </h1>
                                        <p className='constel-text'>Date of Birth: March 21 -April 19</p>
                                        <p className='constel-descript'> Best visible at 21:00 (9 p.m.) during the month of December. Aries is one of the constellations of the zodiac. It is located in the northern celestial hemisphere between Pisces to the west and Taurus to the east. The name Aries is Latin for ram, and its symbol is (♈), representing a ram's horns.</p>
                                    </figure>
                                </div>
                            </Modal>


                            <img className='constel-page-img' onClick={() => this.handleShow('show4')} src={cancer} alt='' />
                            <Modal className='modalWindow' show={this.state.show4} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show4')}>
                                    </div>
                                    <figure className='constel-modal' >
                                        <Button className='close-modal' onClick={() => this.handleClose('show4')}>X</Button>
                                        <img className='constel-modal-img' src={cancer} alt=''></img>
                                        <h1 className='constel-name'> Cancer
                                        <hr />
                                        </h1>
                                        <p className='constel-text'>Date of Birth: May 21 - June 21</p>
                                        <p className='constel-descript'> Cancer (♋️) is the fourth astrological sign in the Zodiac, originating from the constellation of Cancer. It spans 90° and 120° celestial longitude. Under the tropical zodiac, the Sun transits this area between approximately June 21 and July 23, and under the sidereal zodiac, the Sun transits this area between approximately July 16 and August 15.
                                          In astrology, Cancer is the cardinal sign of the Water trigon, which is made up of Cancer, Pisces, and Scorpio. It is not considered a negative sign, whose domicile, or ruling planet, is the Moon. Though some depictions of Cancer feature a lobster, the sign is most often represented by the crab, also a woman by the ocean has been depicted near based on the Karkinos, a giant crab that harassed Hercules, during his fight with the Hydra.</p>
                                    </figure>
                                </div>
                            </Modal>


                            <img className='constel-page-img' onClick={() => this.handleShow('show7')} src={libra} alt='' />
                            <Modal className='modalWindow' show={this.state.show7} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show7')}>
                                    </div>
                                    <figure className='constel-modal' >
                                        <Button className='close-modal' onClick={() => this.handleClose('show7')}>X</Button>
                                        <img className='constel-modal-img' src={libra} alt=''></img>
                                        <h1 className='constel-name'> Libra
                                        <hr />
                                        </h1>
                                        <p className='constel-text'> Date of Birth: September 23 - October 23 </p>
                                        <p className='constel-descript'>
                                            Libra (♎) is the seventh astrological sign in the Zodiac. It spans 180°–210° celestial longitude. Under the tropical zodiac, the Sun transits this area on average between (northern autumnal equinox) September 23 and October 23 and under the sidereal zodiac, the sun currently transits the constellation of Libra from approximately October 31 to November 22. The symbol of the scales is based on the Scales of Justice held by Themis, the Greek personification of divine law and custom. She became the inspiration for modern depictions of Lady Justice. The ruling planet of Libra is Venus.Libra and aquarius are the only zodiac constellations in the sky represented by inanimate objects.The other eleven signs are represented either as an animal or mythological characters throughout history.</p>
                                    </figure>
                                </div>
                            </Modal>

                            <img className='constel-page-img' onClick={() => this.handleShow('show10')} src={capricorn} alt='' />
                            <Modal className='modalWindow' show={this.state.show10} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show10')}>
                                    </div>
                                    <figure className='constel-modal' >
                                        <Button className='close-modal' onClick={() => this.handleClose('show10')}>X</Button>
                                        <img className='constel-modal-img' src={capricorn} alt=''></img>
                                        <h1 className='constel-name'> Capricorn
                                        <hr />
                                        </h1>
                                        <p className='constel-text'> Date of Birth: December 22 - January 19 </p>
                                        <p className='constel-descript'>
                                            Capricorn (♑) is the tenth astrological sign in the zodiac, originating from the constellation of Capricornus, the horned goat. It spans the 270–300th degree of the zodiac, corresponding to celestial longitude. Under the tropical zodiac, the sun transits this area from about December 21 to January 21 the following year, and under the sidereal zodiac, the sun transits the constellation of Capricorn from approximately January 16 to February 16. In astrology, Capricorn is considered an earth sign, negative sign, and one of the four cardinal signs. Capricorn is said to be ruled by the planet Saturn. In Vedic Astrology Capricorn was associated with the Crocodile but modern astrologers consider Capricorn as Sea goat. Its symbol is based on the Sumerians' primordial god of wisdom and waters, Enki, with the head and upper body of a goat and the lower body and tail of a fish. Later known as Ea in Akkadian and Babylonian mythology, Enki was the god of intelligence, creation, crafts; magic; water, seawater and lakewater.
                                        </p>
                                    </figure>
                                </div>
                            </Modal>
                        </div>

                        <div className='constel-middle-row'>


                            <img className='constel-page-img' onClick={() => this.handleShow('show2')} src={taurus} alt='' />
                            <Modal className='modalWindow' show={this.state.show2} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show2')}>
                                    </div>
                                    <figure className='constel-modal'>
                                        <Button className='close-modal' onClick={() => this.handleClose('show2')}>X</Button>
                                        <img className='constel-modal-img' src={taurus} alt=''></img>
                                        <h1 className='constel-name'> Taurus
                                        <hr />
                                        </h1>
                                        <p className='constel-text'> Date of Birth: April 20 - May 20</p>
                                        <p className='constel-descript'>
                                            Taurus (Latin for "The Bull") is the second astrological sign in the present zodiac. It spans from 30° to 60° of the zodiac. This sign belongs to the Earth element or triplicty, and therefore has a feminine or negative polarity. It has a Fixed modality, quality or quadruplicity. It is a Venus-ruled sign just like Libra. It is the sign where the Moon has its exaltation at exactly 3°. The Sun transits in the sign of Taurus from approximately April 21 until May 21 in western astrology. People born between these dates, depending on which system of astrology they subscribe to, may be called Taureans.Taurus was the first sign of the zodiac established among the ancient Mesopotamians, who called it as "The Great Bull of Heaven", because it was the constellation through which the sun rose on the vernal equinox at that time. Cults centered around sacred bulls began to form in Assyria, Egypt, and Crete during The Age of Taurus, or "The Age of Earth, Agriculture, and the Bull".
                                        </p>
                                    </figure>
                                </div>
                            </Modal>

                            <img className='constel-page-img' onClick={() => this.handleShow('show5')} src={leo} alt='' />
                            <Modal className='modalWindow' show={this.state.show5} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show5')}>
                                    </div>
                                    <figure className='constel-modal'>
                                        <Button className='close-modal' onClick={() => this.handleClose('show5')}>X</Button>
                                        <img className='constel-modal-img' src={leo} alt=''></img>
                                        <h1 className='constel-name'> Leo
                                        <hr />
                                        </h1>
                                        <p className='constel-text'> Date of Birth: July 23 - August 22 </p>
                                        <p className='constel-descript'>
                                            Leo (♌) (Greek: Λέων, Leōn), is the fifth astrological sign of the zodiac, originating from the constellation of Leo. It comes after Cancer and before Virgo. The traditional Western zodiac associates Leo with the period between July 23 and August 22, and the sign spans the 120th to 150th degree of celestial longitude.
                                            Leo is a fixed sign along with Taurus, Scorpio, and Aquarius. Under the tropical zodiac, the Sun transits this area on average between July 23 and August 22 each year, and under the sidereal zodiac, the Sun currently transits this area from approximately August 16 to September 15. The symbol of the lion is based on the Nemean lion, a lion with an impenetrable hide. It is a northern sign and its opposite southern sign is Aquarius.
                                        </p>
                                    </figure>
                                </div>
                            </Modal>

                            <img className='constel-page-img' onClick={() => this.handleShow('show8')} src={scorpio} alt='' />
                            <Modal className='modalWindow' show={this.state.show8} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show8')}>
                                    </div>
                                    <figure className='constel-modal' >
                                        <Button className='close-modal' onClick={() => this.handleClose('show8')}>X</Button>
                                        <img className='constel-modal-img' src={scorpio} alt=''></img>
                                        <h1 className='constel-name'> Scorpio
                                        <hr />
                                        </h1>
                                        <p className='constel-text'> Date of Birth: October 24 - November 22 </p>
                                        <p className='constel-descript'>
                                            Scorpio is the eighth astrological sign in the Zodiac, originating from the constellation of Scorpius. It spans 210°–240° ecliptic longitude. Under the tropical zodiac (most commonly used in Western astrology), the Sun transits this area on average from October 23 to November 22. Under the sidereal zodiac (most commonly used in Hindu astrology), the Sun is in Scorpio from approximately November 16 to December 15. Depending on which zodiac system one uses, an individual born under the influence of Scorpio may be called a Scorpio or a Scorpion.
                                        </p>
                                    </figure>
                                </div>
                            </Modal>


                            <img className='constel-page-img' onClick={() => this.handleShow('show11')} src={aquarius} alt='' />
                            <Modal className='modalWindow' show={this.state.show11} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show11')}>
                                    </div>
                                    <figure className='constel-modal' >
                                        <Button className='close-modal' onClick={() => this.handleClose('show11')}>X</Button>
                                        <img className='constel-modal-img' src={aquarius} alt=''></img>
                                        <h1 className='constel-name'> Aquarius
                                        <hr />
                                        </h1>
                                        <p className='constel-text'> Date of Birth: January 20 - February 18 </p>
                                        <p className='constel-descript'>
                                            Aquarius is a constellation of the zodiac, situated between Capricornus and Pisces. Its name is Latin for "water-carrier" or "cup-carrier", and its symbol is Aquarius.svg , a representation of water. Aquarius is one of the oldest of the recognized constellations along the zodiac (the Sun's apparent path). It was one of the 48 constellations listed by the 2nd century astronomer Ptolemy, and it remains one of the 88 modern constellations. It is found in a region often called the Sea due to its profusion of constellations with watery associations such as Cetus the whale, Pisces the fish, and Eridanus the river.
                                            At apparent magnitude 2.9, Beta Aquarii is the brightest star in the constellation.
                                        </p>
                                    </figure>
                                </div>
                            </Modal>
                        </div>

                        <div className='constel-right-row'>

                            <img className='constel-page-img' onClick={() => this.handleShow('show3')} src={gemini} alt='' />
                            <Modal className='modalWindow' show={this.state.show3} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show3')}>
                                    </div>
                                    <figure className='constel-modal'>
                                        <Button className='close-modal' onClick={() => this.handleClose('show3')}>X</Button>
                                        <img className='constel-modal-img' src={gemini} alt=''></img>
                                        <h1 className='constel-name'> Gemini
                                        <hr />
                                        </h1>
                                        <p className='constel-text'> Date of Birth: May 21 - June 21</p>
                                        <p className='constel-descript'>
                                            Gemini (♊) is the third astrological sign in the zodiac, originating from the constellation of Gemini. Under the tropical zodiac, the sun transits this sign between about May 21 and June 21. Gemini is represented by the twins Castor and Pollux, known as the Dioscuri, who were granted shared half-immortality after the death of the mortal brother, Castor.
                                        </p>
                                    </figure>
                                </div>
                            </Modal>

                            <img className='constel-page-img' onClick={() => this.handleShow('show6')} src={virgo} alt='' />
                            <Modal className='modalWindow' show={this.state.show6} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show6')}>
                                    </div>
                                    <figure className='constel-modal'>
                                        <Button className='close-modal' onClick={() => this.handleClose('show6')}>X</Button>
                                        <img className='constel-modal-img' src={virgo} alt=''></img>
                                        <h1 className='constel-name'> Virgo
                                        <hr />
                                        </h1>
                                        <p className='constel-text'> Date of Birth: August 23 - September 22 </p>
                                        <p className='constel-descript'>
                                            Virgo (♍), is the sixth astrological sign in the Zodiac. It spans the 150-180th degree of the zodiac. Under the tropical zodiac, the Sun transits this area on average between August 23 and September 22, and the Sun transits the constellation of Virgo from approximately September 16 to October 30. Individuals born during these dates, depending on which system of astrology they subscribe to, may be called Virgos or Virgoans. The symbol of the maiden is based on Astraea. In Greek mythology, she was the last immortal to abandon Earth at the end of the Silver Age, when the gods fled to Olympus – hence the sign's association with Earth.
                                        </p>
                                    </figure>
                                </div>
                            </Modal>

                            <img className='constel-page-img' onClick={() => this.handleShow('show9')} src={sagitarrius} alt='' />
                            <Modal className='modalWindow' show={this.state.show9} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show9')}>
                                    </div>
                                    <figure className='constel-modal'>
                                        <Button className='close-modal' onClick={() => this.handleClose('show9')}>X</Button>
                                        <img className='constel-modal-img' src={sagitarrius} alt=''></img>
                                        <h1 className='constel-name'> Sagittarius
                                        <hr />
                                        </h1>
                                        <p className='constel-text'> Date of Birth: November 23 - December 21 </p>
                                        <p className='constel-descript'>
                                            Sagittarius (♐) is the ninth astrological sign, which is associated with the constellation Sagittarius and spans 240–270th degrees of the zodiac. Under the tropical zodiac, the sun transits this sign between approximately November 23 and December 21. Greek mythology associates Sagittarius with the centaur Chiron, who mentored Achilles, a Greek hero of the Trojan War, in archery.
                                            Sagittarius, the half human and half horse, is the centaur of mythology, the learned healer whose higher intelligence forms a bridge between Earth and Heaven. Also known as the Archer, Sagittarius is represented by the symbol of a bow and arrow.
                                        </p>
                                    </figure>
                                </div>
                            </Modal>

                            <img className='constel-page-img' onClick={() => this.handleShow('show12')} src={pisces} alt='' />
                            <Modal className='modalWindow' show={this.state.show12} >
                                <div className='background'>
                                    <div className='backdrop' onClick={() => this.handleClose('show12')}>
                                    </div>
                                    <figure className='constel-modal' >
                                        <Button className='close-modal' onClick={() => this.handleClose('show12')}>X</Button>
                                        <img className='constel-modal-img' src={pisces} alt=''></img>
                                        <h1 className='constel-name'> Pisces
                                        <hr />
                                        </h1>
                                        <p className='constel-text'> Date of Birth: February 19 - March 20 </p>
                                        <p className='constel-descript'>
                                            Pisces (♓️)is the twelfth astrological sign in the Zodiac. It spans 330° to 360° of celestial longitude. Under the tropical zodiac the sun transits this area between February 19 and March 20,  and under the sidereal zodiac, the sun transits this area between approximately March 13 and April 13. In classical interpretations, the symbol of the fish is derived from the centaurs, who aided Aphrodite when she was born from the sea.
                                            According to some tropical astrologers, the current astrological age is the Age of Pisces, while others maintain that it is the Age of Aquarius.
                                        </p>
                                    </figure>
                                </div>
                            </Modal>


                        </div>
                        Constellations
                    </div>
                </figure>
                {/* </div> */}
            </div >
        );
    }
}








