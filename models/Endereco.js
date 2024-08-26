const { Model, DataTypes } = require('sequelize');


class Endereco extends Model {}

Endereco.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    cep:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    logradouro:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    complemento:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    bairro:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    cidade:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ibge:{
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Endereco',
    tableName: 'enderecos',
    timestamps: true,
});
module.exports = Endereco;