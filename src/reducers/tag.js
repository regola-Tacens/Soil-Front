export default (tags =[], action) => {

    switch(action.type) {

        case 'CREATE_TAG' :
            console.log('tag dans reducer',)
            return [...tags, action.payload]

        case 'FETCH_ALL_TAGS' :
            return action.payload

        case 'ERASE_TAG' : 
            return tags.filter(tag => tag._id !== action.payload )

        default :
            return tags
    }
}

