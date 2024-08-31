# Stop Scan

After opening the continuous scan interface, you can actively close the interface using this method.

## Parameters

None

## Example

```javascript
 window.BarcodeScanner.stopScan(
    function (response) {
        alert(JSON.stringify(response));
    },
    function (error) {
        alert(JSON.stringify(error));
    }
);
```



