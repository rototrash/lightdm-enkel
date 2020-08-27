```

                                                e n k e l


A theme for lightdm-webkit2-greeter
```

![preview](preview.png)

## [DEMO](https://mihranmashhud.github.io/enkel-greeter/)

## This is a fork
This is a fork of the very pretty enkel theme by vndre.
In this fork I tried to make the UX better:
1. A user now may only have to type their username once after a reboot. Subsequent logins will only require the password for the logged in user.
2. When a username is typed that user's last session is automatically chosen.
3. The clock uses 12 hour time instead of 24 hour.
4. There is now a demo of the theme!

## Installation
(Will try to add to AUR soon!)
```
1. download latest release in project's `download` folder
2. copy uncompressed `enkel` folder to /usr/share/lightdm-webkit/themes/
3. update `webkit_theme` option in /etc/lightdm/lightdm-webkit2-greeter to `enkel`
```

## Change background image

location: `enkel/assets/background.jpg`

## Development

Recommended to use `yarn` over `npm`

- `yarn` to install dependencies
- `yarn dev` runs webpack-dev-server
- `yarn build` creates bundle and assets over `/dist`
- `yarn build-demo` creates bundle and assets over `/demo` used by the gh-pages branch

## Credits
- Background photo by [Bora Burri](https://unsplash.com/@borapic)
