
export class Post
{

    constructor(
        public id : number,
        public name : string,
        public content : string,
        public likes? : number,
        public dislikes? : number,
        public comments? : string[]
        )
    {

    }
}