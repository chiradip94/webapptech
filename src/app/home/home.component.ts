import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Post } from 'src/Model/post.model';
import { PostsRepository } from 'src/Model/post.repository'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private repos : PostsRepository) { 
    this.loadScripts();
  }

  ngOnInit(): void {
    }

  get Posts() : Post[]
  {
    return this.repos.getPosts();
  } 

  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
       'assets/scroll.js'
    ]; 
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    } 
 } 

}
