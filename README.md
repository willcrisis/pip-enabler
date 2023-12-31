# PIP Enabler

A Chrome extension to remove `disablepictureinpicture` attribute from videos

![Image showing how the Chrome controls looks before the extension is clicked](before.jpg)

![Image showing how the Chrome controls looks after the extension is clicked](after.jpg)

## Installing

- Clone this repo anywhere
- In Chrome, navigate to `chrome://extensions`
- Enable `Developer mode`
- Click on `Load unpacked`
- Choose the `app` folder

## Using

In any page that contains a `video` element, just click the extension's icon or hit Ctrl+Shift+P (Cmd+Shift+P if on Mac).

The `disablepictureinpicture` attribute will then be removed, and you can use Chrome's built-in PIP feature.

It will only work on sites that uses the HTML5 `video` element with the `disablepictureinpicture` attribute.

## Building

By running `npm run build`, a file called `bundle.zip` will be created in the `build` folder containing all the files/folders from the `app` folder.