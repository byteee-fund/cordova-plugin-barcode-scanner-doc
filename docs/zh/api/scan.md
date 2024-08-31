# 扫描(scan)

支持单次扫码和连续扫码模式

## 参数


| 属性 | 类型 | 默认值 | 是否必须 | 描述                          |
| ----------- | ------ | -------------- | -------- | ------------------------------------ |
| mode        | Int | -              | Yes      | 扫描模式：1：单次扫描 2： 连续扫描 |
| desiredFormats | String | null | No | 支持的条形码格式，具体参考, 传`null`或者不传则代表支持所有 |
| prompt | String |  | No | 扫码界面显示的文字提示。 |
| cameraId | Int | 0 | No | 相机ID，0 为后置摄像头 1为前置摄像头 |
| beepEnabled | Boolean | false | No | 扫码声音开启 |
| timeout | Int | 5000 | No | 单次扫码超时时间 |
| barcodeImageEnabled | Boolean | false | No | 是否生成扫码图片 |
| x | Int | 0 | No | 扫码界面显示的x坐标 |
| y | Int | 0 | No | 扫码界面显示的y坐标 |
| width | Int | 0 | No | 扫码界面的宽度 |
| height | Int | 0 | No | 扫码界面的高度 |



## 示例

### 单次扫码

```javascript
 window.BarcodeScanner.scan( {
        mode: 1,
        desiredFormats: "QR_CODE,UPC_A,UPC_E,EAN_8,EAN_13", 
        prompt: "请将条形码置于取景框内扫描", 
        cameraId: 0, 
        beepEnabled: true, 
        timeout: 10000, 
        barcodeImageEnabled: true 
    },
    function (response) {
        alert(JSON.stringify(response));
    },
    function (error) {
        alert(JSON.stringify(error));
    }
);
```



### 连续扫码

```javascript
 window.BarcodeScanner.scan({
        mode: 2,
        desiredFormats: "CODE_128",
        prompt: "请将条形码置于取景框内扫描", 
        cameraId: 0, 
        beepEnabled: true,
        y: 0,
        height: 300
    },
    function (response) {
        console.log(JSON.stringify(response));
    },
    function (error) {
        alert(JSON.stringify(error));
    }
);
```

