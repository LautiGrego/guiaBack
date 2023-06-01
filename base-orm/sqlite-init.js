const db = require("aa-sqlite");

async function CrearBaseSinoExiste() {
    await db.open("./.data/baseDatos.db")
    
    let existe = false;
    let res = null;

    res = await db.get(
        `SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'personajesDBZs' `,
    []
    );
    if (res.contar > 0) existe = true;
    if (!existe) {
        await db.run(
            `CREATE table personajesDBZs ( IdPersonaje INTEGER PRIMARY KEY AUTOINCREMENT, Nombre text NOT NULL UNIQUE, NivelDePoder INTEGER NOT NULL, fechaNacimiento text, Activo Boolean)`
        );
        console.log("tabla de personajes de DBZ creada!");
        await db.run(
            `insert into personajesDBZs values (1, 'Son Goku', 9000, '1963-04-16', 1), (2, 'Vegeta', 8500, '1968-02-12', 1), (3, 'Piccolo', 4200, 'null', 1), (4, 'Son Gohan', 3500, '1989-05-18', 1), (5, 'Trunks', 4000, '766-08-31', 1), (6, 'Goten', 3000, '767-03-28', 1), (7, 'Krillin', 1000, '1971-08-18', 1), (8, 'Bulma', 5, '1963-08-18', 1), (9, 'Android 18', 3500, '1987-11-12', 1), (10, 'Frieza', 12000, 'null', 1)`
        );
    };

    existe = false;
    res = null;
    res = await db.get(
        `SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'equipos' `,
    []
    );
    if (res.contar > 0) existe = true;
    if (!existe) {
        await db.run(
            `CREATE table equipos ( IdEquipo INTEGER PRIMARY KEY AUTOINCREMENT, Nombre text NOT NULL UNIQUE, CantCopas INTEGER, fechaFundacion text, Activo Boolean)`
        );
        console.log("tabla de equipos creada!");
        await db.run(
            `insert into equipos values (1, 'Boca Juniors', 73, '1905-04-05', 1), (2, 'River Plate', 50, '1907-01-10', 1), (3, 'Racing', 23, '1906-10-20', 1), (4, 'Independiente', 42, '1910-02-28', 1), (5, 'San Lorenzo', 32, '1912-04-30', 1), (6, 'Estudiantes', 12, '1911-11-23', 1), (7, 'Velez Sarfield', 15, '1902-12-21', 1), (8, 'Argentinos Juniors', 15, '1913-08-18', 1), (9, 'Belgrano', 1, '1920-11-10', 1), (10, 'Talleres', 2,'1919-02-12' , 1)`
        );
    };

    db.close()
}

module.exports = CrearBaseSinoExiste();