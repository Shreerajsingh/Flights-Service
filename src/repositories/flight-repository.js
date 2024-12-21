const CrudRepository = require("./crud-repository");
const {Flight, Airplane, Airport} = require('../models');
const { Sequelize } = require("sequelize");

class FLightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlights(filters, sort) {
        const response = await Flight.findAll({
            where: filters,
            order: sort,
            include: [
                {
                    model: Airplane,
                    required: true,
                    as: 'airplaneDetail'
                },
                {
                    model: Airport,
                    required: true,
                    as: 'departureAirport',
                    on: {
                        col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport.code"))
                    }
                },
                {
                    model: Airport,
                    required: true,
                    as: 'arrivalAirport',
                    on: {
                        col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
                    }
                }
            ]
        })

        return response;
    }
}

module.exports = FLightRepository;