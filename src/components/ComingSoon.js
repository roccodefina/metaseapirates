import React from "react";
import styled from "styled-components";

const Socials = styled.div`
  display: flex;
  justify-content: center;
`

const FirstClue = styled.div`
    width: 80px;
    height: 50px;

    position: absolute;
    top: ${props => props.position.h};
    left: ${props => props.position.w};
    cursor: pointer;
    z-index: 100;
`

const SecondClue = styled.div`
    width: 80px;
    height: 50px;

    position: absolute;
    top: ${props => props.position.h};
    right: ${props => props.position.w};
    cursor: pointer;
    z-index: 100;
`

const ThirdClue = styled.div`
    width: 80px;
    height: 50px;
    position: absolute;
    top: ${props => props.position.h};
    left: ${props => props.position.w};
    cursor: pointer;
    z-index: 100;
    text-align: center;
`
const positions = [
    [
        {
            h:'20vh',
            w:'10vw'
        },
        {
            h: '40vh',
            w: '20vw'
        },
        {
            h: '70vh',
            w: '20vw'
        },
    ],
    [
        {
            h:'70vh',
            w:'80vw'
        },
        {
            h: '70vh',
            w: '70vw'
        },
        {
            h: '80vh',
            w: '80vw'
        },
    ],
    [
        {
            h:'5vh',
            w:'50vw'
        },
        {
            h: '80vh',
            w: '80vw'
        },
        {
            h: '20vh',
            w: '20vw'
        },
    ],
    [
        {
            h:'80vh',
            w:'10vw'
        },
        {
            h: '30vh',
            w: '10vw'
        },
        {
            h: '50vh',
            w: '20vw'
        },
    ],
]



const ComingSoon = () => {
    const [firstClue, setFirstClue] = React.useState(false);
    const [secondClue, setSecondClue] = React.useState(false);
    const [thirdClue, setThirdClue] = React.useState(false);
    const [cluePosition, setCluePosition] = React.useState(positions[0])


    React.useEffect(() => {
        setCluePosition(positions[Math.floor(Math.random() * 4)])
    }, [])


    const revealFirstClue = e => {
        setFirstClue(true)
    }

    const revealSecondClue = e => {
        if (firstClue) {
            setSecondClue(true)
        }
    }

    const revealThirdtClue = e => {
        if (secondClue) {
            setThirdClue(true)
        }
    }

    return (
        <>
            <FirstClue position={cluePosition[0]} onClick={e => (revealFirstClue(e))}>
                <img hidden={firstClue ? false : true} width={70} src="/config/images/X.png" />
            </FirstClue>
            <SecondClue position={cluePosition[1]} hidden={firstClue ? false : true} onClick={e => (revealSecondClue(e))}>
                <img hidden={secondClue ? false : true} width={70} src="/config/images/X.png" />

            </SecondClue>
            <ThirdClue position={cluePosition[2]} hidden={secondClue ? false : true} onClick={e => (revealThirdtClue(e))}>
                <img hidden={thirdClue ? false : true} width={70} src="/config/images/X.png" />
                <a hidden={thirdClue ? false : true} style={{ marginRight: '20px' }} href="https://discord.gg/gBwsaEtC" target="_blank" rel="noreferrer">
                    <img width="40px" src="/config/images/discord.png" alt="" />
                </a>
            </ThirdClue>
            <video style={{ height: '90vh', width: '100%' }} loop={true} autoPlay id="vid" muted playsInline>
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