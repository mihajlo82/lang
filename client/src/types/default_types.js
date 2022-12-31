export const MAIN_DEFAULT_TYPE = {
    itemData: {
        id: Math.random(),
        serbian: '',
        engilsh: '',
        picture: ''
    },
    setOnSuccess: () => { },
    totalQuestions: 0,
    counterSuccess: 0
}

export const HEADER_DEFAULT_TYPE = {
    mainStyle: {
        headerWrapp: {},
        image: {}
    }
}

export const BOX_MASTER_DEFAULT_TYPE = {
    itemData: {
        id: Math.random(),
        serbian: '',
        engilsh: '',
        picture: ''
    },
    mainStyle: {
        masterBoxImageWrapp: {},
        masterBoxImage: {},
        masterWordWrapp: {},
        inputWrapp: {},
        input: {},
        letSeeWrapp: {},
        letSeeBtn: {}
    },
    setText: () => { },
    setShowCounter: () => { }
}

export const COUNTERS_DEFAULT_TYPES = {
    mainStyle: {
        likesWrapp: {},
        likesWrappInner: {},
        counters: {},
        thumbs: {},
        counterNo: {}
    },
    counterSuccess: false,
    totalQuestions: 0
}

export const USE_ACTIVE_DEFAULT_TYPES = {
    itemData: {
        engilsh: '',
        setOnSuccess: () => { }
    },
}