// Importing required modules and dependencies
const express = require("express")
const session = require("express-session")
const SequelizeStore = require("connect-session-sequelize")(session.Store)
const routes = require("./controllers")
const sequelize = require("./config/connection")
const exphbs = require("express-handlebars")
const hbs = exphbs.create({ helpers: require("./utils/helpers") })

// Creating express app and setting port
const app = express()
const PORT = process.env.PORT || 3001

// Setting up session object with secret, cookie, and store
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
}

// Middleware setup
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

// Session middleware setup
app.use(session(sess))

// Routes setup
app.use(routes)

// Database synchronization and server start
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
})