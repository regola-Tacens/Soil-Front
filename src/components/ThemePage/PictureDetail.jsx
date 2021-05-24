import React from 'react'
import { useSelector } from 'react-redux'

export default function PictureDetail({ pictureId, setPictureId }) {
    const pictures = useSelector(state => state.pictures)
    // const picture = useSelector((state) =>state.pictures.find(picture._id === pictureId))
    const picture = pictures.find(picture =>picture._id === pictureId )

    return (
        <div>
            <div className="pictureDetailHeader">
                <img src={picture.img} alt="pictureName" />
                <div className="infos">
                    <h1 className="themeSubTitle">Name : {picture.pictureName}</h1>
                    <h2 className="themeSubTitle">Description: {picture.description}</h2>
                    <button  className="themePageButton" onClick={()=> setPictureId(null)}>BACK</button>
                </div>
            </div>
            {/* picture { pictureId } */}
            {/* {JSON.stringify(picture._id)} */}
        </div>
    )
}
