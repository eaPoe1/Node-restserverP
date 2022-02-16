


const userGet = (req, res) => {
    res.json({
        msg: 'API - get'
    });
}

const userPost = (req, res) => {

    const { name } = req.body;

    res.json({
        msg: 'API - Post',
        name
    });
}

const userPut = (req, res) => {

    const { id } = req.params;

    res.json({
        msg: 'API - put',
        id
    });
}

const userDelete = (req, res) => {
    res.json({
        msg: 'API - Delete'
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}