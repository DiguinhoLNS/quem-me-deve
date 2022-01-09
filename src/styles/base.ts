const ElevationBase = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
}

export const Elevation = {
    elevation1: {
        ...ElevationBase,
        elevation: 1,
    },
    elevation2: {
        ...ElevationBase,
        elevation: 2,
    },
    elevation3: {
        ...ElevationBase,
        elevation: 3,
    },
    elevation4: {
        ...ElevationBase,
        elevation: 4,
    },
    elevation5: {
        ...ElevationBase,
        elevation: 5,
    }
}