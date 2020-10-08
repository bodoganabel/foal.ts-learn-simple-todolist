import { controller, Get, render } from '@foal/core';

import { ApiController, AuthController } from './controllers';

export class AppController {
  subControllers = [
    controller('/api', ApiController),
    controller('/auth', AuthController)
  ];

  @Get('/')
  index() {
    return render('templates/index.html');
  }

  @Get('/signin')
  signin() {
    return render('templates/signin.html');
  }

  @Get('/signup')
  signup() {
    return render('templates/signup.html');
  }
}
