import { createServer, Factory, Model } from "miragejs";


//import faker from "faker"

type User = {
    name: string;
    email: string;
    created_at: string;
};


export function makeServer(){
    const server = createServer({
        models:{
            user: Model.extend<Partial<User>>({})
        },
        factories:{
            user: Factory.extend({
                name(i: number){
                    return `User ${i + 1}`
                },
                email(){
                    return "clebysilva5@gmail.com"//faker.internet.email().toLowerCase();
                },createdAt(){
                    return "2021-04-02T20:55:13.178Z";//faker.date.recent(10)
                },
            })

        },
        seeds(server){
            server.createList('user', 200)
        },
        routes(){
            this.namespace = "api";
            this.timing = 750;

            this.get('/users');
            this.post('/users');

            this.namespace= "";
            this.passthrough();

        }
    })
    return server;
}