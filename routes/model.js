const db = require("../data/dbConfig");

module.exports = function (table) {
    function find() {
        return db(table);
    }
    async function findById(id) {
        console.log("Here is the table being used in findById: ", table);
        console.log("Here is the id being passed to findById: ", id)
        return await db(table).where({id}).first();
    }
    function add(json) {
        return db(table)
            .insert(json, "id")
            .then(([id]) => {
                console.log("User from add method: ", id)
                findById(id);
            });
    }
    function findBy(filter) {
        return db(table).where(filter).first();
    }
    return {
        find,
        findById,
        add,
        findBy
    }
}
