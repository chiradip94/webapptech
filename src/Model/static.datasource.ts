import {Post} from './post.model';
import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';

@Injectable()
export class StaticDatasource
{
    private Posts : Post[] = [
        new Post(1,"Three Tier Architecture","https://github.com/chiradip94/pages/raw/master/webapptech/three_tier_architecture.txt",0,0,[]),
        new Post(2,"Serverless Architecture","https://github.com/chiradip94/pages/raw/master/webapptech/three_tier_architecture.txt",0,0,["Great","Ok"]),
        new Post(1,"Three Tier Architecture","https://github.com/chiradip94/pages/raw/master/webapptech/three_tier_architecture.txt",0,0,[]),
        new Post(2,"Serverless Architecture","https://github.com/chiradip94/pages/raw/master/webapptech/three_tier_architecture.txt",0,0,["Great","Ok"]),
        new Post(1,"Three Tier Architecture","https://github.com/chiradip94/pages/raw/master/webapptech/three_tier_architecture.txt",0,0,[]),
        new Post(2,"Serverless Architecture","https://github.com/chiradip94/pages/raw/master/webapptech/three_tier_architecture.txt",0,0,["Great","Ok"]),
        new Post(1,"Three Tier Architecture","https://github.com/chiradip94/pages/raw/master/webapptech/three_tier_architecture.txt",0,0,[]),
        new Post(2,"Serverless Architecture","https://github.com/chiradip94/pages/raw/master/webapptech/three_tier_architecture.txt",0,0,["Great","Ok"]),
        new Post(1,"Three Tier Architecture","https://github.com/chiradip94/pages/raw/master/webapptech/three_tier_architecture.txt",0,0,[]),
        new Post(2,"Serverless Architecture","https://github.com/chiradip94/pages/raw/master/webapptech/three_tier_architecture.txt",0,0,["Great","Ok"]),
    ];

    getPost() : Observable<Post[]>{
        return from([this.Posts]);
    }
}