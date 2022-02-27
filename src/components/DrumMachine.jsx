import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { pads } from '../data/pads';
import '../styles/DrumMachine.css'
import {DrumPad} from './DrumPad'

const DrumMachine = () => {

    const [power, setPower] = useState(false);
    const [volume, setVolume] = useState(1);


      const stop = () => {
        setPower(!power)
        let btnPower = document.getElementById('btnPower');
        if (power == true) {
            btnPower.classList.remove('btn-danger');
            btnPower.classList.add('btn-success');
        } else {
            btnPower.classList.remove('btn-success');
            btnPower.classList.add('btn-danger');
            document.getElementsByClassName('drum-pad').style.boxShadow = '2px 2px 2px 1px #2222229e'
        }
     }

     const handleVolumeChange = e => {
        setVolume(e.target.value)
        console.log(volume);
      }

  return (
    <div id='drum-machine'>
        <h1 className='text-center mb-3'>Drum Machine</h1>
        <Row>
            <Col>
                <Row sm={3}>
                    {
                        pads.map((pad, index) => (
                                <Col>
                                    <DrumPad key={index}
                                        pad={pad}
                                        volume={volume}
                                        // onClick={() => padClick(pad.key)}
                                    />
                                </Col>
                            ))
                    }
                </Row>
            </Col>

            <Col className='text-center my-5'>
                <Button 
                    type='button' 
                    id='btnPower' 
                    onClick={stop}
                    className='btn-success w-25'
                >
                        {power ? 'OFF' : 'ON'}
                </Button> 
                  <Form.Group className='mt-5'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
                          <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
                          <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
                          <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
                      </svg>
                      <input type='range' step='0.01' min={0} max={1} value={volume} onChange={handleVolumeChange}  />
                  </Form.Group>
            </Col>
        </Row>
    </div>
  )
}

export default DrumMachine;
