# Tag Manager Connector

A simple javascript library to send events to a tag manager container

## Install

```bash
npm install tagmanager-connector
```

```bash
yarn add tagmanager-connector
```

## Import
Import the module in your code like this

`import TagManager from 'tagmanager-connector';`

## Usage
`customEvent`
Send a custom event to the Tag Manager container associated to the application.
You need to pass an `eventName` for it to send the event, the other parameters are optional.

`TagManager.customEvent('clickOnBanner', {bannerTitle: 'Homepage', bannerColor: 'red'})`

This example will send the event `clickOnBanner` with the variables attach to it.

You will need to create a *Custom Event* trigger on the container named `clickOnBanner`
And a dataLayer Variable for each variable you want to use in the container:
DataLayer Variable : `bannerTitle`
DataLayer Variable : `bannerColor`

---------------

`virtualPageView`
Will send a custom event but you can pass the `page` option straight away.

`TagManager.virtualPageView('contact-us/success')`


# ToDo
For now the compiler is just doing a copy because the code is small and I haven't found a way to minify it with laravel mix or webpack.
We should find a way to minify this code.

