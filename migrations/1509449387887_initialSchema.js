exports.up = (pgm) => {
    pgm.createTable('user-details', {
        id: 'id',
        forename: {
            type: 'text',
            notNull: true,
        },
        surname: {
            type: 'text',
            notNull: true,
        },
        dob: {
            type: 'date',
            notNull: true,
        },
        nationality: {
            type: 'text',
            notNull: true,
        },
    })
};

exports.down = (pgm) => {
    pgm.dropTable('user-details');
};
