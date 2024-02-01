import  { useRef } from 'react';
import { moon, sun, music } from '../../assets/Shareimg';

const LeftBtn = () => {
  let test_music = true;
  const controle_music = useRef<HTMLAudioElement>(null);

  const play_music = () => {
    const musicref = document.querySelector('.playmusic');

    if (musicref) {
      if (test_music) {
        musicref.innerHTML = "Pause ⏸";
        test_music = !test_music;
        if (controle_music.current) controle_music.current.play();
      } else {
        musicref.innerHTML = "Play  <b>►</b>";
        test_music = !test_music;
        if (controle_music.current) controle_music.current.pause();
      }
    }
  };

  return (
    <div className='leftbtn'>
      {/*==========play screen mode=======*/}
      <div className='playmode'>
        <span>Mode</span>
        <img width="20px" src={moon} alt="music" />
      </div>

      {/*=======play music========*/}
      <audio ref={controle_music} loop >
        <source src='../../public/sound/music_web.mp3' type="audio/mpeg"/>
      </audio>
      <div className='playmusic' onClick={play_music}>
        <span>Music</span>
        <img width="20px" src={music} alt="music" />
      </div>
    </div>
  );
}

export default LeftBtn;
