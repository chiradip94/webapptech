import { Component, OnInit } from '@angular/core';
import { Post } from 'src/Model/post.model';
import { PostsRepository } from 'src/Model/post.repository';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postTitle : string = "";
  content : string = "";
  constructor(private repos : PostsRepository, private http : HttpClient, private sanitizer : DomSanitizer ) { }

  ngOnInit(): void {
    
  }

  get Posts() : Post[]
  {
    return this.repos.getPosts();
  }

  changePost(post : Post)
  {
    this.postTitle= post.name;
    const headers= new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    this.http.get('https://raw.githubusercontent.com/chiradip94/webapptech/master/src/index.html', {responseType: 'text', 'headers': headers })
        .subscribe(data => console.log(this.sanitizer.bypassSecurityTrustUrl(data)) );

       ;
  }

}
