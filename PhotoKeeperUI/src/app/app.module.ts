import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './comp/user-details/user-details.component';
import { UserListComponent } from './comp/user-list/user-list.component';
import { UserService } from "src/app/services/user.service";
import { HttpClientModule } from "@angular/common/http";
import { AlbumDetailsComponent } from './comp/album-details/album-details.component';
import { PhotoDetialsComponent } from './comp/photo-detials/photo-detials.component';
import { PhotoViewerComponent } from './comp/photo-viewer/photo-viewer.component';
import { UserphotosComponent } from "./comp/userphotos/userphotos.component";
import { AlbumlistComponent } from './comp/albumlist/albumlist.component';
import { CommunicatorService } from "src/app/services/communicator.service";
import { CheckboxComponent } from './comp/checkbox/checkbox.component';
import { PhotoManagerService } from "src/app/services/photo-manager.service";


const routes = [
  {
  path:'',
  component:AlbumlistComponent  
},
  {
  path:'pv',
  component:PhotoViewerComponent
},
{
path:'up',
  component:UserphotosComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    AlbumDetailsComponent,
    PhotoDetialsComponent,
    PhotoViewerComponent,
    UserphotosComponent,
    AlbumlistComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule, 
    HttpClientModule,    
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, CommunicatorService,PhotoManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
