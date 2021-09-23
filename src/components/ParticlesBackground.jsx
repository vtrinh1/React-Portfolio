import React from 'react'
import Particles from 'react-particles-js';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  margin-top: -100vh;
  height: 100vh;
  width: 99vw;
  z-index: -1;
`

function ParticlesBackground() {
  return (
    <Container>
        <Particles
            height="100vh"
            width="99vw"
                params={{
                    "particles": {
                        "number": {
                            "value": 40,
                            "density": {
                                "enable": false
                            }
                        },
                        "color": {
                            "value": "#FF6F3C"
                        },
                        "size": {
                            "value": 10,
                            "random": true,
                            "animation": {
                                "speed": 1,
                                "minimumValue ": 1
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "none",
                            "outModes": {
                                "default": "out",
                                "bottom": "bounce"
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 200,
                                "size": -1,
                                "opacity": 0
                            },
                            "repulse": {
                                "easing": "ease-in-out",
                                "distance": 300,
                                "duration": 1,
                                "speed": 1
                            }
                        }
                    }
                }} />
        </Container>
  )
}

export default ParticlesBackground
