export default (pictures =[], action) => {
    
    switch (action.type){
        case 'CREATE_PICTURE' : 
            return [...pictures, action.payload]
        
        case 'FETCH_PICTURES' :
            console.log('fetched', action)
            return action.payload
            
        case 'ERASE_PICTURES_LINKED' : 
        console.log('received in reducer themeID', action)
        return pictures.filter((picture)=> picture.themeLinked !== action.payload)


        default :
            return pictures

    }

}
