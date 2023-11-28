# Normal Business Hours
Joy Song

## Documentation
I started with test running the existing model code, and immediately ran into some errors: the code wouldn't run. I checked and soon realized that I forgot to npm install. After installing all the necessary add-ons, the code ran successfully, and I started to change up some details such as the normal hours time:

(I also changed the "and" statement to an "or" statement or else it wouldn't work.)

Then, I decided to load up the denied html file locally to see if it'll work. Unfortunately, the little sticker that I made didn't load properly :((

I tried searching on stack overflow, and their answer seems to be that since i'm hosting the app on a server, my path for the png also needs to be a public-accessible path, so I tried uploading the png to GitHub first, then linking the GitHub image path to my html file, and it worked. :D

After finishing the local troubleshoots, I moved on to Digital Ocean. This part went fairly smooth: I got a reserved IP address, I cloned Git repository and tried launching it with pm2. The only minor issue I ran into was that I forgot to npm install AGAIN :(((( But it fixed it very quickly. 

And finally I had it running successfully on DigitalOcean as well!

