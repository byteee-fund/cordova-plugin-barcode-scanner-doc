# Capacitor/Ionic

## DEMO

[Ionic7 Demo](https://github.com/byteee-fund/cordova-plugin-barcode-scanner-ionic7-demo)

## 安装插件

```shell
npm install ../cordova-plugin-barcode-scanner
```

### AndroidManifest.xml 修改

由于Capacitor不支持Hook, 需要手动增加`tools`标签

```xml
 xmlns:tools="http://schemas.android.com/tools"
```

![img](/public/images/android.png)


### 修改 Xcode Info.plist

在 Info.plist 里添加 `NSCameraUsageDescription` 健值和你的描述内容

![img](/public/images/xcode-1.png)