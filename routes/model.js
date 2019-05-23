const db = require("../data/dbConfig");

module.exports = function (table) {
    function find() {
        return db(table);
    }
    function findById(id) {
        return db(table).where({id}).first();
    }
    function add(json) {
        return db(table)
            .insert(json, "id")
            .then(([id]) => {
                return findById(id);
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
};
