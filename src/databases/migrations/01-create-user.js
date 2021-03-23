//migrations給資料庫看得
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
        createdAt:{  //時間戳記:知道帳號何時建立
            type:Sequelize.DATE,
            allowNull: false,

        },
        updatedAt:{  //時間戳記:更新密碼
            type:Sequelize.DATE,
            allowNull:false,
        }
    });
}

export async function dwon(queryInterface,Sequelize){
    await queryInterface.dropTable('users');
}