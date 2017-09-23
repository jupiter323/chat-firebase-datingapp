import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { SplashGroupChatPage } from '../pages/splash-group-chat/splash-group-chat';
import { GetStartedPage } from '../pages/get-started/get-started';
import { SignEmailPage } from '../pages/sign-email/sign-email';
import { SignUpEPage } from '../pages/sign-up-e/sign-up-e';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { MeetKinkStersPage } from '../pages/meet-kink-sters/meet-kink-sters';
import { MessagesPage } from '../pages/messages/messages';
import { DungeonFinderWalkthorughPage } from '../pages/dungeon-finder-walkthorugh/dungeon-finder-walkthorugh';
import { MenuSidePage } from '../pages/menu-side/menu-side';
import { MyProfileEdtingPage } from '../pages/my-profile-edting/my-profile-edting';
import { EmptyChatPage } from '../pages/empty-chat/empty-chat';
import { SignUpENot18Page } from '../pages/sign-up-e-not18/sign-up-e-not18';
import { SignInEIncorrectPage } from '../pages/sign-in-e-incorrect/sign-in-e-incorrect';
import { SettingsPage } from '../pages/settings/settings';
import { ItsAMatchPage } from '../pages/its-a-match/its-a-match';
import { UploadNoPicPage } from '../pages/upload-no-pic/upload-no-pic';
import { UploadPage } from '../pages/upload/upload';
import { DungeonListingPage } from '../pages/dungeon-listing/dungeon-listing';
import { WriteAReviewPage } from '../pages/write-a-review/write-a-review';
import { Chat } from '../pages/chat/chat';
import { DungeonFinderPage } from '../pages/dungeon-finder/dungeon-finder';
import { AddUserToGroupPage } from '../pages/add-user-to-group/add-user-to-group';
import { ChatGroupPage } from '../pages/chat-group/chat-group';



import {EmojiPickerComponent} from "../components/emoji-picker/emoji-picker";

import { EmojiProvider } from '../providers/emoji';
import {ChatService,ChatMessage,UserInfo} from "../providers/chat-service";


import {RelativeTime} from "../pipes/relative-time";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ScreenOrientation } from '@ionic-native/screen-orientation';

@NgModule({
  declarations: [
    MyApp,
    SplashGroupChatPage,
    GetStartedPage,
    SignEmailPage,
    SignUpEPage,
    MyProfilePage,
    MeetKinkStersPage,
    MessagesPage,
    DungeonFinderWalkthorughPage,
    MenuSidePage,
    MyProfileEdtingPage,
    EmptyChatPage,
    SignUpENot18Page,
    SignInEIncorrectPage,
    SettingsPage,
    ItsAMatchPage,
    UploadNoPicPage,
    UploadPage,
    DungeonListingPage,
    WriteAReviewPage,
    Chat,
    DungeonFinderPage,
    AddUserToGroupPage,
    ChatGroupPage,
    

    EmojiPickerComponent,

    
    RelativeTime

  ],
  imports: [
   
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplashGroupChatPage,
    GetStartedPage,
    SignEmailPage,
    SignUpEPage,
    MyProfilePage,
    MeetKinkStersPage,
    MessagesPage,
    DungeonFinderWalkthorughPage,
    MenuSidePage,
    MyProfileEdtingPage,
    EmptyChatPage,
    SignUpENot18Page,
    SignInEIncorrectPage,
    SettingsPage,
    ItsAMatchPage,
    UploadNoPicPage,
    UploadPage,
    DungeonListingPage,
    WriteAReviewPage,
    Chat,
    DungeonFinderPage,
    AddUserToGroupPage,
    ChatGroupPage,

    EmojiPickerComponent,

  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    EmojiProvider,
    ChatService,
    ChatMessage,
    UserInfo,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
