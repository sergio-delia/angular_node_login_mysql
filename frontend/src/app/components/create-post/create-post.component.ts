import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Post } from 'src/app/models/Post';

import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private authService: AuthService, private postService: PostService){}

  @ViewChild("formDirective") formDirective: NgForm //Serve per resettare gli errori quando si fa il submit
  @Output() create: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  isOpen = false;

  ngOnInit(): void {
    this.form = this.createFormGroup()
  }


  createFormGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl("", [Validators.required, Validators.minLength(5)]),
      body: new FormControl("", [Validators.required, Validators.minLength(10)]),
    })
  }

  onSubmit(formData: Pick<Post, "title" | "body">): void{
    console.log(formData);

    this.postService.createPost(formData, this.authService.userId).pipe(first()).subscribe(() => {

      this.create.emit(null); //Emit event per l'output

    })

    this.form.reset();
    this.formDirective.resetForm();
  }

}
