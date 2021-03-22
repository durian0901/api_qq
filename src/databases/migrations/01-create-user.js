export async function up(queryInterface,Sequelize){
    await queryInterface.createTable('users',{
        id:{
            type:Sequelize.UUID,
            primaryKey: true,
        },
        email:{
            type:Sequelize.STRING,
            unique: true,
        },
        password:{
            type:Sequelize.STRING
        },
        email_verified:{
            type:Sequelize.STRING
        },
        createTable:{  //時間戳記:知道帳號何時建立
            type:Sequelize.DATE,
            allowNull: false,

        },
        updataAt:{  //時間戳記:更新密碼
            type:Sequelize.DATE,
            allowNull:false,
        }
    });
}

export async function dwon(queryInterface,Sequelize){
    await queryInterface.dropTable('users');
}