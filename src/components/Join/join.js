import React from 'react';
import './join.css';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import {SiGoogleclassroom} from "react-icons/si"
import {SiGooglehangoutsmeet} from "react-icons/si"
import {GiVideoConference} from "react-icons/gi"

function Join() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='join__section'>
        <div className='join__wrapper'>
          <h1 className='join__heading'>Join Room</h1>
          <div className='join__container'>
            <div className='join__container-card'>
              <div className='join__container-cardInfo'>
                <div className='icon'>
                  <SiGooglehangoutsmeet />
                </div>
                <h3>Join Room</h3>
                <h4>Room 1</h4>
                <p>People in room: </p>
                <form>
                  <button>Join</button>
                </form>
              </div>
            </div>
            <div className='join__container-card'>
              <div className='join__container-cardInfo'>
                <div className='icon'>
                  <SiGoogleclassroom />
                </div>
                <h3>Join Room</h3>
                <h4>Room 2</h4>
                <p>People in room: </p>
                <form>
                  <button>Join</button>
                </form>
              </div>
            </div>
            <div className='join__container-card'>
              <div className='join__container-cardInfo'>
                <div className='icon'>
                  <GiVideoConference />
                </div>
                <h3>Join Room</h3>
                <h4>Room 3</h4>
                <p>People in room: </p>
                <form>
                  <button>Join</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Join;