const userExists = ({name,email,password}) => {
    return [
        {
            $match: {
                email: `${email}`, 
            },
        }
    ];
};



module.exports = {
    userExists
}