import React from 'react';
import { Box } from '@material-ui/core'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Record = (props) => {
  if (!props.task) return null;

  // 録音データのURLはStudio Flowの中で設定されているはずなので、それを取得する
  const recordingUrl = `${props.task.attributes?.conversations?.media[0].url}.mp3`
    || '';
  if (!recordingUrl) return null;

  
  return (
    <Box width="100%" height="300px">
      <AudioPlayer
        className='audioPlayer'
        src={recordingUrl}
        preload='none'
        onPlay={(e) => console.log('onPlay')}
      />
    </Box>
  )
}

export default Record;