import React from "react";
import styled from "styled-components";

const Socials = styled.div`
  display: flex;
  justify-content: center;
`

const FirstClue = styled.div`
    width: 80px;
    height: 50px;

    background: black;
    position: absolute;
    top: 20vh;
    left: 10vw;
    // cursor: pointer;
    z-index: 100;
`

const SecondClue = styled.div`
    width: 80px;
    height: 50px;

    background: black;
    position: absolute;
    top: 40vh;
    right: 20vw;
    cursor: pointer;
    z-index: 100;
`

const ThirdClue = styled.div`
    width: 80px;
    height: 50px;
    background: black;
    position: absolute;
    top: 70vh;
    left: 20vw;
    cursor: pointer;
    z-index: 100;
`



const ComingSoon = () => {
    const [firstClue, setFirstClue] = React.useState(false);
    const [secondClue, setSecondClue] = React.useState(false);
    const [thirdClue, setThirdClue] = React.useState(false);

    const revealFirstClue = e => {
        console.log('First')
        setFirstClue(false)
    }

    const revealSecondClue = e => {
        if (firstClue) {
            console.log('Second')
            setSecondClue(true)
        }
    }

    const revealThirdtClue = e => {
        if (secondClue) {
            console.log('Third')
            setThirdClue(true)
        }
    }

    return (
        <>
            <FirstClue onClick={e => (revealFirstClue(e))}>
                <p hidden={firstClue ? false : true} style={{ color: 'white' }}>First Clue</p>
            </FirstClue>
            <SecondClue hidden={firstClue ? false : true} onClick={e => (revealSecondClue(e))}>
                <p hidden={secondClue ? false : true} style={{ color: 'white' }}>Second Clue</p>
            </SecondClue>
            <ThirdClue hidden={secondClue ? false : true} onClick={e => (revealThirdtClue(e))}>
                <p hidden={thirdClue ? false : true} style={{ color: 'white' }}>Third Clue</p>
                <a hidden={thirdClue ? false : true} style={{ marginRight: '20px' }} href="https://discord.gg/tvxuvbFgvg" target="_blank" rel="noreferrer">
                    <img width="40px" src="/config/images/discord.png" alt="" />
                </a>
            </ThirdClue>
            <video style={{ height: '90vh', width: '100%' }} loop="true" autoplay="autoplay" id="vid" muted>
                <source src="/config/images/bg.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <Socials>
                <a style={{ marginLeft: '20px' }} href="https://twitter.com/MetaseaPirates" target="_blank" rel="noreferrer">
                    <img width="40px" src="/config/images/twitter.png" alt="" />
                </a>
            </Socials>
        </>
    )
}

export default ComingSoon;