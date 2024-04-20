import { useState} from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';


export default function CameraComponent () {
  const [photo, setPhoto] = useState<string | null>(null);


  function handleTakePhoto (dataUri:any) {
    // Do stuff with the photo...
    setPhoto(dataUri)
  }
  return (
    <>
      {!photo &&  <Camera
          idealFacingMode='environment'
          onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri)}}
        />}

      <div>
        {photo && <img src={photo} alt="Captured" style={{ maxWidth: '80%', maxHeight: '300px'}} />}
        <p style={{display:"flex",justifyContent:"flex-end", backgroundColor:"yellow"}}>Save Receipt?</p>
      </div>

    </>

  );
}