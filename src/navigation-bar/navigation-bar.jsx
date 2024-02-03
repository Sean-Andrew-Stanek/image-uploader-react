import React, {useState, useEffect, useRef} from 'react';
import './navigation-bar.scss';


export const NavigationBar = ({API_URI}) => {

    const [selectedImage, setSelectedImage] = useState(null);

    const fileInputRef = useRef();

    useEffect(() => {
        if(selectedImage) {
            uploadItem();
            setSelectedImage(null);
        }
    // eslint-disable-next-line
    }, [selectedImage]);

    const handleFileChange = (e) => {
        setSelectedImage(e.target.files[0]);
    }

    const simulateClick = (e) => {
        e.preventDefault();
        fileInputRef.current.click();
    }

    const uploadItem = () => {
        if(selectedImage) {
            const formData = new FormData();
            formData.append('image', selectedImage);
            formData.append('name', selectedImage.name);

            fetch(API_URI + '/images', {
                method: 'POST',
                body: formData,
            })
                .then((response) => {
                    if(!response.ok) {
                        throw new Error(`File upload failed with status ${response.status}`);
                    }
                    return response.text();
                })
                .then((data) => {
                    console.log('Server response: ', data);
                    //console.log('File uploaded successfully.');
                })
                .catch((error) => {
                    console.error('Error uploading file: ', error);
                });

        }
    };

    //TODO:  Tweak this.  Not working right.
    return (
        <div
            className='navigation-bar'
        >
            <form onSubmit={simulateClick}>
                <input
                    type='file'
                    name='file'
                    onChange={handleFileChange}
                    //style={{display:'none'}}
                    id='fileInput'
                    ref={fileInputRef}
                    style={{display:'none'}}
                />
                <button
                    className='nav-item' 
                    type='submit'
                >
                    Upload Image
                </button>        
            </form>
        </div>
    );
}