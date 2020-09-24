import {Injectable} from '@angular/core';
import {Post} from './post.model';
import {StaticDatasource} from './static.datasource';

@Injectable()
export class PostsRepository
{
    private posts : Post[] = [];
    constructor(private datasource : StaticDatasource)
    {
        this.datasource.getPost().subscribe(post => {
            this.posts = post;
        })
    }

    getPosts() : Post[]
    {
        return this.posts;
    }
}