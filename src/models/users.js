
export default (sequelize, DataTypes) =>{
    const users = sequelize.define('user',{
        id:{
            type:DataTypes, UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        email:{
            tyep:DataTypes.STRING(20),
            unique: true,
        },
        password:{
            tyep:DataTypes.STRING(20),
        },
        email_verified:{
            type:DataTypes.Date
        }, 
    },{
        sequlize,
        modelName: 'users',
        freezeTableName:true,
    }),
    return usrs;
}