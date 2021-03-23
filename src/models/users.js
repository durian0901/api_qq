export default(sequelize,DataTypes)=>{
    const users = sequelize.define('users',{         
        id:{
            type:DataTypes.UUID,         //UUID =>36長度的資料欄位
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        email:{
            type:DataTypes.STRING(60),
            unique: true,
        },
        password:{
            type:DataTypes.STRING(20),
        },
        email_verified:{
            type:DataTypes.DATE  //用日期驗證信箱
        }, 
    },{     //config設定
        sequelize,
        modelName: 'users',
        freezeTableName:true,   //確定要用自己取的資料表名稱
    });
    return users;
};


// export default (sequelize, DataTypes) =>{
//     const users = sequelize.define('user',{
//         id:{
//             type:DataTypes, UUID,
//             defaultValue: DataTypes.UUIDV4,
//             primaryKey: true,
//         },
//         email:{
//             tyep:DataTypes.STRING(20),
//             unique: true,
//         },
//         password:{
//             tyep:DataTypes.STRING(20),
//         },
//         email_verified:{
//             type:DataTypes.Date
//         }, 
//     },{
//         sequlize,
//         modelName: 'users',
//         freezeTableName:true,
//     });
//     return usrs;
// };