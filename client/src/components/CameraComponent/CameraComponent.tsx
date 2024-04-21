import "./index.css"
import { useState} from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

type Ingredient = {
  name: string;
  quantity: number;
  expirationDate: Date;
  weight: number
}

type CameraProps = {
  pantryIngredients: Ingredient[];
  setPantryIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
}

export default function CameraComponent (props:CameraProps) {
  const [photo, setPhoto] = useState<string | null>(null);
  const {pantryIngredients, setPantryIngredients} = props

  function handleTakePhoto (dataUri:any) {
    // Do stuff with the photo...
    setPhoto(dataUri)
  }

  async function saveReceipt() {
    console.log("saving receipt")
    if (!photo) {
      console.error("No photo to save.");
      return;
    }
  
    // Convert data URI to binary data
    const base64Image = photo.split(",")[1];
    const binaryImage = atob(base64Image);
  
    // Convert binary to Uint8Array
    const imageArray = new Uint8Array(binaryImage.length);
    for (let i = 0; i < binaryImage.length; i++) {
      imageArray[i] = binaryImage.charCodeAt(i);
    }
  
    try {
      // Send POST request to the server
      // const response = await fetch('https://dum-7r21.onrender.com/scanreceipt', {
      //   method: 'POST',
      //   mode: "no-cors",
      //   credentials: "same-origin",
      //   headers: {
      //     'Content-Type': 'image/png', // Set content type to PNG
      //   },
      //   body: imageArray, // Set the binary image data as the request body
      // });

      // Specify the URL of the API endpoint
      const url = "http://127.0.0.1:8000/scanreceipt";

      // Convert the base64 image to a Blob object
      const base64Image = photo.split(",")[1];
      const blobImage = new Blob([atob(base64Image)], { type: 'image/png' });

      // Create a FormData object and append the image file
      const formData = new FormData();
      formData.append('image', blobImage, 'receipt.png');

  
        // Send POST request to the server
        const response = await fetch(url, {
          method: 'POST',
          body: formData,
        });
        

        if (response.ok) {
          console.log("Receipt saved successfully.");
          const res = await response.json()
          const actualRes: Ingredient[] = res.ingridients
          
          console.log("res: ", res)
          setPantryIngredients(actualRes)
          // navigate to recipe page
        } else {
          console.error("Failed to save receipt:", response.statusText);
        }

    } catch (error) {
      console.error("Error saving receipt:", error);
    }
  }

  function retakeReceipt(){
    setPhoto(null)
  }
  return (
    <>
      {!photo &&  <Camera
          idealFacingMode='environment'
          onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri)}}
          imageType="png"
        />}

      <div className="flex" style={{flexDirection:"column", justifyItems:"center"}}>
        {photo && <img src={photo} alt="Captured" style={{ maxWidth: '100%', maxHeight:"300px"}} />}
        {photo && <p style={{display:"flex",justifyContent:"flex-end"}}>Save Receipt?</p>}

        {photo  && 
          <div className="flex" style={{justifyContent:"center"}}> 
              <button className="camera--button" style={{backgroundColor:"red"}} onClick={retakeReceipt}>R</button>
              <button className="camera--button" style={{backgroundColor:"green"}} onClick={saveReceipt}>G</button>
          </div>}
      </div>

    </>

  );
}