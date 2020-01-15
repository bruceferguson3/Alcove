import React from 'react';
import Button from 'react-bootstrap/Button';

const Step4 = () => {
    return(
        <div>
            <div>
                <div>
                    Give your posting a short title
                </div>
                <div>
                    <input></input>
                </div>
            </div>
            <div>
                <div>
                    Describe your item for renters
                </div>
                <div>
                    <textarea style={{width: '30em', height: '10em'}}></textarea>
                </div>
            </div>
            <div>
                <div>
                    Upload images
                </div>
                <input type='file'></input>
            </div>
            <div>
                <Button>Cancel</Button>
                <Button>Submit</Button>
            </div>
        </div>
    )
}

export default Step4;