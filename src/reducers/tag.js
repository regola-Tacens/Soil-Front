export default (tags =[], action) => {

    switch(action.type) {

        case 'CREATE_TAG' :
            console.log('tag dans reducer',)
            return [...tags, action.payload]

        case 'FETCH_ALL_TAGS' :
            console.log(action.payload)
            return action.payload

        default :
            return tags
    }
}

