export class Greeting {
    id;
    greeting;
    user;
    image;
    likes;

    constructor(id: string, greeting: string, user: string, image: string, likes: number) {
        this.id = id;
        this.greeting = greeting;
        this.user = user;
        this.image = image;
        this.likes = likes;
    }
}
