# Capacitor/Ionic

## DEMO

[Ionic7 Demo](https://github.com/byteee-fund/cordova-plugin-barcode-scanner-ionic7-demo)

## Install the plugin

```shell
npm install ../cordova-plugin-barcode-scanner
```

### Modify AndroidManifest.xml

Since Capacitor does not support Hook, you need to manually add the `tools` tag

```xml
 xmlns:tools="http://schemas.android.com/tools"
```

![img](/public/images/android.png)


### Modify Xcode Info.plist

Add the `NSCameraUsageDescription` key and your description to the Xcode Info.plist

![img](/public/images/xcode-1.png)