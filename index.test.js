const {sequelize} = require('./db')
const {Board, Cheese, User} = require('./models/index')

describe("Cheese, Board, and User models", () => {
    beforeAll(async () => {
        await sequelize.sync({force: true});
    })

    test("can create a User", async () => {
        const firstUser = await User.create({name: "Uri", email: "uri@no.com"})

       
        expect(firstUser).toBeDefined();
        expect(firstUser.name).toBe("Uri");
        expect(firstUser.email).toBe("uri@no.com")
        expect(firstUser).toBeInstanceOf(User)
        
    })

    test("can create a Board", async () => {
        const firstBoard = await Board.create({type: "mixed", description: "mix of cheeses", rating: 10})

       
        expect(firstBoard).toBeDefined();
        expect(firstBoard.type).toBe("mixed");
        expect(firstBoard.description).toBe("mix of cheeses")
        expect(firstBoard).toBeInstanceOf(Board)
        
    })

    test("can create a Cheese", async () => {
        const firstCheese = await Cheese.create({title: "blue", description: "moldy cheese"})

       
        expect(firstCheese).toBeDefined();
        expect(firstCheese.title).toBe("blue");
        expect(firstCheese.description).toBe("moldy cheese")
        expect(firstCheese).toBeInstanceOf(Cheese)
        
    })

    test("add and view mulitple Boards per User", async () => {
        const firstBoard = await Board.findByPk(1);
        const secondBoard = await Board.create({
            type: "cheddars", 
            description: "different types of cheddar", 
            rating: 8
            });
        // console.log(band1.getMusicians())

        const firstUser = await User.findByPk(1);

        firstUser.addBoards([firstBoard, secondBoard])
        
        expect(await firstUser.getBoards()).toBeDefined();
        expect(await firstUser.getBoards()).toHaveLength(2);

    })

});

    