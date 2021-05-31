export default (pictures =[], action) => {
    
    switch (action.type){
        case 'CREATE_PICTURE' : 
            return [...pictures, action.payload]

        case 'UPDATE_PICTURE':
            return pictures.map(picture => (
                picture._id === action.payload._id ? action.payload : picture
            ))
        
        case 'FETCH_PICTURES' :
            return action.payload

        case 'ERASE_PICTURE' : 
            return pictures.filter(picture => picture._id !== action.payload)

            
        case 'ERASE_PICTURES_LINKED' : 
            return pictures.filter((picture)=> picture.themeLinked !== action.payload)
        


        default :
            return pictures

    }

}
