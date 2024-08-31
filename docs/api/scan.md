# Scan

Supports both single scan and continuous scan modes.

## Parameters

| Property           | Type    | Default Value | Required | Description                                                                 |
| ------------------ | ------- | ------------- | -------- | --------------------------------------------------------------------------- |
| mode               | Int     | -             | Yes      | Scan mode: 1 for single scan, 2 for continuous scan                         |
| desiredFormats     | String  | null          | No       | Supported barcode formats. Pass `null` or leave it empty to support all formats |
| prompt             | String  |               | No       | Text prompt displayed on the scan interface.                                |
| cameraId           | Int     | 0             | No       | Camera ID, 0 for rear camera, 1 for front camera                            |
| beepEnabled        | Boolean | false         | No       | Enables scanning sound                                                      |
| timeout            | Int     | 5000          | No       | Timeout duration for single scan (in milliseconds)                          |
| barcodeImageEnabled| Boolean | false         | No       | Enables barcode image generation                                            |
| x                  | Int     | 0             | No       | x-coordinate for the scan interface display                                 |
| y                  | Int     | 0             | No       | y-coordinate for the scan interface display                                 |
| width              | Int     | 0             | No       | Width of the scan interface                                                 |
| height             | Int     | 0             | No       | Height of the scan interface                                                |


## Example

### Single Scan

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



### Continuous scan

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

