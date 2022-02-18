const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema ({
    title: {
        type: String
    },
    director: {
        type: String
    },
    stars: {
        type: Array
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    showtimes: {
        type: Array
    }

})

const Movies = mongoose.model("Movies", movieSchema)

module.exports = Movies