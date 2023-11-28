# Normal Business Hours
Joy Song

## Documentation
I started with test running the existing model code, and immediately ran into some errors: the code wouldn't run. I checked and soon realized that I forgot to npm install. After installing all the necessary add-ons, the code ran successfully, and I started to change up some details such as the normal hours time:
<img width="585" alt="Screen Shot 2023-11-28 at 2 58 10 AM" src="https://github.com/pancake0003/normal-business-hours/assets/146360951/6a6e4374-6944-43e3-8331-7e24c20fd23f">
(I also changed the "and" statement to an "or" statement or else it wouldn't work.)

Then, I decided to load up the denied html file locally to see if it'll work. Unfortunately, the little sticker that I made didn't load properly :((

<img width="50" alt="Screen Shot 2023-11-28 at 4 26 36 AM" src="https://github.com/pancake0003/normal-business-hours/assets/146360951/2c43fbd8-6400-4436-9920-caf2a593b59c">

I tried searching on stack overflow, and their answer seems to be that since i'm hosting the app on a server, my path for the png also needs to be a public-accessible path, so I tried uploading the png to GitHub first, then linking the GitHub image path to my html file, and it worked. :D
<img width="860" alt="Screen Shot 2023-11-28 at 4 35 31 AM" src="https://github.com/pancake0003/normal-business-hours/assets/146360951/3b99da4f-3838-4ba6-8a58-5b6ee9afb9a9">

After finishing the local troubleshoots, I moved on to Digital Ocean. This part went fairly smooth: I got a reserved IP address, I cloned Git repository and tried launching it with pm2. The only minor issue I ran into was that I forgot to npm install AGAIN :(((( But i fixed it very quickly. 
<img width="767" alt="Screen Shot 2023-11-28 at 5 27 07 AM" src="https://github.com/pancake0003/normal-business-hours/assets/146360951/9d16f764-3cfe-464a-8a39-5b197d283567">

And finally I had it running successfully on DigitalOcean as well!
<img width="823" alt="Screen Shot 2023-11-28 at 5 27 40 AM" src="https://github.com/pancake0003/normal-business-hours/assets/146360951/4415d85e-38c8-468c-a021-1d73c6f57952">

visit [http://24.144.64.246:3000/] to see my resume page!
