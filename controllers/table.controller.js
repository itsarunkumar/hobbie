const Table = require('../model/table.model');
const handleAsync = require('../util')

exports.addData = handleAsync(async (req, res) => {
        const table = await Table.create({
            Name: req.body.Name,
            Phone_Number: req.body.Phone_Number,
            Email: req.body.Email,
            Hobbies: req.body.Hobbies,

        })
        res.status(200).json({
            message: "Data added successfully",
            table: table
        })

    }
)

exports.updateData = handleAsync(async (req, res) => {
        const table = await Table.findById(req.params.id)

        for (let i in req.body) {
            table[i] = req.body[i]
        }

        await table.save()


        res.status(200).json({
            message: "Data updated successfully",
            table: table
        })
    }
)

exports.deleteData = handleAsync(async (req, res) => {
        const table = await Table.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message: "Data deleted successfully",
            table: table
        })
    }
)

exports.getData = handleAsync(async (req, res) => {
        const table = await Table.find()
        res.status(200).json({
            message: "Data fetched successfully",
            table: table
        })
    }
)



