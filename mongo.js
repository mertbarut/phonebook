const mongoose = require('mongoose')

//mongoose.set('debug', true);

const database = "phonebookApp"

if (process.argv.length === 5) {
    var password = process.argv[2]
    var personName = process.argv[3]
    var personNumber = process.argv[4]
} else if (process.argv.length === 3) {
    var password = process.argv[2]
}

const url = `mongodb+srv://mertbarut:${password}@cluster0.5ghqt.mongodb.net/${database}?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String, 
    number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length < 5) {
    if (process.argv.length === 3) {
        console.log('phonebook:')
        Person
            .find({})
            .then(result => {
                result.forEach(person => {
                    console.log(`${person.name} ${person.number}`)
                })
            mongoose.connection.close()
            process.exit(1)
        })
    }
    else if (process.argv.length < 3)
    {
        console.log('Please provide the password as an argument with person\'s name and number: node mongo.js <password> <name> <password>')
        mongoose.connection.close()
        process.exit(1)
    }
    else
    {
        const person = new Person({
        name: personName,
        number: personNumber,
        })

        person.save().then(result => {
        console.log('person saved!')
        console.log(result)
        mongoose.connection.close()
        })
    }
}
