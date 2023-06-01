const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize ("sqlite:" + "./.data/baseDatos.db")

const personajesDBZ = sequelize.define(
    "personajesDBZs",
    { IdPersonaje: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        Nombre: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Ingrese el nombre obligatoriamente",

                },
            },
        },

        NivelDePoder: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: 'El nivel de poder es requerido',
                },
            },
        },

        fechaNacimiento: {
            type: DataTypes.DATEONLY
        },

        Activo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
              notNull: {
                args: true,
                msg: "Ingrese activo obligatoriamente",

              }
            }
          },
      
    },

    { hooks: {
            beforeValidate: function (personajesDBZ, options) {
            if (typeof personajesDBZ.Nombre === "string") {
                personajesDBZ.Nombre = personajesDBZ.Nombre.toUpperCase().trim();
            }
            },
        },
        timestamps: false,
    },

);

const equipos = sequelize.define(
    "equipos",
    { IdEquipo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        Nombre: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Ingrese el nombre obligatoriamente",

                },
            },
        },

        CantCopas: {
            type: DataTypes.INTEGER,
            allowNull: true,

        },

        fechaFundacion: {
            type: DataTypes.DATEONLY
        },

        Activo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
            notNull: {
                args: true,
                msg: "Ingrese activo obligatoriamente",

                }
            }
        },

    },

    { hooks: {
            beforeValidate: function (equipos, options) {
            if (typeof equipos.Nombre === "string") {
                equipos.Nombre = equipos.Nombre.toUpperCase().trim();
            }
            },
        },
        timestamps: false,
    },

);

module.exports = {
    sequelize,
    personajesDBZ,
    equipos,
};