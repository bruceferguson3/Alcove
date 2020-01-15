import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

const Footer = props => {
    return (
        <footer className="footer">
            <Navbar id='footerNavBar' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <div id='footerBrandContainer' onClick={props.returnToTop}>
                    <Navbar.Brand id='footerBrand'>Alcove</Navbar.Brand>
                </div>
                <div id='footerDescription'>
                    <h6 id='footerDescriptionParagraph1'>
                        Going to catch the red dot today going to catch the red dot today fight own tail
                        for the fat cat sat on the mat bat away with paws. Chirp at birds steal the warm
                        chair right after you get up, pee on walls it smells like breakfast for fight own
                        tail lay on arms while you're using the keyboard, check cat door for ambush 10
                        times before coming in.
                    </h6>
                    <h6 id='footerDescriptionParagraph2'>
                        Sitting in a box human is washing you why halp oh the
                        horror flee scratch hiss bite stare at guinea pigs, and eat from dog's food, but
                        get my claw stuck in the dog's ear destroy couch, yet make meme, make cute face.
                        Walk on keyboard hide from vacuum cleaner. Kitty ipsum dolor sit amet, shed
                        everywhere shed everywhere stretching attack your ankles chase the red dot,
                        hairball run catnip eat the grass sniff rub face on owner yet chase mice.
                    </h6>
                </div>
                <div id="footerNamesContainer">
                    <div>The Alcove Team: </div>
                    <div><a className='headerLinks' href="https://github.com/mfuechec">Mark Fuechec</a></div>
                    <div><a className='headerLinks' href="https://github.com/bruceferguson3">Bruce Ferguson III</a></div>
                    <div><a className='headerLinks' href="https://github.com/ishtahir">Ish Tahir</a></div>
                    <div><a className='headerLinks' href="https://github.com/nmalesa">Natalia Malesa</a></div>
                    <div><a className='headerLinks' href="https://github.com/JCDiaz1201">Jonathan Diaz</a></div>
                    <div><a className='headerLinks' href="https://github.com/timsand">Tim Sanderson</a></div>
                    <div><a className='headerLinks' href="https://github.com/KytraScript">Kytra Murphree</a></div>
                    <div><a className='headerLinks' href="https://github.com/tmchandler">Tom Chandler</a></div>
                </div>
            </Navbar>
        </footer>
    )
}

export default Footer;