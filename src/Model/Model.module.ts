import {NgModule} from '@angular/core';
import {PostsRepository} from './post.repository';
import {StaticDatasource} from './static.datasource';

@NgModule({
    providers: [PostsRepository,StaticDatasource],
})

export class ModelModule{

}
